var Details = (function() {
	var $items, $content;

	function init() {
	  $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
	  $content = $("[rel=js-details]");

	  $items.on("click", "[rel*='js-item-']", detailsClickItems);
	}

  function detailsClickItems(e) {
  	var itemId = $(e.target).attr("rel").split("").pop();

    var url = 'details/' + itemId + '.html';
      
    $.ajax(url, {dataType: "text" })
      .then(function(contents) {
    	$content.html(contents).show();
    });
  }

  return {
    init:init
  };

})();

$(document).ready(Details.init);
