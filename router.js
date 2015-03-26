Router.configure({
	layoutTemplate: 'layout',
	waitOn: function() {
		return Meteor.subscribe('dates');
	}
});

Router.route('/', {
	waitOn: function() {
		return Meteor.subscribe('day', moment().format('YYYY-MM-DD'));
	},
	
	action: function() {
		Session.set('date', moment().format('YYYY-MM-DD'));
		this.render('day');
	}
});

Router.route('/:date', {
	waitOn: function() {
		return Meteor.subscribe('day', this.params.date);
	},
	
	action: function() {
		Session.set('date', this.params.date);
		this.render('day');
	}
});