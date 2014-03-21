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