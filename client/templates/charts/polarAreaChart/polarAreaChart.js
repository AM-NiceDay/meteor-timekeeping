Template.polarAreaChart.rendered = function() {
	var polarAreaChart;

	Tracker.autorun(function() {
		var day = new Day(Days[Session.get('day')]);
		var data = day.toPieChartData();

		var computation = Tracker.currentComputation;
		if (!computation.firstRun) {
			polarAreaChart.destroy();
			polarAreaChart = drawPolarAreaChart(data);
		} else {
			polarAreaChart = drawPolarAreaChart(data);
		}
	});
};

function drawPolarAreaChart(data) {
	var ctx = $('#polarAreaChart').get(0).getContext('2d');
	return new Chart(ctx).PolarArea(data);
}