const express=require('express');
const fetch = require("node-fetch");
const path = require("path");
const bodyParser = require("body-parser");
const india = require('./india.json');//useless


const app=express();
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());

//____________________________________MAP GET ALL COUNTRIES_____________________________________
app.get('/map',(req,res)=>{

        const getData = async (url) => {
        
        const response = await fetch(url);
        data = await response.json();
}
    
    const command = async () => {
      const url = 'https://corona.lmao.ninja/v2/countries?yesterday=1&sort=';
      await getData(url);
      // console.log(data)
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      let countryList=[];
      for(var i=0;i<=214;i++){

        countryList[i]={
          country:data[i].country+ " ("+data[i].countryInfo.iso2+")",
          iso3:data[i].countryInfo.iso3,
          lng:data[i].countryInfo.long,
          lat:data[i].countryInfo.lat,
          flagImg:data[i].countryInfo.flag,
          casesTotal:data[i].cases,
          casesToday:data[i].todayCases,
          recovered:data[i].recovered,
          recoveredToday:data[i].todayRecovered,
          deaths:data[i].deaths,
          deathsToday:data[i].todayDeaths,
          activeCases:data[i].active,
          testsDone:data[i].tests,
          population:data[i].population,
          
        };
          
      }
      // console.log(countryList)
      res.json(countryList);
    }
  command();
});

//_____________________________GLOBAL DATA________________________________________
app.get('/world',(req,res)=>{

  const getData = async (url) => {
  const response = await fetch(url);
  data = await response.json();
}

const command = async () => {
const url = 'https://corona.lmao.ninja/v2/all?yesterday=';
await getData(url);
// console.log(data)
res.statusCode = 200;
res.setHeader("Content-Type", "application/json");


// console.log(countryList)
res.json(data);
}
command();
});

app.get('/worldTimeline',(req,res)=>{

  const getData = async (url) => {
  const response = await fetch(url);
  worldData = await response.json();
}

const command = async () => {
const url = 'https://thevirustracker.com/timeline/map-data.json';
await getData(url);
// console.log(data)
res.statusCode = 200;
res.setHeader("Content-Type", "application/json");
let cases=0
let deaths=0
let recovered=0
let j=0
let worldArray=[]

for(var i=0;i<worldData.data.length;i++){
 
  if(worldData.data[j].date==worldData.data[i].date){
    cases=cases+Number(worldData.data[i].cases)
    deaths=deaths+Number(worldData.data[i].deaths)
    recovered=recovered+Number(worldData.data[i].recovered)
    
  }
  else{
    worldArray.push({date:worldData.data[j].date,cases:cases,deaths:deaths,recovered:recovered})
    cases=0
    recovered=0
    deaths=0
    j=i;
    i=i-1;
  }


  
}
// worldArray.pop();
res.send(worldArray)

}
command();
});




//_____________________________STATE WISE INDIA GET_________________________________
app.get('/state_wise',(req,res)=>{

  const getData = async (url) => {
  
  const response = await fetch(url);
  data1 = (await response.json());
}

const command = async () => {
const url = 'https://api.covidindiatracker.com/state_data.json';
await getData(url);
res.statusCode = 200;
res.setHeader("Content-Type", "application/json");
let statewise=[];
for(var i=0;i<=30;i++){
  statewise.push(
    {
        state:data1[i].state,
        infected:data1[i].confirmed,
        recovered:data1[i].recovered,
        deaths:data1[i].deaths, 
        districts:data1[i].districtData

    });
    
}
res.send(statewise);
}
command();
});

    
//________________________COUNTRY WISE______________________
// app.get('/countries',(req,res)=>{
//     let country="IN"

//     const getData = async (url) => {
    
//     const response = await fetch(url);
//     data = await response.json();
// }

// const command = async () => {
//   const url = `https://thevirustracker.com/free-api?countryTotal=${country}`;
//   await getData(url);
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
  
  
//   res.json(data)
// }
// command();
// });

//__________________COUNTRY TIMELINE__________________________

app.post('/get_timeline',(req,res)=>{
 
    let country=req.body.country;
    console.log(country)
    
    const getData = async (url) => {
      const response = await fetch(url);
      try{  
      data =(await response.json()).timeline
      // console.log(data)
      console.log("API GOOD")

      }catch{
        console.log("API BAD")
        res.send({
          'status':"bad"
        })       
      }
}

const command = async () => {
  
  
  const url =  `https://corona.lmao.ninja/v2/historical/${country}?lastdays=300`;
  await getData(url)
  res.statusCode = 200;
  
  let timeline=[]
  try{
    for (var key in data.cases) {
   
      timeline.push({date:key,cases:data.cases[key],deaths:data.deaths[key],recoveries:data.recovered[key]});
   }
  //  console.log(timeline)
  }catch{
    console.log("API BAD")
  }
  
  res.send(timeline)
}
command();
})

//____________STATE_____________
app.get('/get_state',(req,res)=>{
 
  let country=req.body.country;
  
  const getData = async (url) => {
    const response = await fetch(url);
     
    data =await response.json()

}

const command = async () => {


const url = `https://corona.lmao.ninja/v2/jhucsse`;
await getData(url)
res.statusCode = 200;

let stateData=[]
let state=[]
for(var i=1;i<740;i++){

  if(data[i].country==data[i+1].country){
    if(data[i].province!=null){
      state.push({
        stateName:data[i].province,
        stateCases:data[i].stats.confirmed,
        stateRec:data[i].stats.recovered,
        stateDeath:data[i].stats.deaths,
        stateCoords:{ lng: data[i].coordinates.longitude, lat:data[i].coordinates.latitude }
      })
    }
  
    

  }else{
    if(data[i].province!=null){
    stateData.push({country:data[i].country,state:state})
    state=[]
    }

  }

}
res.json(stateData)


}
command();
})



const PORT =process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("server running on port 3000");
});