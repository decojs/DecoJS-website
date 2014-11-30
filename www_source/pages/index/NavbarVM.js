define([
	'knockout',
	'deco/events'
], function(
	ko,
	events
){
	
	return function NavbarVM(model, when){
		var self = this;

		this.active = ko.observable("");
		this.showNavbar = ko.observable(false);

		this.toggleNavbar = function(){
			self.showNavbar(!self.showNavbar());
		}
    
		function highlightTheCorrectLink(url, segments){
			self.active(segments[0]);
			self.showNavbar(false);
		}

		init: {
			when(events.thePageHasChanged, highlightTheCorrectLink);
		}
	};

});