Template.timetable.helpers({
	reversedRecords: function() {
		var sortedRecords = lodash.sortBy(this, function(record) {
	    return record.time;
		});

		return sortedRecords.reverse();
	}
});

Template.record.helpers({
	isCurrentRecord: function() {
		if (getCurrentRecord()) {
			return this.time === getCurrentRecord().time;
		}
	}
})