//const fs=require('fs')

//fs.writeFileSync('notes.txt','Lannisters of the casterly rock.')


//fs.appendFileSync('notes.txt',"Tywin,Tyrion Jaime cersie")

/*const addf=require('./utils')

const ans=addf(17,7)
console.log(ans)*/

const yargs=require("yargs")
const NotesFunc=require("./notes")


yargs.command({
    command:"add",
    describe:"To add a new note",
    builder:{
        title:{
            describe:"title of the note",
            demandOption:true,
            type:String
        },
        body:{
            describe:"info of the note",
            demandOption:true,
            type:String
        }
    },
    handler:function(argv){
        NotesFunc.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:"remove",
    describe:"To remove a note",
    builder:{
        title:
        {
            demandOption:true,
            type:String,
            describe:"title of the note to be deleted"
        }
    },
    handler:function(argv){
        NotesFunc.removeNotes(argv.title)
    }
})
yargs.command({
    command:"list",
    describe:"disp all notes",
    handler:function(){
        NotesFunc.listNotes()
    }
})

yargs.command({
    command:"read",
    describe:"To read tthe notes",
    builder:{
        title:
        {
            demandOption:true,
            type:String
        }
    },
    handler:function(argv){
        NotesFunc.readNote(argv.title)
    }
})
yargs.parse()




