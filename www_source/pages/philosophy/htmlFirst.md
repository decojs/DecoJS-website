<meta name="title" content="HTML-first - DecoJS">

<div class="page-header">
  <h1>HTML-first</h1>
</div>

DecoJS is designed for large websites with multiple pages. It recognizes that you already have a website, with existing HTML. Instead of 
throwing this HTML away for a new templating language, DecoJS lets you easily add functionality to the HTML that already exists. You can use the
latest web-standards when building your page, and you can add JavaScript to any part of your new or existing page. 

The first thing your browser loads is the HTML, so why not let the HTML decide what JavaScript to load? Many other frameworks has the JavaScript
load templates, reversing the roles. This makes it difficult to debug, as there is no indication what JavaScript file loaded which template,
or which template is controlled by what JavaScript file. DecoJS lets every HTML element decide what JavaScript to load, and it gives the JavaScript control only of the element that loaded it. 

One of the main ideas behind DecoJS is to make frontend code easy to debug. By having the HTML explicitly specify the JavaScript that controls it,
anyone can look at a page and find the correct JavaScript file. The HTML loads first, so it is the first place to look when debugging DecoJS applications. 
