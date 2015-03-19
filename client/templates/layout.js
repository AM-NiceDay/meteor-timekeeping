Template.layout.helpers({
	day: Days['2015-02-24'],
	days: Days,
	arrayify: function(obj) {
		result = [];
		for (var key in obj) {
			result.push({key: key, value: obj[key]});
		}
		//console.log(result);
		return result;
	}
});