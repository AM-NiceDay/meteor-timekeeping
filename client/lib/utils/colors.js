ColorFactory = function() {
	this.colors = [
		{
      color:"#F7464A",
      highlight: "#FF5A5E"
	  },
	  {
      color: "#46BFBD",
      highlight: "#5AD3D1"
	  },
	  {
      color: "#FDB45C",
      highlight: "#FFC870"
	  },
	  {
      color: "#949FB1",
      highlight: "#A8B3C5"
	  },
	  {
      color: "#4D5360",
      highlight: "#616774"
  	},
  	//custom
  	{
  		color: "#FFFC73",
  		highlight: "#FFFC80"
  	}
	];
}

ColorFactory.prototype.getColorPair = function() {
	return this.colors.shift();
}