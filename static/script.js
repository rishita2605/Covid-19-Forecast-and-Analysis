var count=0;

//scrolling to top on refresh
$(document).ready(function(){
  $(this).scrollTop(0);
});

//page-1 
//map (cursor to grabbing on hold and dragging map)

/*var mapElem=document.getElementsByClassName("map");*/
//drag event not working in javascript 
//mapElem[0].addEventListener("ondragstart",grabbingCursor);//indexed 0 because that's where the elem exists on the array 
//$(".map").click(grabbingCursor);


$(".map").mousedown(function(evt) {
   $(evt.target).css("cursor","grabbing");
});

$(".map").mouseup(function(evt){
  $(evt.target).css("cursor","grab");
});

//press enter to search
$(".search").keyup(function(event){
    // //console.log(event.keyCode);
    if(event.keyCode === 13){
        //console.log("if");
        lineAnimateBlue();
        $('html,body').animate({
          scrollTop: $(".page-3").offset().top}, //scroll to page-3 on pressing enter
          'fast');
        update();
    }

    
});


//animation on input in search box

$(".search").click(lineAnimatePink);

function lineAnimatePink(){
  //console.log("line animate");
  $(".line-2").css({"transform":"translateX(-50%)","opacity":"1"});
  $(".line-3").css({"transform":"translateX(50%)","opacity":"1"});
  $(".search").css("border","2px solid #da1b60");
}

function lineAnimateBlue(){
  //console.log("line animate");
  $(".line-2").css({"transform":"translateX(-250%)","opacity":"0"});
  $(".line-3").css({"transform":"translateX(250%)","opacity":"0"});
  $(".search").css("border","2px solid rgba(15,164,254,1)");
}




// makes the canvas 100% to the width and height of its parent
/*var canvas = document.querySelector('canvas');
fitToContainer(canvas);

function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width ='100%';
  canvas.style.height='90%';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}*/


//scroll to work on chrome
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});



