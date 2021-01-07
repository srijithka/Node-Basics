
const add=(a,b,callback)=>
{
    
    setTimeout(()=>
    {
        console.log("the two second wait ends")
        const c=a+b
        callback(c)
    },2000)
    console.log("the two second wait begins")
}

add(1,2,(sum)=>
{
    console.log(sum)
})