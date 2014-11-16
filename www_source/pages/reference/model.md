<div class="page-header">
  <h1>Model</h1>
</div>

The first argument to viewmodel constructors is a model object. This is useful for pages where some data is required by the viewmodel and the html is created from dynamic server pages.

```html
<div data-viewmodel="path/to/MyVM" data-model="{\"key\": \"value\"}">
    <span data-bind="text: value"></span>
</div>

```

```js
function MyVM(model, when){
    this.value = model.key;
}
```

`data-model` should contain json data, either a json object or a json array. If the content of `data-model` does not contain an object or an array, it will be treated as a string.