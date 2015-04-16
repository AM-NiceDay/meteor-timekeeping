Template.header.rendered = function() {
	 $(".button-collapse").sideNav();
	 $('.collapsible').collapsible({
      accordion : false
    });
}

Template.header.helpers({
  dates: function() {
    return Days.find({}, { date: 1 }).fetch();
  },

  endTime: function() {
    var day = Days.findOne({ date: Session.get('date')}, { fields: { end: 1 } });
    if (day) {
      return day.end;
    }
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