Template.layout.helpers({
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