/*$(document).ready(function(){
  $(".list-item-1").click(function() {
       $("html, body").animate({ scrollTop: 0 }, "slow");
       return false;
  });
});*/




 /*var checkScrollPos = function() {

      var scroll_pos = $(window).scrollTop();
      //console.log(scroll_pos);

              if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    //console.log("if");

                } else {

                  //console.log("else");
                  return;
                    for(var i=sections_arr.length - 1; i > -1; i--){
                        if(sections_arr[i].offset <= scroll_pos) {

                            target_dot = $(".vertical-dot-nav .dot[data-target='"+sections_arr[i].name+"']");
                            assignStyles(target_dot);

                            return;
                        }
                    }
         }
  
    

  checkScrollPos();*/



  //changing the nav bars background on scroll


  $(window).scroll(scrollNav);
  $(".list-item-1").click(function(){
    setTimeout(()=>{
    navPageOne();
  },500)
}
);
  $(".list-item-2").click(function(){
    setTimeout(()=>{
    navPageTwo();
  },500)
}
);
  $(".list-item-3").click(function(){
    setTimeout(()=>{
    navPageThree();
  },500)
}
);
  $(".list-item-4").click(function(){
    setTimeout(()=>{
    navPageFour();
  },500)
}
);
  
  $(window).scroll(hideAutoComplete);

  /*since autocomplete's position is fixed, it stays on its position on scrolling hence making its display none*/
  function hideAutoComplete(){
    //var scrollPos=$(window).scrollTop();
    var a = $(window).scrollTop();
    var b = $(window).height();
    var c = a / b; /* c ranges from 0 to 0.99 on page-1, 1-1.99 on page-2 and 2-2.99 on page-3*/
    // //console.log("a=" + a,"b=" + b, "c=" + c);
      //$("#search-3autocomplete-list").css("display","none");
    
    
  }
 
  

  function scrollNav(event) {
    
    var a = $(window).scrollTop();
    var b = $(window).height();
    var c = a / b;
    // //console.log("c=",c);
      if(c>0 && c<0.5){
        navPageOne();
      }
      else if(c>0.5 && c<1.5){
        navPageTwo();
        //console.log("change 2");
      }

      else if(c>1.5 && c<2.5){
        navPageThree();
      }

      else if(c>2.5 && c<3){
        navPageFour();
        ////console.log("do nothing");
      }

    }

  function navPageOne(){
        $(".list-item-1").css("backgroundColor","rgba(255,246,235,1)");
        $(".list-item-2").css("backgroundColor","transparent");
        $(".list-item-3").css("backgroundColor","transparent");
        $(".list-item-4").css("backgroundColor","transparent");
  }

  function navPageTwo(){
    $(".list-item-2").css("backgroundColor","rgba(255,246,235,1)");
    $(".list-item-1").css("backgroundColor","transparent");
    $(".list-item-3").css("backgroundColor","transparent");
    $(".list-item-4").css("backgroundColor","transparent");
  }

  function navPageThree(){
        $(".list-item-3").css("backgroundColor","rgba(255,246,235,1)");
        $(".list-item-1").css("backgroundColor","transparent");
        $(".list-item-2").css("backgroundColor","transparent");
        $(".list-item-4").css("backgroundColor","transparent");
  }

  function navPageFour(){
    $(".list-item-3").css("backgroundColor","transparent");
        $(".list-item-1").css("backgroundColor","transparent");
        $(".list-item-2").css("backgroundColor","transparent");
        $(".list-item-4").css("backgroundColor","rgba(255,246,235,1)")
  }


  
 
   //changing size on hover
   $(".navigation a").mouseenter(function(evt){
   
    $(evt.target).css('transform','scale(0.9)');
   })
  
   $(".navigation a").mouseleave(function(evt){
    $(evt.target).css('transform','scale(1)');
   })
      
      
    
    /*
    else{

      $(".navigation").css("backgroundColor","rgba(5,5,60,0.7)");
      $(".navigation a").css({"border":"2px solid rgba(240,240,255,0.7)" });
      $(".list-item-1").css("backgroundColor","rgba(240,240,255,0.9)");
      //hover effect on the nav-dots(white)
      $(".navigation a").mouseenter(function(evt){
        $(evt.target).css("backgroundColor","(240,240,255,0.7)");
      });
      $(".navigation a").mouseleave(function(evt){
        $(evt.target).css("backgroundColor","transparent");
      });

    } */
    // Do something


//page-3
// $(".search-3").on('input',positionFix);
// $(".search-3").on('blur',positionUnfix);
//disabling and enabling scroll 

/*function disableScroll() { 
  // Get the current page scroll position 
  scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 

      // if any scroll is attempted, set this to the previous value 
      window.onscroll = function() { 
          window.scrollTo(scrollLeft, scrollTop); 
      }; 
} 

function enableScroll() { 
  window.onscroll = function() {}; 
} 

function positionFix(){
  //console.log("input working")
  $("#search-3autocomplete-list").css("display","block");
  disableScroll();
  
}

function positionUnfix(){
  //console.log("blur");
  $("#search-3autocomplete-list").css("position","static");
  $("#search-3autocomplete-list").css("display","none");
  enableScroll();
}*/

//search box icon rotate
// $(".btn").click(iconRotate);
// $(".search-3").blur(iconReRotate);
//$(".text-content-3 .btn").click(overlayVisible);


function iconRotate(evt){
  $(".fas").css("transform","rotate(360deg)");
}

function iconReRotate(evt){
  $(".fas").css("transform","rotate(0deg)");
}

/*function overlayVisible(evt){

  setTimeout(()=>{
    $(".fas").css("transform","rotate(360deg)");
  },50)

  $(".overlay").css("display","flex");
  //console.log("visible");
}*/


//radio buttons
$("#Uno").on('change',infectedGraph);
$("#Dos").on('change',recoveredGraph);
$("#Tres").on('change',deathsGraph);


