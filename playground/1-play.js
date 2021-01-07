const fs=require('fs')

/*const data={
    title:"song of ice and fire",
    author:"george r r martin"
}

const dataJSON=JSON.stringify(data)
console.log(dataJSON)
fs.writeFileSync("1-play.json",dataJSON)

const dataBuffer=fs.readFileSync('1-play.json')
const readJSON=dataBuffer.toString()
const dataOBJ=JSON.parse(readJSON)
console.log(dataOBJ)*/

const dataBuffer=fs.readFileSync('1-play.json')
const dataOBJ=JSON.parse(dataBuffer.toString())
dataOBJ.name="srijith"
dataOBJ.team="Mercedes"
console.log(dataOBJ)
const dataJSON=JSON.stringify(dataOBJ)
fs.writeFileSync('1-play.json',dataJSON)