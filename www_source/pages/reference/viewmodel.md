<div class="page-header">
  <h1>Viewmodel</h1>
</div>

DecoJS is built around [KnockoutJS](http://knockoutjs.com) viewmodels. Viewmodels are given control of an html element and all of its children. You can load multiple viewmodels on a page, but you cannot nest viewmodels inside each other. To load a viewmodel the `data-viewmodel` attribute in your html:

```html
<div data-viewmodel="path/to/MyVM">
    <span data-bind="text: anObservable"></span>
</div>
```

Since [RequireJS](http://requirejs.org) is used to load the viewmodel, the viewmodel files must be AMD modules. The module should return a single constructor function which will be instanciated by DecoJS. By convention viewmodels should end with the suffix VM, for example `IndexVM`, `AboutPageVM` and `LoginVM`. By convention a `self` variable is used to keep a reference to `this`.

```js
define(['knockout'], function(ko){
    "use strict";
    return function MyVM(model, when){
        var self = this;

        this.anObservable = ko.observable("hello");
    };
});
```

Viewmodel constructors take two arguments, [model](#/reference/model) and [when](#/reference/when). 