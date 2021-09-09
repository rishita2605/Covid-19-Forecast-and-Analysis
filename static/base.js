console.log("I hope colleges never reopen <3")
let ctx1 = document.getElementById('infected');
let ctx2 = document.getElementById('deceased');
let ctx3 = document.getElementById('cured');
let ctx4 = document.getElementById('prediction');
let countryGroup = new H.map.Group();
let stateGroup = new H.map.Group();
let countryArray =[] 
let stateArray=[];
let world=[];
let timelineArray=[];
let pred=[]
let date=[]
let pred2=[]
let pred3=[]
let rnumber=0;
let labelR1="Cases-0"

//change color using RGB RGB=======================================!!!
Chart.defaults.global.defaultFontColor = '#fff6eb';
Chart.defaults.global.tooltips.display="enabled";
Chart.defaults.global.legend.display="true";




//Chart.defaults.global.defaultFontSize='12';
let infected = new Chart(ctx1, {
type: 'line',
data: {
    labels:[0],
    datasets: [{
        label: 'Cases',
        data: [0],
        backgroundColor:'rgba(255, 0, 0, 0)',//change color using rgb (invisible)
        borderColor:'#c8003e',
        borderWidth: 3,
        pointRadius:1
    }]
},
options: {
  hover: {
    onHover: function(e) {
      $("#infected").css("cursor", e[0] ? "pointer" : "default"); //changing pointer
      
      /* without jquery it can be like this:
        var el = document.getElementById("canvas1");
        el.style.cursor = e[0] ? "pointer" : "default";
      */
    }
  },
  
  maintainAspectRatio: false, //to make the chart's size responsive
  responsive:true,
  scales: {
    yAxes: [{
      gridLines:{
        display:false,
        color:"#fff6eb"
      },
        ticks: {
            beginAtZero: true
        }
    }],
    xAxes: [{
      type: 'time',
        time: {
          displayFormats: {
          	'millisecond': 'MMM DD',
            'second': 'MMM DD',
            'minute': 'MMM DD',
            'hour': 'MMM DD',
            'day': 'MMM DD',
            'week': 'MMM DD',
            'month': 'MMM DD',
            'quarter': 'MMM DD',
            'year': 'MMM DD',
          }
        },

      gridLines:{
        display:false,
        color:"#fff6eb"
      },
        ticks: {
            beginAtZero: true,
         
          }
        

    }]

}
}
});
let deceased = new Chart(ctx2, {
  type: 'line',
  data: {
    
      labels: [0],
      datasets: [{
          label: 'Cases',
          data: [0],
          backgroundColor:'rgba(255, 0, 0, 0)',//change color using rgb (invisible)
          borderColor:'#c3001a',
          borderWidth: 3,
          pointRadius:0
      }]
  },
  options: {
    hover: {
      onHover: function(e) {
        $("#deceased").css("cursor", e[0] ? "pointer" : "default"); //changing pointer
        
        /* without jquery it can be like this:
          var el = document.getElementById("canvas1");
          el.style.cursor = e[0] ? "pointer" : "default";
        */
      }
    },
    maintainAspectRatio: false, //to make the chart's size responsive
    responsive:true,
    scales: {
      yAxes: [{
        gridLines:{
          display:false,
          color:"#fff6eb"
        },
          ticks: {
              beginAtZero: true
          }
      }],
      xAxes: [{
        type: 'time',
          time: {
            displayFormats: {
              'millisecond': 'MMM DD',
              'second': 'MMM DD',
              'minute': 'MMM DD',
              'hour': 'MMM DD',
              'day': 'MMM DD',
              'week': 'MMM DD',
              'month': 'MMM DD',
              'quarter': 'MMM DD',
              'year': 'MMM DD',
            }
          },
  
        gridLines:{
          display:false,
          color:"#fff6eb"
        },
          ticks: {
              beginAtZero: true,
           
            }
          
  
      }]
  
  }
  }
});
let cured = new Chart(ctx3, {
  type: 'line',
  data: {
    
      labels: [0],
      datasets: [{
          label: 'Cases',
          data: [0],
          backgroundColor:'rgba(255, 0, 0, 0)',//change color using rgb (invisible)
          borderColor:'#00c93f',
          borderWidth: 3,
          pointRadius:0
      }]
  },
  options: {
    hover: {
      onHover: function(e) {
        $("#cured").css("cursor", e[0] ? "pointer" : "default");//changing pointer
        
        /* without jquery it can be like this:
          var el = document.getElementById("canvas1");
          el.style.cursor = e[0] ? "pointer" : "default";
        */
      }
    },
   maintainAspectRatio: false, //to make the chart's size responsive
   responsive:true,
    scales: {
      yAxes: [{
        gridLines:{
          display:false,
          color:"#fff6eb"
        },
          ticks: {
              beginAtZero: true
          }
      }],
      xAxes: [{
        type: 'time',
          time: {
            displayFormats: {
              'millisecond': 'MMM DD',
              'second': 'MMM DD',
              'minute': 'MMM DD',
              'hour': 'MMM DD',
              'day': 'MMM DD',
              'week': 'MMM DD',
              'month': 'MMM DD',
              'quarter': 'MMM DD',
              'year': 'MMM DD',
            }
          },
  
        gridLines:{
          display:false,
          color:"#fff6eb"
        },
          ticks: {
              beginAtZero: true,
           
            }
          
  
      }]
  
  }
  }
    });


    let prediction = new Chart(ctx4, {
      type: 'line',
      data: {
          labels:[0],
          datasets: [{
              label: 'R0',
              data: [0],
              backgroundColor:'rgba(255, 0, 0, 0)',//change color using rgb (invisible)
              borderColor:'#ff003c',
              borderWidth: 3,
              pointRadius:1
          },{
            label: 'R0',
              data: [0],
              backgroundColor:'rgba(0, 255, 0, 0)',//change color using rgb (invisible)
              borderColor:'rgba(15,164,254,1)',
              borderWidth: 3,
              pointRadius:1
          },{
            label: 'R0',
              data: [0],
              backgroundColor:'rgba(0, 255, 0, 0)',//change color using rgb (invisible)
              borderColor:'rgba(255, 171, 191,1)',
              borderWidth: 3,
              pointRadius:1
          }]
      },
      options: {
        hover: {
          onHover: function(e) {
            $("#prediction").css("cursor", e[0] ? "pointer" : "default");//changing pointer
            
            /* without jquery it can be like this:
              var el = document.getElementById("canvas1");
              el.style.cursor = e[0] ? "pointer" : "default";
            */
          }
        },
        maintainAspectRatio: false, //to make the chart's size responsive
        responsive:true,
        scales: {
          yAxes: [{
            gridLines:{
              display:false,
              color:"#fff6eb"
            },
              ticks: {
                  beginAtZero: false
              }
          }],
          xAxes: [{
            
            gridLines:{
              display:false,
              color:"#fff6eb"
            },
              ticks: {
                  beginAtZero: false,
               
                }
              
      
          }]
      
      }
      }
      });

    function rnum(){
    prediction.data.labels=[]
    prediction.data.datasets[0].data=[]
    date=[]
    pred=[]
    date2=[]
    pred2=[]
    pred3=[]
    prediction.update()
    //console.log("data reset")
      let sum=0 
      let sum2=0
      //console.log("---Start of Rnum cal---")
      for(i=timelineArray.length-2;i>timelineArray.length-2-7;i--){
        sum+=timelineArray[i].cases/timelineArray[i-1].cases
      }
      for(i=timelineArray.length-2;i>timelineArray.length-2-3;i--){
        sum2+=timelineArray[i].cases/timelineArray[i-1].cases
      }

    var avg=sum/7
    var avg2=sum2/3
    //  //console.log("R-number : "+ avg)
    
    var casesPred=timelineArray[timelineArray.length-2].cases
    var casesPred2=timelineArray[timelineArray.length-2].cases
    var casesPred3=timelineArray[timelineArray.length-2].cases



    
    pred.push(casesPred)
    date.push("Today")
    pred2.push(casesPred)
    pred3.push(casesPred)




   
     rnumber=avg
     var rnumber2=avg2
     //console.log("r2:",rnumber2)
     for(var i=0;i<7;i++){
      casesPred2=casesPred2*rnumber2
      //console.log("r2:",casesPred2)
      pred2.push(Math.round(casesPred2))
      
   }
     for(var i=0;i<7;i++){
        casesPred=casesPred*rnumber
        //console.log("r1: ",casesPred)
        pred.push(Math.round(casesPred))
        date.push(`+${i+1} day(s)`)
     }

     for(var i=0;i<7;i++){
      casesPred3=casesPred3*0.99
      pred3.push(Math.round(casesPred3))
  
   }

    prediction.data.labels=date
    prediction.data.datasets[0].data=pred
    prediction.data.datasets[1].data=pred2
    prediction.data.datasets[2].data=pred3

    prediction.data.datasets[0].label=`R-${rnumber.toFixed(4)}`
    prediction.data.datasets[1].label=`R-${rnumber2.toFixed(4)}`
    prediction.data.datasets[2].label=`R-${0.97}`


 

    prediction.update()
}

