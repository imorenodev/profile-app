var Modal = (function() {

	var $modal = $("[rel='js-modal']");
  
  function open(url) {
		var closeButton = "<button rel='js-modal-close'>Close</button>";

	  $.ajax(url, {dataType: "text"})
	    .then(function(contents) {
	      $modal.html(contents += closeButton).toggle();

        init();
	    });
  }

  function init() {
	  $("[rel='js-modal-close']").on("click", function() {
    	$modal.hide();
    });
  }
  
  EVT.on("open", open);

})();