function infectedGraph(){
  //console.log('infected');
  opacityGraph("infected-graph","recovered-graph","deaths-graph");
  setTimeout(()=>{
    $(".infected-graph").css("display","block");
    $(".recovered-graph").css("display","none");
    $(".deaths-graph").css("display","none");
  },500);
  
}

function recoveredGraph(){
  ////console.log("recovered");
  opacityGraph("recovered-graph","deaths-graph","infected-graph");
  setTimeout(()=>{
    $(".infected-graph").css("display","none");
    $(".recovered-graph").css("display","block");
    $(".deaths-graph").css("display","none");
  },500);
  
  

}

function deathsGraph(){
  ////console.log("deaths");
  opacityGraph("deaths-graph","recovered-graph","infected-graph");
  setTimeout(()=>{
    $(".infected-graph").css("display","none");
    $(".recovered-graph").css("display","none");
    $(".deaths-graph").css("display","block");
  },500);
  
}

function opacityGraph(graphOne,graphTwo,graphThree){
  ////console.log(graphOne,graphTwo,graphThree);
  $(`.${graphOne}`).css("opacity","1");
  $(`.${graphTwo}`).css("opacity","0");
  $(`.${graphThree}`).css("opacity","0");
}

let countries=
[
'Afghanistan (AF)','Aland Islands (AX)','Albania (AL)','Algeria (DZ)','American Samoa (AS)','Andorra (AD)','Angola (AO)','Anguilla (AI)','Antarctica (AQ)','Antigua And Barbuda (AG)','Argentina (AR)','Armenia (AM)','Aruba (AW)','Australia (AU)','Austria (AT)','Azerbaijan (AZ)','Bahamas (BS)','Bahrain (BH)','Bangladesh (BD)','Barbados (BB)','Belarus (BY)','Belgium (BE)','Belize (BZ)','Benin (BJ)','Bermuda (BM)','Bhutan (BT)','Bolivia (BO)','Bosnia And Herzegovina (BA)','Botswana (BW)','Bouvet Island (BV)','Brazil (BR)','British Indian Ocean Territory (IO)','Brunei Darussalam (BN)','Bulgaria (BG)','Burkina Faso (BF)','Burundi (BI)','Cambodia (KH)','Cameroon (CM)','Canada (CA)','Cape Verde (CV)','Cayman Islands (KY)','Central African Republic (CF)','Chad (TD)','Chile (CL)','China (CN)','Christmas Island (CX)','Cocos (Keeling) Islands (CC)','Colombia (CO)','Comoros (KM)','Congo (CG)','Congo, Democratic Republic (CD)','Cook Islands (CK)','Costa Rica (CR)','Cote D\'Ivoire (CI)','Croatia (HR)','Cuba (CU)','Cyprus (CY)','Czech Republic (CZ)','Denmark (DK)','Djibouti (DJ)','Dominica (DM)','Dominican Republic (DO)','Ecuador (EC)','Egypt (EG)','El Salvador (SV)','Equatorial Guinea (GQ)','Eritrea (ER)','Estonia (EE)','Ethiopia (ET)','Falkland Islands (Malvinas) (FK)','Faroe Islands (FO)','Fiji (FJ)','Finland (FI)','France (FR)','French Guiana (GF)','French Polynesia (PF)','French Southern Territories (TF)','Gabon (GA)','Gambia (GM)','Georgia (GE)','Germany (DE)','Ghana (GH)','Gibraltar (GI)','Greece (GR)','Greenland (GL)','Grenada (GD)','Guadeloupe (GP)','Guam (GU)','Guatemala (GT)','Guernsey (GG)','Guinea (GN)','Guinea-Bissau (GW)','Guyana (GY)','Haiti (HT)','Heard Island & Mcdonald Islands (HM)','Holy See (Vatican City State) (VA)','Honduras (HN)','Hong Kong (HK)','Hungary (HU)','Iceland (IS)','India (IN)','Indonesia (ID)','Iran, Islamic Republic Of (IR)','Iraq (IQ)','Ireland (IE)','Isle Of Man (IM)','Israel (IL)','Italy (IT)','Jamaica (JM)','Japan (JP)','Jersey (JE)','Jordan (JO)','Kazakhstan (KZ)','Kenya (KE)','Kiribati (KI)','Korea (KR)','Kuwait (KW)','Kyrgyzstan (KG)','Lao People\'s Democratic Republic (LA)','Latvia (LV)','Lebanon (LB)','Lesotho (LS)','Liberia (LR)','Libyan Arab Jamahiriya (LY)','Liechtenstein (LI)','Lithuania (LT)','Luxembourg (LU)','Macao (MO)','Macedonia (MK)','Madagascar (MG)','Malawi (MW)','Malaysia (MY)','Maldives (MV)','Mali (ML)','Malta (MT)','Marshall Islands (MH)','Martinique (MQ)','Mauritania (MR)','Mauritius (MU)','Mayotte (YT)','Mexico (MX)','Micronesia, Federated States Of (FM)','Moldova (MD)','Monaco (MC)','Mongolia (MN)','Montenegro (ME)','Montserrat (MS)','Morocco (MA)','Mozambique (MZ)','Myanmar (MM)','Namibia (NA)','Nauru (NR)','Nepal (NP)','Netherlands (NL)','Netherlands Antilles (AN)','New Caledonia (NC)','New Zealand (NZ)','Nicaragua (NI)','Niger (NE)','Nigeria (NG)','Niue (NU)','Norfolk Island (NF)','Northern Mariana Islands (MP)','Norway (NO)','Oman (OM)','Pakistan (PK)','Palau (PW)','Palestinian Territory, Occupied (PS)','Panama (PA)','Papua New Guinea (PG)','Paraguay (PY)','Peru (PE)','Philippines (PH)','Pitcairn (PN)','Poland (PL)','Portugal (PT)','Puerto Rico (PR)','Qatar (QA)','Reunion (RE)','Romania (RO)','Russian Federation (RU)','Rwanda (RW)','Saint Barthelemy (BL)','Saint Helena (SH)','Saint Kitts And Nevis (KN)','Saint Lucia (LC)','Saint Martin (MF)','Saint Pierre And Miquelon (PM)','Saint Vincent And Grenadines (VC)','Samoa (WS)','San Marino (SM)','Sao Tome And Principe (ST)','Saudi Arabia (SA)','Senegal (SN)','Serbia (RS)','Seychelles (SC)','Sierra Leone (SL)','Singapore (SG)','Slovakia (SK)','Slovenia (SI)','Solomon Islands (SB)','Somalia (SO)','South Africa (ZA)','South Georgia And Sandwich Isl. (GS)','Spain (ES)','Sri Lanka (LK)','Sudan (SD)','Suriname (SR)','Svalbard And Jan Mayen (SJ)','Swaziland (SZ)','Sweden (SE)','Switzerland (CH)','Syrian Arab Republic (SY)','Taiwan (TW)','Tajikistan (TJ)','Tanzania (TZ)','Thailand (TH)','Timor-Leste (TL)','Togo (TG)','Tokelau (TK)','Tonga (TO)','Trinidad And Tobago (TT)','Tunisia (TN)','Turkey (TR)','Turkmenistan (TM)','Turks And Caicos Islands (TC)','Tuvalu (TV)','Uganda (UG)','Ukraine (UA)','UAE (AE)','UK (GB)','USA (US)','United States Outlying Islands (UM)','Uruguay (UY)','Uzbekistan (UZ)','Vanuatu (VU)','Venezuela (VE)','Viet Nam (VN)','Virgin Islands, British (VG)','Virgin Islands, U.S. (VI)','Wallis And Futuna (WF)','Western Sahara (EH)','Yemen (YE)','Zambia (ZM)','Zimbabwe (ZW)'
]





