Template.registerHelper('pieChart', function(day) {
		var dayTransformer = new Day(day);
		var chartData = {};
		var data = dayTransformer.toPieChartData()
		chartData.data = data.length > 0 ? data : null;
		chartData.chart = 'pie';
		return chartData;
});

Template.registerHelper('polarAreaChart', function(day) {
		var dayTransformer = new Day(day);
		var chartData = {};
		var data = dayTransformer.toPieChartData()
		chartData.data = data.length > 0 ? data : null;
		chartData.chart = 'polarArea';
		return chartData;
});