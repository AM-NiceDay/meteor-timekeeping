Day = function(day) {
	this.day = day;
};

Day.prototype.getDuration = function(start, end) {
	var startTime = moment(start, 'HH:mm');
	var endTime = moment(end, 'HH:mm');

	var hoursDifference = endTime.hour() - startTime.hour();
	var minuteDifference = endTime.minute() - startTime.minute();
	return hoursDifference * 60 + minuteDifference;
}

Day.prototype.toPieChartData = function() {
	var data = [];
	var colorFactory = new ColorFactory();

	var records = this.day.records;
	var _this = this;

	records = lodash.sortBy(records, function(record) {
    return record.time;
	});	

	lodash.forEach(records, function(record, index) {
		if (index == records.length - 1) {
			if (_this.day.end == undefined) {
				var end = moment().format('HH:mm');
			} else {
				var end = _this.day.end;
			}
			var duration = _this.getDuration(record.time, end);
		} else {
			var duration = _this.getDuration(record.time, records[index + 1].time);
		}

		
		if (lodash.findIndex(data, {label: record.project}) == -1) {
			var colorPair = colorFactory.getColorPair();
			data.push({
				value: duration,
				color: colorPair.color,
				highlight: colorPair.highlight,
				label: record.project
			})
		} else {
			var index = lodash.findIndex(data, {label: record.project});
			data[index].value += duration;
		}
	});

	lodash.forEach(data, function(item) {
		item.value = (item.value / 60).toFixed(2) / 1;
	});

	var sortedData = lodash.sortBy(data, function(item) {
		return item.value;
	}).reverse();

	return sortedData;
}