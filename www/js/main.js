
require.config({
  
  baseUrl:"/pages",

  paths:{
    "ordnung":"/js/ordnung",
    "knockout":"/js/knockout"
  }
});


require(["ordnung/spa"], function(spa){
  
  spa.start({
    pathToUrl: function(path){
      return "/pages/"+path+".html";
    }
  });

});