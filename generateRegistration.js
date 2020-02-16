var main = function()
{
	"use strict";

	$(".inputArea .b").on("click", function(event)
		{
			var User = $("input.User").val();
			var Pass = $("input.Pass").val ();
			var $message = $("<p>");
			$message.text( User + " " + Pass);
			$(".outputArea1").append($message);	
		}
	);

};

$(document).ready(main);
