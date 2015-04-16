Template.chart.rendered = function() {
	this.rendered = true;
	var templateData = this.data;
	drawChart(this, templateData.data, templateData.chart);
}

Template.chart.helpers({
	draw: function() {
		var template = Template.instance();
		if (template.rendered) {
			template.chart.destroy();
			drawChart(template, this.data, this.chart);
		}
	}
});

function drawChart(template, data, chart) {
	var ctx = template.find('#pieChart').getContext('2d');
	if (chart != undefined && chart == 'polarArea') {
		template.chart = new Chart(ctx).PolarArea(data);
	} else {
		template.chart = new Chart(ctx).Pie(data);
	}
}
