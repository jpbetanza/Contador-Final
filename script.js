var countDownDate = new Date(2023,7,10,18)
var audio = new Audio("./src/StereoLove.mp3")
audio.loop = true


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
      audio.play()
    }
  }, 1000)