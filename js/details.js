var Details = (function() {
	var $content;

	function init() {
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

  return {
    init:init,
    loadPerson: loadPerson
  };

})();
