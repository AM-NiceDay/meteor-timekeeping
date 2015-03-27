Template.layout.rendered = function() {
	 $(".button-collapse").sideNav();
	 $('.collapsible').collapsible({
      accordion : false
    });
}

Template.layout.helpers({
	days: function() {
		return Days.find().fetch();
	}
});

Template.daysList.rendered = function() {
	$(".dropdown-button").dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true,
      hover: false,
      alignment: 'right',
      belowOrigin: true
    });
}