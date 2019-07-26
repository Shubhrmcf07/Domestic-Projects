var yargs = require('yargs')
var chalk = require('chalk')
var Notes = require('./notes.js')
 
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
			title:  {
				describe: 'Note title',
				demandOption: true,
				type: 'string'
			},
			body: {
				describe: 'Note body',
				demandOption: true,
				type: 'string'
			}
	},
	handler: function(argv){
		Notes.addNote(argv.title, argv.body)
	}	
})



yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder:{
		title:{
			describe: "Title of note to be removed",
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv){
		Notes.removeNote(argv.title)
	}
})



yargs.command({
	command: 'list',
	describe: 'List a note',
	handler: function(){
		console.log(chalk.bgRed("Here are your notes"))
		Notes.listnotes()
	}
})

yargs.command({
	command: 'read',
	describe: 'Read a new note',
	builder:{
		title: {
			describe: 'title of note to be read',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv){
		Notes.readNotes(argv.title)
	}
})

yargs.parse()   //or console.log(yargs.argv)
















// var validator = require('validator')

// const getNotes = require('./notes.js')

// var get = getNotes()

// console.log(get)

// console.log(validator.isURL('https://mead.io'))







// const add = require('./utils.js')
// var sum = add(4,2)
// console.log(sum)