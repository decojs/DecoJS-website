<div class="page-header">
  <h1>QVC</h1>
</div>

```js
define(['deco/qvc'], function(qvc){
  
  qvc.createCommand();
  qvc.createQuery();

});

```



###Command


```js
var observable = ko.observable("this property can be validated");

var command = qvc.createCommand('commandName', {
  parameter1: observable,
  parameter2: "just a value, not an observable"
}).beforeExecute(function(){
  console.log("this function is called before every execution");
}).canExecute(function(){
  console.log("this is called next. Return false to stop the command from executing");
  return true;
}).success(function(){
  console.log("this is called if the server responds with a success");
}).error(function(){
  console.log("this is called if the server reports an error");
}).complete(function(){
  console.log("this is called at the end, no matter what the server responds");
});


//execute the command
command();

observable.validator.isValid();//returns true or false

```

###Query

```js
var observable = ko.observable("this property can be validated");

var query = qvc.createQuery('queryName', {
  parameter1: observable,
  parameter2: "just a value, not an observable"
}).beforeExecute(function(){
  console.log("this function is called before every execution");
}).canExecute(function(){
  console.log("this is called next. Return false to stop the query from executing");
  return true;
}).result(function(data){
  console.log("data contains the result of the query", data);
}).success(function(){
  console.log("this is called if the server responds with a success");
}).error(function(){
  console.log("this is called if the server reports an error");
}).complete(function(){
  console.log("this is called at the end, no matter what the server responds");
});


//execute the query
query();

observable.validator.isValid();//returns true or false

```