/*page-2 list*/

function pageTwo(){


  

  

for(var t=0;t<countryArray.length;t++){
  var casesTotal=numberWithCommas(countryArray[t].casesTotal)
  var casesToday=numberWithCommas(countryArray[t].casesToday)
  var activeCases=numberWithCommas(countryArray[t].activeCases)
  var deathsToday=numberWithCommas(countryArray[t].deathsToday)
  var deaths=numberWithCommas(countryArray[t].deaths)
  var recoveredToday=numberWithCommas(countryArray[t].recoveredToday)
  var recovered=numberWithCommas(countryArray[t].recovered)
  //<div class="flag" ></div>
  var elem=`<div class="content-2 init ${countryArray[t].country}" onclick="showData(this.className)">  <div class="content-part-1">
      <div class="location-2">
          
          
          <div class="country"><img src="${countryArray[t].flagImg}" width="26px" height="20px"/>&nbsp; ${countryArray[t].country}</div>
      </div>
  </div>
  <div class="content-part-2">
      <div class="total-cases">
          <div class="infected-2">${casesTotal}</div>
          <div class="additional-infected-2">+${casesToday}</div>
      </div>
      <div class="active-cases">${activeCases}</div>
      <div class="total-deaths">
          <div class="deaths-2">${deaths}</div>
          <div class="additional-deaths-2">+${deathsToday}</div>
      </div>
      <div class="total-recovered">
          <div class="recovered-2">${recovered}</div>
          <div class="additional-recovered-2">+${recoveredToday}</div>
      </div>
  </div>             
</div>`

$(".main-content-2").append(elem);

  }
  
  
}
setTimeout(pageTwo,3000);


