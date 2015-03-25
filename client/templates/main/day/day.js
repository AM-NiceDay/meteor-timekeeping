Template.day.helpers({
	day: function() {
		return Days[Session.get('day')];
	},
	records: function() {
		return Days[Session.get('day')].records;
	}
});