var timer = new ReactiveTimer();
timer.start(0.5);

Template.registerHelper('currentRecordTime', function() {
	timer.tick();
	var date = Session.get('date');
	var day = Days.find({ date: date }).fetch()[0];

	if (day) {
		var sortedRecords = lodash.sortBy(day.records, function(n) {
	    return n.time;
		});

		var lastRecord = sortedRecords[sortedRecords.length - 1];
		var ms = moment().diff(moment(lastRecord.time, 'HH:mm'));
		var d = moment.duration(ms);
		var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
		return s;
	}
});