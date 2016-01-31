// put event handlers for header links here
var Header = (function() {

  function headerLinkClicks(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    var url = $(e.target).attr("href");
    
    $.ajax(url, {dataType: "text" })
      .then(function(contents) {
        $modal.html(contents).show();
      });
  }

  function init() {
    $modal = $("[rel='js-modal']");

    $("[rel='js-controls']").on("click", "[rel*='js-']", headerLinkClicks );
  }

  var $modal;

  return {
    init: init
  };

})();

$(document).ready(Header.init);