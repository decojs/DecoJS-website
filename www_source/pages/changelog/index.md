
### [0.5.1](https://github.com/decojs/DecoJS/releases/tag/v0.5.1)

 * Fixed nested data-viewmodel could not be used inside foreach bindings ([issue 15](https://github.com/decojs/DecoJS/issues/15))



### [0.5.0](https://github.com/decojs/DecoJS/releases/tag/v0.5.0)

 * Updated to use [Knockout 3.2](http://knockoutjs.com/)
 * Removed dependency on [when.js](https://github.com/cujojs/when) in favor of using [Promise polyfill](https://github.com/jakearchibald/es6-promise)
 * Added ability to nest viewmodels inside each other

This version removes the dependency on when.js in favor of using a [Promise polyfill](https://github.com/jakearchibald/es6-promise). This reduces the complexity of the require config file and promotes the use of an ES6 standard above the use of libraries. If you are upgrading from [0.4.0](https://github.com/decojs/DecoJS/releases/tag/v0.4.0) you need to remove the reference to the when.js package from the require config file and if you are using [a browser without ES6 promise support](http://caniuse.com/#search=promise) you will have to add the polyfill to the page as a script tag.


### [0.4.0](https://github.com/decojs/DecoJS/releases/tag/v0.4.0)

 * Cleaned up the QVC code
 * Made the parameters to a command/query accessible ([issue 3](https://github.com/decojs/DecoJS/issues/3))
 * Added ability to manually validate a command/query ([issue 10](https://github.com/decojs/DecoJS/issues/10))
 * Improved error message when creating a command/query without a name
 * Added callback when a command/query has invalid parameters when it is executed ([issue 5](https://github.com/decojs/DecoJS/issues/5))


### [0.3.2](https://github.com/decojs/DecoJS/releases/tag/v0.3.2)

 * Upgraded to latest version of dependencies
 * Fixed a memory leak caused by executables sticking around for too long ([issue 14](https://github.com/decojs/DecoJS/issues/14))


### [0.3.1](https://github.com/decojs/DecoJS/releases/tag/v0.3.1)

 * Updated to latest version of RequireJS, since the previous version seems to have disapeared from the internet ([issue 8](https://github.com/decojs/DecoJS/issues/8))
 * Fixed bad JSON in package.json


### [0.3.0](https://github.com/decojs/DecoJS/releases/tag/v0.3.0)

 * Changed the name of project to DecoJS and moved it to decojs.com

