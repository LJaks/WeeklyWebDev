/*

STRETCH GOALS:

1) Go all out with styles: fonts, sizes, backgrounds, transitions, colours! 

2) Find a purpose for your card: business card, invitation to a party, email subscription, 
a video reveal or a music album cover with a song player at the back. 

3) Depending on you purpose add some the relevant interactivity: 
    - business card: links to your social media
    - invitation to a party, email subscription: confirmation of the subscription 
    - a video reveal/song card: start playing the video/song

*/
function play() {
    var audio = document.getElementById("audioID");
    audio.play();
  }
  function stopPlay() {
      var audio = document.getElementById("audioID");
      audio.pause();
      audio.currentTime = 0;
  }
