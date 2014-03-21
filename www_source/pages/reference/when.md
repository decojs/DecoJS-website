<div class="page-header">
  <h1>When</h1>
</div>

The second parameter given to viewmodel constructors is a function called `when`. This function can be used to subscribe to events, and it will automatically unsubscribe from events when the viewmodel is destroyed. 

```js
function MyVM(model, when){

    function reactToTheEvent(){
        console.log("this method is called when the anotherVM.doesSomething event is triggered");
    }

    init: {
        when(anotherVM.doesSomething, reactToTheEvent);
    }
    
}
```

##Unsubscribe

Events can be unsubscribed by using the `dont` method. Make sure to pass the same reaction function to both the subscribe call and the unsubscribe call.

```js
when(something, reactToSomething);
when(something).dont(reactToSomething);
```

##On Destroy

The `when.thisIsDestroyed` function can be used to manually unsubscribe when the viewmodel is destroyed. This is important so the entire viewmodel can be garbage collected.

```js
var intval = setInterval(doSomethingEverySecond, 1000);

when.thisIsDestroyed(function(){
    clearInterval(intval);
});
```


##Sub Contexts

The `when` function returns a new `when` function in a new context when calle with no parameters. When a context is destroyed, so is all of the sub contexts. Subcontexts are a great way for a viewmodel to control a group of child viewmodels.

```js
var subwhen = when();

for(var reaction in listOfReactions){
    subwhen(somethingHappens, reaction);
}

//later

//unsubscribe all events subscribed to using the subwhen function
when.destroyChildContexts();



```