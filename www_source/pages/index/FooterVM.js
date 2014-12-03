define(['deco/events', 'piwik'], function(events, Piwik){
  
  return function FooterVM(model, when){
    var tracker = Piwik.getTracker('//analytics.decojs.com/piwik.php', 4);
    
    when(events.thePageHasChanged, function(url, segments){
      tracker.setCustomUrl('/'+segments.join('/'));
      tracker.trackPageView(document.title);
    });
  };
});