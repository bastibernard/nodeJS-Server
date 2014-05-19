/**
 * Created by Sebastian Bernard on 13.04.14.
 */

var fullScreen = false;

window.onload = function(){

  console.log("eine beliebige Konsolenausgabe");


  var videoFrame = document.querySelector('video');
  var slider = document.querySelector('input.slider');
  var time = document.querySelector('input.videoTime');
  var playPause = document.querySelector('#playButton');
  var stopButton = document.querySelector('#stopButton');
  var fullscreenbutton = document.querySelector('#Fullscreen')

  slider.max = videoFrame.duration;

  // Stops Video if running, otherwise resume
  playPause.onclick = function(){

       if(videoFrame.paused)
           videoFrame.play();
       else
           videoFrame.pause();
   };
    //Stops Video an sets Time to zero
   stopButton.onclick = function(){

       videoFrame.pause();
       videoFrame.currentTime = 0;

   };
    //Activates fake Fullscreen
   fullscreenbutton.onclick = function (){


       videoFrame.className = "fullscreen";
       fullScreen = true;
   };
    //Exits Fullscreen
    videoFrame.onclick = function(){
        if(fullScreen){
            videoFrame.className = "normalScreen";
            fullScreen = false;
            }
    };

    // Seek to Position from Value of Slider
    var seek = function(){

        videoFrame.currentTime = slider.value;

    }
    //Updates Slider and Time
    var updateSliderAndTime = function(){

        function addLeadingZeros(number, length) {
            var num = '' + number;
            while (num.length < length) num = '0' + num;
            return num;
        }

        time.value =addLeadingZeros(parseInt((videoFrame.currentTime) / 60),2) +':'+ addLeadingZeros(parseInt(videoFrame.currentTime % 60),2);
        slider.value = videoFrame.currentTime;



    }

    slider.addEventListener("change",seek);
    videoFrame.addEventListener("timeupdate",updateSliderAndTime);


}




