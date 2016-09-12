var app = angular.module("MyApp");

app.service("CartoonService", function (){

	var _this = this;

	this.cartoons = [
		{
			url: "http://images1.laweekly.com/imager/daria-and-jane-hating-life-as-usual/u/original/2444846/picture_7.png",
			title: "Daria",
			description: "Daria and Jane"
		},
		
		{
			url: "http://24.media.tumblr.com/tumblr_lstmgrraLw1qke3bko1_500.jpg",
			title: "Ren and Stimpy",
			description: "A snapshot Ren and Stimpy"
		},
		
		{
			url: "http://2.media.collegehumor.cvcdn.com/dev/60/30/bc1ff0558e5015c309695549cafc8941.jpg",
			title: "Rocko's Modern Life",
			description: "Rocko and Filburt"
		},

		{
			url: "http://dd50b9f9721513d95259-12857791395075bdb2cd852465f689fc.r36.cf1.rackcdn.com/BB_01.jpg",
			title: "Bavis And Butt-head",
			description: "uhhhhhh"
		}

	];
	
	this.addCartoon = function(cartoon){
		this.cartoons.push(cartoon);
		
	}
});