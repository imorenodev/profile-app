var Details = (function() {
	var $content;

	function init() {
	  $content = $("[rel=js-details]");
	}

  function loadPerson(id) {
    var url = 'details/' + id + '.html';
      
    $.ajax(url, {dataType: "text" })
      .then(function(contents) {
    	$content.html(contents).show();
    });
  }

  return {
    init:init,
    loadPerson: loadPerson
  };

})();

$(document).ready(Details.init);