function update(id){
    //console.log("update working");
    
    let userCountry=document.getElementById(id).value;

    const data = { country: userCountry.match(/\(([^)]+)\)/)[1] };
    
  fetch("/get_timeline",{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then((res) =>
    res
    .json()
    .then((data) => {
        timelineArray=[]
        timelineArray=data
        infected.data.labels=[]
        infected.data.datasets[0].data=[]
        deceased.data.labels=[]
        deceased.data.datasets[0].data=[]
        cured.data.labels=[]
        cured.data.datasets[0].data=[]
        infected.update()
        deceased.update()
        cured.update()

            for(var i=0;i<data.length;i++){
                //infected
                infected.data.datasets[0].data.push(data[i].cases)
            
                infected.data.labels.push(data[i].date)
                
                //death
                deceased.data.labels.push(data[i].date)
                deceased.data.datasets[0].data.push(data[i].deaths)

                //cured
                cured.data.labels.push(data[i].date)
                cured.data.datasets[0].data.push(data[i].recoveries)
                  
            }
            $(".no-graph").css("display","none");
            $(".chart-container").css("filter","blur(0)");
            infected.update()
            deceased.update()
            cured.update()
            ////console.log(timelineArray)
            rnum()
            
             
        
    })
    .catch((err) =>{ 

      console.log(err)
      $(".no-graph").css("display","flex");
      $(".chart-container").css("filter","blur(4px)");
    })
    );
}

fetch('/worldTimeline')
.then((res)=> res.json()
.then((data)=>{
    //console.log(data)
}).catch((err)=>console.log(err)));

fetch('/map')
.then((res)=> res.json()
.then((data)=>{
    countryArray=data;
    //console.log(countryArray)
    countryMapRender();
}).catch((err)=>console.log(err)));


//getting state data
fetch('/get_state')
  .then((res)=> res.json()
  .then((data)=>{
    stateArray=data;
    //console.log(stateArray)
    stateMapRender()
}).catch((err)=>console.log(err)));


//MAP COUNTRY RENDER GET--------------------------------------------------------
function countryMapRender(){
    
   //console.log("starting to render circles")
    //MAP RENDERING 
   function addCircleToMap(map,i,r){
     
       var marker=new H.map.Circle(
       
       {lng:countryArray[i].lng, lat:countryArray[i].lat},
       r,
         {
           style: {
               strokeColor: 'rgba(218,27,96,1)', // Color of the perimeter
               lineWidth: 1,
               fillColor: 'rgba(218,27,96,0.3)'  // Color of the circle
                 }
               }
             );
             marker.setData(`<div class="tooltip"><div class="tooltip-heading"><img src="${flag}" width="16px" height="10px"/>&nbsp;&nbsp;${c}</div><div class="tooltip-content"><div class="tooltip-sub-heading">Total Cases:</div><div class="tooltip-cases">${casesTotal}</div></div></div>`);
             countryGroup.addObject(marker)
           //for tooltips on hover
             marker.addEventListener('pointerenter', function(evt) {
              var bubble =  new H.ui.InfoBubble(evt.target.getCenter(), {
                // read custom data
                content: evt.target.getData()
              });
              ui.addBubble(bubble);
              marker.addEventListener('pointerleave', function(evt) {
   
                bubble.close()
                });
              });
             
           }

          
   
    for(var i=0;i<=214;i++){
     var r=(countryArray[i].casesTotal)/3
     if(r>6000000){
       r=4500000
     }

      var c=countryArray[i].country
      var flag=countryArray[i].flagImg
      var casesTotal=countryArray[i].casesTotal
     addCircleToMap(map,i,r,c)
    }
  }
 
//MAP STATE OF 20 COUNTRY RENDER------------------------------------------------
function stateMapRender(){
    
  //console.log("starting to render state circles")
   //MAP RENDERING 
  function addCircleToMap(map,coords,r,cases,state){
   
      var marker=new H.map.Circle(
      coords,
      r,
        {
          style: {
               strokeColor: 'rgba(218,27,96,1)', // Color of the perimeter
               lineWidth: 1,
               fillColor: 'rgba(218,27,96,0.3)'  // Color of the circle
                }
              }
            );
          
            marker.setData(`<div class="tooltip"><div class="tooltip-heading">${state}</div><div class="tooltip-content"><div class="tooltip-sub-heading">Total Cases:</div><div class="tooltip-cases">${cases}</div></div></div>`); 
            stateGroup.addObject(marker) 
            //for tooltips on hover
            marker.addEventListener('pointerenter', function(evt) {
              
              var bubble =  new H.ui.InfoBubble(evt.target.getCenter(), {
                // read custom data
                content: evt.target.getData()
              });
              ui.addBubble(bubble);
              
              marker.addEventListener('pointerleave', function(evt) {
                
                bubble.close()
                });
              });
          
          }
  
   for(var i=0;i<stateArray.length;i++){
     for(var j=0;j<stateArray[i].state.length;j++){

      var coords=stateArray[i].state[j].stateCoords
      var r=Number(stateArray[i].state[j].stateCases)
      var cases=stateArray[i].state[j].stateCases
      var state=stateArray[i].state[j].stateName
      if(r>50000){
        r=r/3
      }
      addCircleToMap(map,coords,r,cases,state)
     }
    
   }
 }
 
//adding commas to numbers
function numberWithCommas(number) {
  var parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}


fetch('/world')
.then(res=>res.json()
.then((data)=>{
  world=data;
  world.cases=numberWithCommas(world.cases)
  world.recovered=numberWithCommas(world.recovered)
  world.deaths=numberWithCommas(world.deaths)
  world.todayCases=numberWithCommas(world.todayCases)
  world.todayRecovered=numberWithCommas(world.todayRecovered)
  world.todayDeaths=numberWithCommas(world.todayDeaths)
  
  // //console.log(world.cases)
  $('.infectedno').html(`${world.cases}`)
  $('.recoveredno').html(`${world.recovered}`)
  $('.deathno').html(`${world.deaths}`)
  $('.sub-txt-1').html(`+${world.todayCases}`)
  $('.sub-txt-2').html(`+${world.todayRecovered}`)
  $('.sub-txt-3').html(`+${world.todayDeaths}`)

  $('.infectedno-3-3').html(`${world.cases}`)
  $('.recoveredno-3-3').html(`${world.recovered}`)
  $('.deathno-3-3').html(`${world.deaths}`)
  $('.sub-txt-3-1').html(`+${world.todayCases}`)
  $('.sub-txt-3-2').html(`+${world.todayRecovered}`)
  $('.sub-txt-3-3').html(`+${world.todayDeaths}`)

}).catch((err)=>console.log(err)));

//_______________ALL MAP FUNCTIONALITIES________________________

function setStyle(map){
  
  var provider = map.getBaseLayer().getProvider();
  //styling the map bg color in dark.yaml
  //https://heremaps.github.io/maps-api-for-javascript-examples/change-style-at-load/data/dark.yaml
   var style = new H.map.Style('dark.yaml',
    'https://js.api.here.com/v3/3.1/styles/omv/');
   // set the style on the existing layer
   provider.setStyle(style);
 }

/*function setStyle(map){
  
  var provider = map.getBaseLayer().getProvider();
  //styling the map bg color in dark.yaml
  //https://heremaps.github.io/maps-api-for-javascript-examples/change-style-at-load/data/dark.yaml
  var style = new H.map.Style('https://heremaps.github.io/maps-api-for-javascript-examples/change-style-at-load/data/dark.yaml',
    'https://js.api.here.com/v3/3.1/styles/omv/');
  // set the style on the existing layer
  provider.setStyle(style);
}*/

//MAP API KEY
var platform = new H.service.Platform(
  {
    'apikey': 'gmapYIcqF0qy1MjfJX55oW2ZtFJgotbjfg-1oX7zYZ4'
  });
    
var defaultLayers = platform.createDefaultLayers();
      
var map = new H.Map(
document.getElementById('mapContainer'),
defaultLayers.vector.normal.map,
  { 
    zoom: 2.3,
    center: { lng: 20, lat:20  }
  });

var mapEvents = new H.mapevents.MapEvents(map);


map.addEventListener('tap', function(evt) {
  //console.log(evt.type, evt.currentPointer.type);
});
              
var behavior = new H.mapevents.Behavior(mapEvents);
setStyle(map);

function showData(data){

 const clickData = { country: data.match(/\(([^)]+)\)/)[1] };
    var sliced=data.slice(15)
    //console.log(sliced)
    $(`.search`).val(sliced)
    $(`.search-3`).val(sliced)
    stateDataDisplay("search")

    fetch("/get_timeline",{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(clickData),
}).then((res) =>
    res
    .json()
    .then((data) => {
        //console.log(data)
        timelineArray=[]
        timelineArray=data
        if(data.status=='bad'){
          $(".no-graph").css("display","flex");
          $(".chart-container").css("filter","blur(4px)");
          infected.data.labels=[]
        infected.data.datasets[0].data=[]
        deceased.data.labels=[]
        deceased.data.datasets[0].data=[]
        cured.data.labels=[]
        cured.data.datasets[0].data=[]
        infected.update()
        deceased.update()
        cured.update()
        prediction.data.labels=[]
        prediction.data.datasets[0].data=[]
        prediction.data.datasets[1].data=[]
        prediction.data.datasets[2].data=[]
        date=[]
        pred=[]
        date2=[]
        pred2=[]
        pred3=[]
        prediction.data.datasets[0].label="N/A"
        prediction.data.datasets[1].label="N/A"
        prediction.data.datasets[2].label="N/A"
        prediction.update()

        }else{
        infected.data.labels=[]
        infected.data.datasets[0].data=[]
        deceased.data.labels=[]
        deceased.data.datasets[0].data=[]
        cured.data.labels=[]
        cured.data.datasets[0].data=[]
        infected.update()
        deceased.update()
        cured.update()


            for(var i=0;i<data.length;i++){
                //infected
                infected.data.datasets[0].data.push(data[i].cases)
                infected.data.labels.push(data[i].date)
                
                //death
                deceased.data.labels.push(data[i].date)
                deceased.data.datasets[0].data.push(data[i].deaths)

                //cured
                cured.data.labels.push(data[i].date)
                cured.data.datasets[0].data.push(data[i].recoveries)
                 
        }
            $(".no-graph").css("display","none");
            $(".chart-container").css("filter","blur(0)");
            infected.update()
            deceased.update()
            cured.update()

            rnum()
        }
        
      })
    .catch((err) => {
      console.log(err)
      $(".no-graph").css("display","flex");
      $(".chart-container").css("filter","blur(4px)");
    })
    );
  $('html,body').animate({
    scrollTop: $(".page-3").offset().top}, //scroll to page-3 on pressing enter
    'fast');
  
}





