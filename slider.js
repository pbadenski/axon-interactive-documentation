var slider = {
  configure: function (animation) {
    $("#play").click(function () { 
      if ($(this).toggleClass("paused").hasClass("paused")) {
        animation.pause()
        $(this).html("play")
      } else {
        animation.play()
        $(this).html("||")
      }
    });
    var animationControl = {
      enable: function () { $("#slider *").prop("disabled", false); },
      disable: function () { $("#slider *").prop("disabled", true); }
    }
    $("#play").not(".paused").click(function () { animation.pause(); });
    $("#prev").click(function () { 
      animationControl.disable()
      animation.seek(animation.getLabelBefore()); 
      animation.seek(Math.max(0, animation.getLabelTime(animation.getLabelBefore()))); 
      animation.tweenTo(animation.getLabelAfter(), {ease: Quad.easeOut, onComplete: animationControl.enable}); 
    });
    $("#next").click(function () { 
      animationControl.disable()
      animation.tweenTo(animation.getLabelAfter(), {onComplete: animationControl.enable}); 
    });
  }
}
