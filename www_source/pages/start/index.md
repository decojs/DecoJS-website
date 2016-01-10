<meta name="title" content="Get Started - DecoJS">

<div class="jumbotron">
  <h1>Get Started</h1>
  <p>Quickly get started with a single page application.
</div>

## How do I install DecoJS?

The easiest way to install DecoJS is with [bower](https://github.com/bower/bower). Create an empty folder and run the following command to download DecoJS and all of its dependencies:

```bash
bower install deco
```

This will also install [RequireJS](http://requirejs.org) and [KnockoutJS](http://knockoutjs.com); the two dependencies of DecoJS. It will also install [JSON](https://github.com/douglascrockford/JSON-js) and [es5-shim](https://github.com/kriskowal/es5-shim), which are only needed for your website to work in IE8 and lower. As of version 0.5.0 of DecoJS [es6-promise](https://github.com/jakearchibald/es6-promise) will also be installed, as a promise polyfill.

## What webserver should I use?

[Express](http://expressjs.com/) is a simple webserver which only needs nodeJS to run. Install it in the same folder you installed DecoJS using this command:

```bash
npm install express
```

With Express installed you need a simple JavaScript file to start the server. Create a file called `server.js` in the same folder and write the following file into it:

#### server.js
```js
var express = require('express');

express().use(express.static(__dirname)).listen(80);

console.log("Webserver started at http://localhost/");
```

This server can be started with nodeJS from the command line:

```bash
node server.js
```

Open a browser and go to [`http://locahost/`](http://localhost/)

## What is the simplest DecoJS website?

The simplest DecoJS website consists of two files; `index.html` and `main.js`. Copy the following code into a file named `index.html` in the same folder you placed server.js:

#### index.html
```html
<!doctype html>

<h2>Hello world!</h2>

<script src="bower_components/es6-promise/promise.js"></script>
<script src="bower_components/requirejs/require.js" data-main="main.js"></script>
```

You should now see a greeting in large friendly letters when you navigate to [`http://locahost/`](http://localhost/). But this is just a static website, for it to be dynamic we need the `main.js` JavaScript file. Copy the following code into it:

#### main.js
```javascript
require.config({

  paths: {
    'knockout': 'bower_components/knockout/dist/knockout'
  },

  packages: [
    {name: 'deco', location: 'bower_components/deco/Source/deco', main: 'deco'}
  ]
  
});

require(['deco'], function(deco){
  deco.config().start();
});
```

## How do I add something dynamic to the site?

DecoJS uses [KnockoutJS](http://knockoutjs.com) to bind HTML and JavaScript together. You should go and read about KnockoutJS if you haven't used it before. 
Add a new file to your project called `IndexVM.js` and copy the following code into it:

#### IndexVM.js
```javascript
define(['knockout'], function(ko){

  return function IndexVM(){
    this.name = ko.observable("<write your name here>");
  }

});
```

Next we need to tell the HTML which ViewModel we want to bind against. Replace the `<h2>` element in the `index.html` file with the following content:

#### index.html
```html
<div data-viewmodel="IndexVM">
  <h2>Hello <span data-bind="text: name"></span></h2>


</div>
```

The page should now contain a greeting directed at you!

## How do I say hello to someone else?

You can add an input box to the `index.html` file into which any name can be entered! Paste the following code insed the `<div>` and after the `<h2>`:

#### index.html
```html
<label>
  Name: 
  <input data-bind="textInput: name" />
</label>
```

## Now what?

Go read the [tutorial](#!/tutorial/)! It is a lot more indepth, explains the things we have already looked at and goes on to explain other more complex features of DecoJS. The [references](#!/reference/) explain specific features in even greater depth, and will teach you clever ways to solve common problems.

## Do you have the code all in one place?

You can find the [get started](https://github.com/decojs/GetStarted) on GitHub.