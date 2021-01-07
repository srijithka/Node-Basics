const request=require('request')


const ForeCast=(Latitude,Longitude,callback)=>
{
    const url=`http://api.weatherstack.com/current?access_key=92067064e3d10ff045fe64b27f95a6a6&query=${Longitude},${Latitude}`

    request({url,json:true},(error,{body})=>
    {
        if(error)
        {
            callback("Weather API ain't available",undefined)
        }
        else if(body.error)
        {
            callback("unable to fnd location",undefined)
        }
        else{
           // console.log(response.body)
            callback(undefined,body.current.weather_descriptions[0]+",the temperature is "+body.current.temperature)
        }
    })
}


module.exports=ForeCast