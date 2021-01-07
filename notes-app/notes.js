const fs=require('fs')
const chalk=require('chalk')
const getNotes=()=>{
    return "yoyr notes is being uploaded"
}

const addNote=(title,body)=>
{
    const exsistNotes=loadNotes()

    const duplicateNotes=exsistNotes.filter((note)=>{
        return note.title===title
    }
    )
    //This is another way by using ES6 map function....so in if statement in line 24..we can either use coun===0
    // or  duplicates.length===0 as decision maker
   /* let coun=0;
    exsistNotes.map((note)=>
    {
        if(note.title===title)
        {
            coun=1
        }
    })*/

    if(duplicateNotes.length===0)
    {
    exsistNotes.push({
        title:title,
        baody:body
    })
    saveNotes(exsistNotes)
    console.log("new note added successfully")
    }
    else{
        console.log("Note title has been taken ...!!...Try new one")
    }

    
}

//my code for the REMOVINGNOTES section

const removeNotes=(title)=>{
    const notesList=loadNotes()
    //if there are no notes only
    if(notesList.length===0)
    {
        console.log(chalk.red.inverse("Your note title isn't mentioned anywhere"))

    }
    else{
        let flag=0
        const afterRemoval=notesList.filter((note)=>
        {
            return !(note.title===title)
        })
        if(afterRemoval.length===notesList.length)
        {
            console.log(chalk.red.inverse("Your note title isn't mentioned anywhere"))
        }
        else{
            console.log(chalk.green.inverse("Your Note had been removed successfully!! "))
            saveNotes(afterRemoval)
        }
    }
    
}

const listNotes=()=>
{
    const listnote=loadNotes()
    console.log(chalk.blue.inverse("Your Notes"))
    listnote.map((note)=>
    {
        console.log(chalk.yellow("Title : ")+note.title+chalk.yellow(" Body : ")+note.baody)
    })
}

const readNote=(title)=>
{
    const noteslist=loadNotes();
    let flag=1
    
    if(flag===1)
    {
        noteslist.map(note=>
            {
                if(note.title===title)
                {
                    console.log(chalk.green(title)+chalk.inverse.white(" the message is ")+note.baody)
                    flag=2
                }
            })
    }
    if(flag===1)
    {
        console.log(chalk.red.inverse("No key found!!"))
    }
    
}




const saveNotes=(notes)=>
{
    const objJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',objJSON)
}

const loadNotes=()=>
{
    try{
    const dataBuffer=fs.readFileSync('notes.json')
    const actData=dataBuffer.toString();
    return JSON.parse(actData)
    }catch(e){
        return []
    }
}





module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
}