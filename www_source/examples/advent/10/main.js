require.config({
  paths:{
    'knockout': "/bower_components/knockout/dist/knockout",
    'deco': "/bower_components/deco/Dist/deco.min"
  }
});

require(["deco"], function(deco){
  deco.config({
    spa: {
      pathToUrl: function(path){
        return "/examples/advent/10/"+path+".html";
      } 
    }
  }).start();
});