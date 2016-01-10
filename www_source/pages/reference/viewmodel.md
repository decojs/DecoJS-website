<meta name="title" content="Viewmodel - DecoJS">

<div class="page-header">
  <h1>Viewmodel</h1>
</div>

DecoJS is built around [KnockoutJS](http://knockoutjs.com) viewmodels. Viewmodels are given control of an html element and all of its children. You can load multiple viewmodels on a page, and you can nest viewmodels inside each other. To load a viewmodel the `data-viewmodel` attribute in your html:

```html
<div data-viewmodel="path/to/MyVM">
    <span data-bind="text: anObservable"></span>
</div>
```

Since [RequireJS](http://requirejs.org) is used to load the viewmodel, the viewmodel files must be AMD modules. The module should return a single constructor function which will be instanciated by DecoJS. By convention viewmodels should start with a capical letter, since they are constructor functions and they should end with the suffix VM, for example `IndexVM`, `AboutPageVM` and `LoginVM`. It's often useful to have a `self` variable to keep a reference to `this`. Most viewmodels end up looking something like this:

```js
define(['knockout'], function(ko){
    "use strict";
    return function MyVM(model, when){
        var self = this;

        this.anObservable = ko.observable("hello");
    };
});
```

Viewmodel constructors take two arguments, [model](#!/reference/model) and [when](#!/reference/when).

##Nested viewmodels

As of DecoJS 0.5.0 viewmodels can be nested inside each other and other knockout bindings. For example:

```html
<div data-viewmodel="path/to/MyVM">
    <span data-bind="text: anObservable"></span>
    <div data-bind="foreach: list">
        <div data-viewmodel="path/to/ItemVM">
          <span data-bind="text: itemName"></span>
        </div>
    </div>
</div>
```

Nesting viewmodels is a good way to modularize the application and getting several small viewmodels instead of a single large viewmodel. The nested viewmodel has access to the parent viewmodel in two ways: using `$parent` to access the outside [context](http://knockoutjs.com/documentation/binding-context.html) and by accessing the parent viewmodel that is passed in as the third argument to the viewmodel constructor.

```html
<div data-viewmodel="path/to/MyVM">
    <span data-bind="text: anObservable"></span>
    <div data-viewmodel="path/to/ItemVM">
      <span data-bind="text: $parent.anObservable"></span>
      <input data-bind="value: parentObservable">
    </div>
</div>
```

```js
define(['knockout'], function(ko){
    "use strict";
    return function ItemVM(model, when, parentViewmodel){
        var self = this;

        this.parentObservable = parentViewmodel.anObservable;
    };
});
```