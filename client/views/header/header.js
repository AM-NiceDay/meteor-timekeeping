Template.header.rendered = function() {
	 $(".button-collapse").sideNav();
	 $('.collapsible').collapsible({
      accordion : false
    });
}

Template.header.helpers({
  dates: function() {
    return Days.find({}, { date: 1 }).fetch();
  }
});

Template.datesList.rendered = function() {
	$(".dropdown-button").dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true,
      hover: false,
      alignment: 'right',
      belowOrigin: true
    });
}