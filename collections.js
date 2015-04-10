Days = new Mongo.Collection('days');

Days.allow({
	update: function() { 
		return true;
	}
});
