Day = function(day) {
	this.day = day;
};

Day.prototype.getDuration = function(start, end) {
	var startTime = moment(start.time, "HH:mm");
	var endTime = moment(end.time, "HH:mm");

	var hoursDifference = endTime.hour() - startTime.hour();
	var minuteDifference = endTime.minute() - startTime.minute();
	return hoursDifference * 60 + minuteDifference;
}

Day.prototype.toPieChartData = function() {
	var data = [];
	var colorFactory = new ColorFactory();

	var records = this.day.records;
	var _this = this;

	lodash.forEach(records, function(record, index) {
		if (index == records.length - 1) {
			if (_this.day.end == undefined) {
				var end = {
					time: moment().format("HH:mm")
				}
			} else {
				var end = {
					time: _this.day.end
				}
			}
			var duration = _this.getDuration(record, end);
		} else {
			var duration = _this.getDuration(record, records[index + 1]);
		}

		duration = (duration / 60).toFixed(2) / 1;
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

	return data;
}