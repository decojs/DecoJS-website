
require.config({
  
  baseUrl:"/pages",

  paths:{
    "knockout":"/js/knockout",
    "customBindings":"/js/customBindings",
    "hljs":"/js/highlight.pack"
  },

  packages:[
    {name:'ordnung', location:'/js/ordnung', main:'ordnung.min'},
    {name: 'when', location: '/js/when', main: 'when' },
  ]
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