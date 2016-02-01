var Details = (function() {
	var $content;

	function init() {
		//a tag link found in details/2.html
	  $content = $("[rel=js-details]");

	  $content.on("click", "[rel=js-select-person]", selectPerson);

	  EVT.on("person-selected", loadPerson);
	}

	function selectPerson(e) {
		e.preventDefault();

		var id = $(e.target).attr("data-person");
		
		EVT.emit("person-selected", id);
	}

  function loadPerson(id) {
    var url = 'details/' + id + '.html';
      
    $.ajax(url, {dataType: "text" })
      .then(function(contents) {
    	$content.html(contents).show();
    });
  }

  EVT.on("init", init);

})();
