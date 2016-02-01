var Carousel = (function() {
  
  var $content, $items, $left, $right, contentWidth, itemsWidth, position, maxPosition;

	function scrollLeft(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		if (position > 0) {
			position = Math.max(0,position - 250);
		}

		$items.css({ left: (-position) + "px" });
	}

	function scrollRight(evt){
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		if (position < maxPosition) {
			position = Math.min(maxPosition,position + 250);
		}

		$items.css({ left: (-position) + "px" });
	}

	function clickPerson(e) {
		var id = $(e.target).attr("rel").split("").pop();
    
    highlightSelectedPerson(e);

		EVT.emit("person-selected", id);
	}

	function highlightSelectedPerson(e) {
		//remove border from previously selected person
    $("[rel*='js-item-']").css({"border": "none"});
    //add border to newly selected person
    $(e.target).css({"border": "2px solid red"});
	}

  function init() {
    $content = $("[rel=js-carousel] > [rel=js-content]");
		$items = $content.children("[rel=js-items]");
		$left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
		$right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");


		contentWidth = $content.width();
		itemsWidth = $items.width();
		position = 0;
		maxPosition = (itemsWidth - contentWidth);

	  $left.on("click", scrollLeft);
	  $right.on("click", scrollRight);

	  $items.on("click", "[rel*='js-item-']", clickPerson);
  }

  EVT.on("init", init);

})();
