Template.day.helpers({
	day: function() {
		var date = Session.get('date');
		var now = moment();
		var day = Days.findOne({date: Session.get('date')});

		if (date != now.format('YYYY-MM-DD')) {
			return day;
		} else {
			var filteredRecords = lodash.filter(day.records, function(record) {
				return record.time <= now.format('HH:mm');
			});
			day.records = filteredRecords;
			return day;
		}
	},
	
	records: function() {
		return Days.findOne({date: Session.get('date')}).records;
	}
});