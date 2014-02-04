define(['knockout'], function (ko) {
  
  return function SidebarVM (model, when) {
    console.log("init SidebarVM");

    var startPos = window.matchMedia("(max-width: 992px)").matches ? -160 : 0;

    this.position = ko.observable(startPos);

  }

});