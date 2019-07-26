const fs = require('fs')
const chalk = require('chalk')


var addNote = function(title,body)
{
	const notes = loadNotes()
	const duplicate = notes.filter(function(note){
		return note.title===title
	})

	if(duplicate.length==0){
		notes.push({

		title: title,
		body: body

	})

	saveNotes(notes)
	console.log(chalk.bgGreen("New Note added!"))
}

else {console.log(chalk.bgRed("Title already taken!"))}
}

var readNotes = (title)=>{
	var search = loadNotes()
	var dupl = search.find((dupl)=> dupl.title === title)

	if(dupl)
	{
		console.log(dupl.title)
		console.log(dupl.body)
	}
	else
	{
		console.log("No Note found!")
	}
}




var removeNote = function(title){
	var remNote = loadNotes()
	var undeleted = remNote.filter(function(note){
		return note.title!==title
	})
	saveNotes(undeleted)

	if(remNote.length>undeleted.length)
	{
	console.log(chalk.bgGreen("Note removed!"))
	
	}
	else {console.log(chalk.bgRed("No Note found!"))}
}

var saveNotes = function(notes)
{
	var toWrite  = JSON.stringify(notes)
	fs.writeFileSync('notes.json', toWrite)
}
var listnotes = ()=>{
	var list = loadNotes()	
	list.forEach((note)=>{
		console.log(note.title)
	})
}
var loadNotes = function(){
	try{
	const buffer  = fs.readFileSync('notes.json')
	const datastring = buffer.toString()
	return JSON.parse(datastring)
	}
	 catch(e){
	 	return []
  }
}
module.exports = { 
	addNote: addNote,
	removeNote: removeNote,
	listnotes: listnotes,
	readNotes: readNotes
}