let zoomCounter=0
 function displayZoomLevel(zoom) {
   if(zoom>3 ){

      countryGroup.setVisibility(false)
      stateGroup.setVisibility(true)
      // //console.log("Zoom In")
      //console.log(zoom)  

  }else{      
      countryGroup.setVisibility(true)
      stateGroup.setVisibility(false)
      // //console.log("Zoom Out")

    }
  }
  var ui = H.ui.UI.createDefault(map, defaultLayers);
  ui.getControl('zoom').setVisibility(false)
  ui.getControl('mapsettings').setVisibility(false)
  ui.getControl('scalebar').setVisibility(false)



  //remove incidents options
 // A listener updates the map zoom level 
map.addEventListener('mapviewchangeend', function () {
    var zoom = map.getZoom();
    displayZoomLevel(zoom);
 });

 map.addObject(countryGroup)
//  //console.log(countryGroup)
 map.addObject(stateGroup)

 stateGroup.addEventListener('tap', function (evt) {
  // event target is the marker itself, group is a parent event target
  // for all objects that it contains
  var bubble =  new H.ui.InfoBubble(evt.target.getCenter(), {
    // read custom data
    content: evt.target.getData()
  });

  // show info bubble
  ui.addBubble(bubble);
 })

//  countryGroup.addEventListener('pointermove', function (evt) {
//   // event target is the marker itself, group is a parent event target
//   // for all objects that it contains
//   //console.log("sssss")
//   var bubble =  new H.ui.InfoBubble(evt.target.getCenter(), {
//     // read custom data
//     content: evt.target.getData()
//   });

//   // show info bubble
//   ui.addBubble(bubble);
//  })








