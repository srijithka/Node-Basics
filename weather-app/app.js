const request=require('request')
const GeoCode=require('./utils/GeoCode')
const ForeCast=require('./utils/ForeCast')
/*const url='https://api.mapbox.com/geocoding/v5/mapbox.places/Bengaluru.json?access_token=pk.eyJ1Ijoic3Jpaml0aHNoYXNoaSIsImEiOiJja2o4YWM4ZzkwdmRqMzRtdHR2b2d5MDN4In0.zBMBG3v7oimbq1oeSc-X-g'
request({url:url,json:true},(error,response)=>
{
    if(error)
    {
        console.log("Network or ApI issues")
    }
    else if(response.body.message||response.body.features.length===0)
    {
        console.log("Please gicve cooreect location")
    }
    else{
    console.log("longitude :"+response.body.features[0].center[0]+" Latitude :"+response.body.features[0].center[1])
    }
})
*/
const city=process.argv[2]
if(city)
{
GeoCode(city,(error,{Latitude:latit,Longitude:longi,place})=>
{
    if(error)
    {
         console.log(error)
    }
    else{
       // console.log("Latitude : "+data.Latitude)
       // console.log("longitude :"+data.Longitude)
       // const =data
        ForeCast(latit,longi,(error,foreCastdata)=>
        {
            if(error)
            {
                console.log(error)
            }
            else{
                //console.log()
                console.log("the actual place : "+place)
                console.log(foreCastdata)
            }
        })
    }
})

}
else{
    console.log("Not Entered input properly in command line!! check again ")
}







