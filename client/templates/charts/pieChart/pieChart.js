Template.pieChart.rendered = function() {
	this.rendered = true;
	Template.pieChart.helpers.draw();
	/*var day = new Day(Days[Session.get('day')]);
	var data = day.toPieChartData();
	var ctx = this.find('#pieChart').getContext('2d');
	this.pieChart = new Chart(ctx).Pie(data);*/
}

Template.pieChart.helpers({
	draw: function() {
		var template = Template.instance();
		var day = Session.get('day');
		if (template.rendered) {
			var day = new Day(Days[day]);
			var data = day.toPieChartData();
			template.pieChart.destroy();
			var ctx = template.find('#pieChart').getContext('2d');
			template.pieChart = new Chart(ctx).Pie(data);
		}
	}
});
