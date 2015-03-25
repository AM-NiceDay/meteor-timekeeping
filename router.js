Router.configure({
	layoutTemplate: 'layout',
	waitOn: function() {
		return Meteor.subscribe('dates');
	}
});

Router.route('/', function() {
	this.render('home');
});

Router.route('/:date', {
	waitOn: function() {
		return Meteor.subscribe('day', this.params.date);
	},
	
	action: function() {
		this.wait();
		Session.set('date', this.params.date);
		this.render('day');
	}
});