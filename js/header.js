// put event handlers for header links here
var Header = (function() {

  function headerLinkClicks(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    var url = $(e.target).attr("href");
    //send url to Modal module
    EVT.emit("open", url);
  }

  function init() {
    $("[rel='js-controls']").on("click", "[rel*='js-']", headerLinkClicks );
  }

  EVT.on("init", init);

  return {
    init: init
  };

})();

