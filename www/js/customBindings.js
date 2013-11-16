define(["knockout", "hljs"], function(ko, hljs){

  ko.bindingHandlers.hljs = {
    init: function(element, valueAccessor){
      var lang = valueAccessor();
      element.innerHTML = hljs.highlight(lang, element.textContent).value;
    }
  }
  
  ko.bindingHandlers.active = {
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext){
      var value = valueAccessor();
      var name = ko.unwrap(allBindings().name);
      var selected = {active:value() == name};
      ko.bindingHandlers.css.update(element, function(){return selected}, allBindings, viewModel, bindingContext);
    }
  };

  ko.bindingHandlers.activate = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext){
      var value = valueAccessor();
      var name = ko.unwrap(allBindings().name);
      var select = function(){
        value(name);
      };
      ko.bindingHandlers.click.init(element, function(){return select}, allBindings, viewModel, bindingContext);
      if(allBindings().initial){
        value(name);
      }
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext){
      var value = valueAccessor();
      var name = ko.unwrap(allBindings().name);
      var selected = {active:value() == name};
      ko.bindingHandlers.css.update(element, function(){return selected}, allBindings, viewModel, bindingContext);
    }
  };

});