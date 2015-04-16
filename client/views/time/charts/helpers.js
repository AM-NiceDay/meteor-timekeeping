Template.registerHelper('pieChart', function(day) {
		var dayTransformer = new Day(day);
		var chartData = {};
		chartData.data = dayTransformer.toPieChartData();
		chartData.chart = 'pie';
		return chartData;
});

Template.registerHelper('polarAreaChart', function(day) {
		var dayTransformer = new Day(day);
		var chartData = {};
		chartData.data = dayTransformer.toPieChartData();
		chartData.chart = 'polarArea';
		return chartData;
});