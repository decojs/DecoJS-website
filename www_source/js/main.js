
require.config({
  
  baseUrl:'/pages',

  paths:{
    'knockout': "../bower_components/knockout.js/knockout",
    'prism': "../bower_components/prismjs/prism",
    'customBindings': "../js/customBindings"
  },

  packages:[
    {name:'deco', location:'../bower_components/deco/Source/deco', main:'deco'},
    {name: 'when', location: '../bower_components/when', main: 'when' },
  ],

  shim: {    
    'prism': {
      exports: 'Prism'
    }
  }
});


require(["deco", "customBindings"], function(deco, customBindings){
  
  deco.config({
    spa:{
      pathToUrl: function(path){
        return "/pages/"+path+".html";
      }
    }
  }).start();

});