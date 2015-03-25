Meteor.publish('dates', function() {
	return Days.find({}, { fields: {date: 1} });
});

Meteor.publish('days', function() {
	return Days.find();
});

Meteor.publish('day', function(date) {
	return Days.find({date: date});
});