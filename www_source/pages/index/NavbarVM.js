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

		function highlightTheCorrectLink(url, path){
			console.log(path[0]);
			self.active(path[0]);
		}

		init: {
			when.thePageHasChanged(highlightTheCorrectLink);
		}
	};

});