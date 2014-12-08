require.config({
  paths:{
    'knockout': "/bower_components/knockout/dist/knockout"
  },
  packages:[
    {name:'deco', location:'/bower_components/deco/Dist', main:'deco'}
  ]
});
require(["deco"], function(deco){
  deco.config({}).start();
});
define("Page2VM", function(){
  return function Page2VM(){
    this.description = "Look, even the viewmodel will be applied to the page!";
  };
});