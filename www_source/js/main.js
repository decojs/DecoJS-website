
require.config({
  
  baseUrl:'/pages',
  urlArgs: 'cachebust='+document.querySelector('meta[name=cachebust]').getAttribute('content'),

  paths:{
    'knockout': "../bower_components/knockout/dist/knockout",
    'prism': "../bower_components/prismjs/prism",
    'customBindings': "../js/customBindings",
    'piwik': "//analytics.decojs.com/piwik"
  },

  packages:[
    {name:'deco', location:'../bower_components/deco/Source/deco', main:'deco'}
  ],

  shim: {    
    'prism': {
      exports: 'Prism'
    }
  }
});

ES6Promise.polyfill();


require(["deco", "customBindings"], function(deco, customBindings){
  
  deco.config({
    spa:{
      pathToUrl: function(path){
        return "/pages/"+path+".html";
      }
    }
  }).start();

});