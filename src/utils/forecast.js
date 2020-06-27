const request=require('request');
const forecast=(latitude,longitude,callback)=>{
    // const latitude=response.latitude
    // const longitude=response.longitude
    const url='https://api.darksky.net/forecast/a77b37008af2f36c82f64763d020d981/'+latitude+','+longitude+'?units=si&lang=en'
  request({url,json:true},(error,{body})=>{
     if(error){
         callback('Unable to connect to location services!',undefined);
         
     }
     else if(body.error){
         callback('Unable to Find Location',undefined);
 
     }else{
     
      callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + (body.currently.precipProbability)*100 + '% chance of rain.')

      }
    })
    }
    


 module.exports=forecast;