// Autocomplete code
function autocomplete(inp, id, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      iconRotate()
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          b.setAttribute("class","autoCompleteElem");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/     
              inp.value = this.getElementsByTagName("input")[0].value;
              if(id=="search"){
                $('html,body').animate({
                  scrollTop: $(".page-3").offset().top}, //scroll to page-3 on pressing enter
                  'fast');
              }
              iconReRotate()
              stateDataDisplay(id);
              update(id);
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        iconReRotate()
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

//function call (autocomplete)
autocomplete(document.getElementById("search"),"search", countries);
autocomplete(document.getElementById("search-3"),"search-3",countries);
autocomplete(document.getElementById("search-4"),"search-4",countries);

//page-4
$(".btn-card-1").click(extendDiv);
$(".btn-card-2").click(extendDiv);


function extendDiv(){
  var par=$(this).parent();
  par=par[0];
  var parClass="."+$(par).attr('class') + " .fa-chevron-down"
  var hiddenClass="."+$(par).attr('class') + " .hidden"
  var moreLess="."+$(par).attr('class') + " .more-less"
  //console.log(par);
  //console.log(parClass);

  var heightDiv=Number($(par).css("height").slice(0,-2))
  //console.log(heightDiv)
  if($(moreLess).text()=="More"){
    $(par).css("height",`${heightDiv*2.5}px`)
    //console.log($(par).css("height"))
    $(".btnCard").css("transform",`translateY(${heightDiv})`)
    $(parClass).css("transform","rotate(180deg)")
    setTimeout(()=>{
      $(moreLess).text("Less")
      $(hiddenClass).css("display","block")
      //$(".hidden").css("opacity","1")
    },500)
  }
  else{
    $(par).css("height","10em")
    $(".btnCard").css("transform","translateY(0%)")
    $(parClass).css("transform","rotate(0deg)")
    setTimeout(()=>{
      $(moreLess).text("More")
      $(hiddenClass).css("display","none")
      //$(".hidden").css("opacity","0")
    },500)
    setTimeout(()=>{
      $(hiddenClass).css("display","none")
      //$(".hidden").css("opacity","0")
    },350)
  }
  
  
}

//page-3 
$(".search-3").val(); //setting default value of textbox (on load)
$(".search-3").keyup(stateDataDisplayEnter);
//state-data

function stateDataDisplayEnter(event){
  if(event.keyCode==13){
    stateDataDisplay();
  }
}


function stateDataDisplay(id){
  /*var countKey=$(".search-3").keyup(function(evt){
    return evt.keyCode
  })

  //console.log(countKey)*/
  
  

    //$("#search-3autocomplete-list").css("display","block");
    var countryCount=-1;
    var count=-1;
    if(id=="search"){
      $(`.search-3`).val($(`.${id}`).val())
      $(`.search-4`).val($(`.${id}`).val())
    }
    if(id=="search-3"){
      $(`.search`).val($(`.${id}`).val())
      $(`.search-4`).val($(`.${id}`).val())
    }
    if(id=="search-4"){
      $(`.search`).val($(`.${id}`).val())
      $(`.search-3`).val($(`.${id}`).val())
    }
    $(".state-content").empty(); //emptying the division on every input and adding the new elements
    $(".heading-3").text($(`.${id}`).val());
    $(".title-text-3").text($(`.${id}`).val()); //changing the title of second column on pressing enter
    //console.log($(`.search-3`).val())
    var countryInp=$(`.search-3`).val().toLowerCase();
    countryInp=countryInp.slice(0,-5);
    // //console.log(countryArray);
    for(let k=0;k<countryArray.length;k++){
      var countryRow2=countryArray[k].country.toLowerCase().slice(0,-5);
    
      if(countryRow2==countryInp){
        countryCount=k;
        break;

      }
    }

    if(countryInp=="usa"){
      count=17;
    }

    else if(countryInp=="uk"){
      count=19;
    }
    else{
      for(let i=0; i<stateArray.length; i++){
        var country=stateArray[i].country.toLowerCase();
        ////console.log(countryInp,country)
        if(countryInp==country){
          count=i;
          break;
        }
    
      }

    }

    
    ////console.log("count outside else"+count);
    

    var elemUnavailable=`<div class="state-3">
    <div class="unavailable-3">No State Data Available</div>
  </div>`
    
    if (count==-1){
        $(".state-content").append(elemUnavailable)
      
    }
  
    else{
      ////console.log("count inside else"+count);
      for(let j=0; j < stateArray[count].state.length; j++){
        var stateInfected=numberWithCommas(stateArray[count].state[j].stateCases);
        var stateDeaths=numberWithCommas(stateArray[count].state[j].stateDeath);
        var stateRecovered=numberWithCommas(stateArray[count].state[j].stateRec);
        var elem=`<div class="state-3">
        <div class="state-name-3">${stateArray[count].state[j].stateName}</div>
        <div class="sub-div-3">
            <div class="main-txt-3">
                <div class="infected-1 sub-heading-1"> Infected: &nbsp; </div>
                <div class="infectedno-3">${stateInfected}</div>
            </div>
             <div class="main-txt-3">
                <div class="recovered-3 sub-heading-3">Deaths: &nbsp; </div>
                <div class="recoveredno-3">${stateDeaths}</div>
             </div>
            <div class="main-txt-3 no-border">
               <div class="deaths-3 sub-heading-3">Recovered: &nbsp; </div>
               <div class="deathsno-3">${stateRecovered}</div>
            </div>
            
       </div>
      </div>`
  
      $(".state-content").append(elem);
      }
    }
  

    //row-2 updation of country data
    var casesTotal=numberWithCommas(countryArray[countryCount].casesTotal)
    var casesToday=numberWithCommas(countryArray[countryCount].casesToday)
    var activeCases=numberWithCommas(countryArray[countryCount].activeCases)
    var deathsToday=numberWithCommas(countryArray[countryCount].deathsToday)
    var deaths=numberWithCommas(countryArray[countryCount].deaths)
    var recoveredToday=numberWithCommas(countryArray[countryCount].recoveredToday)
    var recovered=numberWithCommas(countryArray[countryCount].recovered)

    $('.infectedno-3-3').html(`${casesTotal}`)
    $('.recoveredno-3-3').html(`${recovered}`)
    $('.deathno-3-3').html(`${deaths}`)
    $('.sub-txt-3-1').html(`+${casesToday}`)
    $('.sub-txt-3-2').html(`+${recoveredToday}`)
    $('.sub-txt-3-3').html(`+${deathsToday}`)

}





