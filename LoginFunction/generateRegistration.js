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

			con.query("SELECT * FROM Users WHERE userID = 'User' and password = 'Pass'", function(err, result, fields){
				if (err) throw err;
			else {
				console.log(result);
			};
};

$(document).ready(main);
function clicked(idClicked){
	var mysql = require('mysql');

	var con = mysql.createConnection({
	  host: "107.180.1.16",
	  user: "group7-2",
	  password: "!!Group7-2",
	  database: "group7-2"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	});

	// con.query("SELECT * FROM Users WHERE userID = 'User' and password = 'Pass'", function(err, dataSet, colSet){
	// if (err)
	// 	throw err;
	// else {
	// 	console.log("\nQuery Result: " + dataSet);
	// }
	// });
}