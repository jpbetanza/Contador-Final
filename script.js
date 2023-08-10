var countDownDate = new Date(2023,11,16,23:59)
var stereo = new Audio("./src/StereoLove.mp3")
var cantGetOver = new Audio("./src/cantGetOver.mp3")
stereo.loop = true

function playGetOver(){
  cantGetOver.play()
  document.getElementById('id1').onclick = function(){stopGetOver();} 
}
function stopGetOver(){
  cantGetOver.pause()
  document.getElementById('id1').onclick = function(){playGetOver();}
}

//Cronometro
var cronometro = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24)).toLocaleString('en-us',{minimumIntegerDigits:2, useGrouping:false});
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString('en-us',{minimumIntegerDigits:2, useGrouping:false});
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-us',{minimumIntegerDigits:2, useGrouping:false});
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000).toLocaleString('en-us',{minimumIntegerDigits:2, useGrouping:false});
    if(timeleft>0){
      document.getElementById("id1").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
    }
    else{
      document.getElementById("id1").innerHTML = "É isto"
      stereo.play()
    }
  }, 1000)