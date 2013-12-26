define([
	'knockout',
	'deco/events'
], function(
	ko,
	when
){
	
	return function NavbarVM(){
		var self = this;

		this.active = ko.observable("");
		this.showNavbar = ko.observable(false);

		function highlightTheCorrectLink(url, path){
			console.log(path[0]);
			self.active(path[0]);
			self.showNavbar(false);
		}

		this.toggleNavbar = function(){
			self.showNavbar(!self.showNavbar());
		}

		init: {
			when.thePageHasChanged(highlightTheCorrectLink);
		}
	};

});