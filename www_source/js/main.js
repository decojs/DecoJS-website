
require.config({
  
  baseUrl:'/pages',

  paths:{
    'knockout': "../bower_components/knockout.js/knockout",
    'prism': "../bower_components/prismjs/prism",
    'customBindings': "../js/customBindings"
  },

  packages:[
    {name:'ordnung', location:'../bower_components/ordnung/Source/ordnung', main:'ordnung'},
    {name: 'when', location: '../bower_components/when', main: 'when' },
  ],

  shim: {    
    'prism': {
      exports: 'Prism'
    }
  }
});


require(["ordnung", "customBindings"], function(ordnung, customBindings){
  
  ordnung.config({
    spa:{
      pathToUrl: function(path){
        return "/pages/"+path+".html";
      }
    }
  }).start();

});