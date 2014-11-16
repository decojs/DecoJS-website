
require.config({
  
  baseUrl:'/pages',

  paths:{
    'knockout': "../bower_components/knockout/dist/knockout",
    'prism': "../bower_components/prismjs/prism",
    'customBindings': "../js/customBindings"
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