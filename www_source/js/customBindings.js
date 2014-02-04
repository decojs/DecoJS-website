define(["knockout", "prism"], function(ko, Prism){

  ko.bindingHandlers.hljs = {
    init: function(element, valueAccessor){
      var lang = valueAccessor();
      //element.innerHTML = hljs.highlight(lang, element.textContent).value;
    }
  }

  ko.bindingHandlers.prism = {
    init: function(element, valueAccessor){
      Prism.highlightElement(element);
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

  ko.bindingHandlers.touchDrag = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext){
      
      var value = valueAccessor();
      var minValue = ko.unwrap(allBindings.get('minValue')) || 0;
      var maxValue = ko.unwrap(allBindings.get('maxValue'));
      maxValue = maxValue === false ? 0 : maxValue;
      var direction = ko.unwrap(allBindings.get('direction')) || 'horizontal';
      var startPos = null;
      var startValue = null;

      ko.utils.registerEventHandler(element, 'touchstart', function(event){
        ko.bindingHandlers.attr.update(element, function(){return {drag:'true'}}, allBindings, viewModel, bindingContext);
        startValue = value();
        startPos = direction === 'horizontal' ? event.targetTouches[0].clientX : event.targetTouches[0].clientY;

        //event.preventDefault();
      });
      ko.utils.registerEventHandler(element, 'touchmove', function(event){
        var newPos = direction === 'horizontal' ? event.targetTouches[0].clientX : event.targetTouches[0].clientY;

        var delta = limit(minValue, startValue + newPos - startPos, maxValue);
        value(delta);
        var pos = delta < (minValue + maxValue)/2 ? 'min' : 'max';

        ko.bindingHandlers.attr.update(element, function(){return {pos:pos, drag:'true'}}, allBindings, viewModel, bindingContext);
        

        event.preventDefault();
      });
      ko.utils.registerEventHandler(element, 'touchend', function(event){

        var pos = value() < (minValue + maxValue)/2 ? 'min' : 'max';
        value(pos == 'min' ? minValue : maxValue);
        ko.bindingHandlers.attr.update(element, function(){return {pos:pos, drag:'false'}}, allBindings, viewModel, bindingContext);
      });
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext){
      var value = ko.unwrap(valueAccessor());
      var direction = ko.unwrap(allBindings.get('direction')) || 'horizontal';

      if(direction == 'horizontal'){
        element.style.webkitTransform = "translate("+value+"px,0)";
        element.style.mozTransform = "translate("+value+"px,0)";
        element.style.transform = "translate("+value+"px,0)";
      }else{
        element.style.transform = "translate(0,"+value+")";
      }
    }
  }

  function limit(min, actual, max){
    return Math.min(max, Math.max(actual, min));
  }

});