Template.day.helpers({
	day: function() {
		return Days.findOne({date: Session.get('date')});
	},
	records: function() {
		return Days.findOne({date: Session.get('date')}).records;
	}
});