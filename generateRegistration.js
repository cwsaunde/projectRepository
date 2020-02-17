function processForm(callback) {
	let sqlStmt =  "SELECT * FROM Users"
	//log into the database
	var con = MySql.Execute(
	"107.180.1.16",
	"group7-2",
	"!!Group7",
	"group7-2",
	sqlStmt
	)
}