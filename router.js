Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function() {
	this.render('home');
});

Router.route('/:day', function() {
	Session.set('day', this.params.day);
	this.render('day');
});