Template.pieChart.rendered = function() {
	var pieChart;

	Tracker.autorun(function() {
		var day = new Day(Days[Session.get('day')]);
		var data = day.toPieChartData();

		var computation = Tracker.currentComputation;
		if (!computation.firstRun) {
			pieChart.destroy();
			pieChart = drawPieChart(data);
		} else {
			pieChart = drawPieChart(data);
		}
	});
};

function drawPieChart(data) {
	var ctx = $('#pieChart').get(0).getContext('2d');
	return new Chart(ctx).Pie(data);
}