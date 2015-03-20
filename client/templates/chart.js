Template.chart.rendered = function() {
	var pieChart;
	var polarAreaChart;
	Tracker.autorun(function() {

		var day = Days[Session.get('day')];
		var records = day.records;

		var data = [];
		var colorFactory = new ColorFactory();

		lodash.forEach(records, function(record, index) {
			if (index == records.length - 1) {
				var duration = getDuration(record, day.end);
			} else {
				var duration = getDuration(record, records[index + 1]);
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


		var computation = Tracker.currentComputation;
		if (!computation.firstRun) {
			pieChart.destroy();
			polarAreaChart.destroy();
		}
		pieChart = drawPieChart(data);
		polarAreaChart = drawPolarAreaChart(data);
		
	});
};

function getDuration(start, end) {
	var hoursDifference = end.hour - start.hour;
	var minuteDifference = end.minute - start.minute;

	return hoursDifference * 60 + minuteDifference;
}

function drawPieChart(data) {
	var ctx = $('#pieChart').get(0).getContext('2d');
	return new Chart(ctx).Pie(data);
}

function drawPolarAreaChart(data) {
	var ctx = $('#polarAreaChart').get(0).getContext('2d');
	return new Chart(ctx).PolarArea(data);
}