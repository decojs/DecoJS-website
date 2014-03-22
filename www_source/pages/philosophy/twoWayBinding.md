<div class="page-header">
  <h1>Two-way Binding</h1>
</div>

With vanilla JavaScript, using `addEventListener`, it is impossible to tell what events are attached to which HTML element.
This makes it impossible to reason about the HTML when maintaining or debugging code. What event listeners are attached to this element?
Which JavaScript files uses this element? Is this class name used by both CSS and jQuery? How do I find all the places this element is used?

DecoJS uses two-way binding, making it trivial to see what functionality is attached to an element. By using declarative bindings through the
`data-bind` attribute, a glance at the element tells you right away everything it can do. Because the interaction is controlled by
the `data-bind` attribute alone, you can quickly tell not only what it can do, but also what it cannot do. 

Combine this with the `data-viewmodel` attribute and you can now quickly find the correct attribute in the right JavaScript file.
DecoJS makes maintenance as simple as possible with these explicit relationships between the HTML and the JavaScript.