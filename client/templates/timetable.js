Template.timetable.helpers({
	records: function() {
		return Days[Session.get('day')].records;
	}
});