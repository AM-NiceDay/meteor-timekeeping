Days = new Mongo.Collection('days');

Days.allow({
	update: function() { 
		console.log("Yo");
		return true;
	}
});
