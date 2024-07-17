$(document).ready(function(){
    var numOfPixels = 1000;
    var counter = 1;
    
    // make pixels
    while (counter < numOfPixels) {
      var pixel = $('<div class="pixel-' + counter + '"></div>');
      $('.O_o'). append(pixel);
      counter++;
    }
    
    var wait = 1000;
    var waitTwo = 4000;
    
    setTimeout(openAndCloseEyes, 1000);
    
    function openAndCloseEyes(){
      closeEyes();
      setTimeout(function(){ openEyes(); }, 200);
      wait = Math.floor(Math.random() * waitTwo);
      setTimeout(openAndCloseEyes, wait);
    }
    
    function closeEyes() {
      $('.pixel-21').css({
        "background": "#d1b17e"
      });
      $('.pixel-25').css({
        "background": "#d1b17e"
      });
    }
    
    function openEyes() {
      var eyes = Math.floor(Math.random() * waitTwo);
      
      if (eyes > waitTwo) {
        var eyeColor = "#f7c94b";
      } else {
        var eyeColor = "#fefefe";
      }
      
      $('.pixel-21').css({
        "background": eyeColor
      });
      $('.pixel-25').css({
        "background": eyeColor
      });
    }
    
  });