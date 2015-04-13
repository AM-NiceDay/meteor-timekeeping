var timer = new ReactiveTimer();
timer.start(0.5);

Template.registerHelper('currentRecordTime', function() {
	timer.tick();
	var date = Session.get('date');
	var day = Days.find({ date: date }).fetch()[0];
	var now = moment();

	if (day && date == now.format('YYYY-MM-DD') && !day.end) {
		var filteredRecords = lodash.filter(day.records, function(record) {
			return record.time < now.format('HH:mm');
		});
		var sortedRecords = lodash.sortBy(filteredRecords, function(record) {
	    return record.time;
		});

		if (sortedRecords.length > 0) {
			var lastRecord = sortedRecords[sortedRecords.length - 1];
			var ms = now.diff(moment(lastRecord.time, 'HH:mm'));
			var d = moment.duration(ms);
			var s = Math.floor(d.asHours()) + moment.utc(ms).format(':mm:ss');
			return s;
		}
	}
});