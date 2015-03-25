Meteor.startup(function() {

	if (Days.find().count() === 0 || Days.findOne().date != moment().subtract(1, 'days').format('YYYY-MM-DD')) {
		console.log('Adding start days');
		
		lodash.each(Days.find().fetch(), function(day) {
			Days.remove(day._id);
		});

		lodash.each(BootstrapDays, function(day) {
			Days.insert(day);
		}); 
	}

});

