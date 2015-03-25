Day = function(day) {
	this.day = day;
};

Day.prototype.getDuration = function(start, end) {
	var hoursDifference = end.hour - start.hour;
	var minuteDifference = end.minute - start.minute;

	return hoursDifference * 60 + minuteDifference;
}

Day.prototype.toPieChartData = function() {
	var data = [];
	var colorFactory = new ColorFactory();

	var records = this.day.records;
	var _this = this;

	lodash.forEach(records, function(record, index) {
		if (index == records.length - 1) {
			var duration = _this.getDuration(record, _this.day.end);
		} else {
			var duration = _this.getDuration(record, records[index + 1]);
		}

		duration = (duration / 60).toFixed(2) / 1;
		if (lodash.findIndex(data, {label: record.tag}) == -1) {
			var colorPair = colorFactory.getColorPair();
			data.push({
				value: duration,
				color: colorPair.color,
				highlight: colorPair.highlight,
				label: record.tag
			})
		} else {
			var index = lodash.findIndex(data, {label: record.tag});
			data[index].value += duration;
		}
	});

	return data;
}