const request=require('request')
const GeoCode=(city,callback)=>
{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+city+'.json?access_token=pk.eyJ1Ijoic3Jpaml0aHNoYXNoaSIsImEiOiJja2o4YWM4ZzkwdmRqMzRtdHR2b2d5MDN4In0.zBMBG3v7oimbq1oeSc-X-g'
    request({url,json:true},(error,{body})=>
    {
        if(error)
        {
            callback("error in connecting to mapbox api",undefined)
        }
        else if(body.features.length===0)
        {
            callback("please give the correct location",undefined)
        }
        else{
        const data={
            Latitude:body.features[0].center[0],
            Longitude:body.features[0].center[1],
            place:body.features[0].place_name
        }
        callback(undefined,data)
        }      
    })
}
module.exports=GeoCode