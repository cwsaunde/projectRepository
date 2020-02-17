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
function clicked(idClicked){
	var mysql = require('mysql');

	var con = mysql.createConnection({
	  host: "107.180.1.16",
	  user: "group7-2",
	  password: "!!Group7-2"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	});
}