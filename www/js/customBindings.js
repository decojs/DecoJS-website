define(["knockout"], function(ko){
  
  ko.bindingHandlers.active = {
    update: function(element, valueAccessor, allBindings, context){
      var value = valueAccessor();
      var name = ko.unwrap(allBindings().name);
      var selected = {active:value() == name};
      ko.bindingHandlers.css.update(element, function(){return selected}, allBindings, context);
    }
  };

  ko.bindingHandlers.activate = {
    init: function(element, valueAccessor, allBindings, context){
      var value = valueAccessor();
      var name = ko.unwrap(allBindings().name);
      var select = function(){
        value(name);
      };
      ko.bindingHandlers.click.init(element, function(){return select}, allBindings, context);
      if(allBindings().initial){
        value(name);
      }
    },
    update: function(element, valueAccessor, allBindings, context){
      var value = valueAccessor();
      var name = ko.unwrap(allBindings().name);
      var selected = {active:value() == name};
      ko.bindingHandlers.css.update(element, function(){return selected}, allBindings, context);
    }
  };

});