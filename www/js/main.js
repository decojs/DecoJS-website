
require.config({
  
  baseUrl:"/pages",

  paths:{
    "ordnung":"/js/ordnung",
    "knockout":"/js/knockout",
    "customBindings":"/js/customBindings",
    "hljs":"/js/highlight.pack"
  }
});


require(["ordnung/spa", "customBindings"], function(spa, customBindings){
  
  spa.start({
    pathToUrl: function(path){
      return "/pages/"+path+".html";
    }
  });

});