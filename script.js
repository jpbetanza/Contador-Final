var countDownDate = new Date(2023,7,10,18)
var audio = new Audio("./src/StereoLove.mp3")
audio.loop = true


var cronometro = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("id1").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
    if(timeleft==0){
      audio.play()
    }
  }, 1000)
var bgColor = setInterval(function() {
  coming
  start
  middle
  end

  document.getElementById('bod').classList.value = "test"
},50)