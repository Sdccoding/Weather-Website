const request=require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic291aGFyZHlhMTIzIiwiYSI6ImNrYnMzaHNucjMxd28yenF2djl3bjM4eWoifQ.i9sQwTnh9CIOkovz-ATqDQ&limit=1'
    
  request({url:url,json:true},(error,{body})=>{
     if(error){
         callback('Unable to connect to location services');
         
     }
     else if(body.error){
         callback('Unable to Find Location');
 
     }else{
     // 
      callback(undefined,{
         latitude:body.features[0].center[1],
         longitude:body.features[0].center[0],
         location:body.features[0].place_name
      })
     }
     })
 }

// geocode('Kolkata',(error,response)=>{
//  console.log(response)

// })

module.exports=geocode
 