var highlight = function (elem, duration, o) {
  o = o || {};
  var color = o.color || '#60a0d0';
  return new TimelineMax()
     .to(elem, 0, {backgroundColor: 'white', fill: 'white'})
     .to(elem, duration/2, {backgroundColor: color, fill: color})
     .to(elem, duration/2, {backgroundColor: 'white', fill: 'white'})
};
var transfer = function (o, duration) {
 var animation = new TimelineMax();
 o.from.each(function (idx, from) {
   o.to.each(function (idx, to) {
     var startPosition = $(from).offset();
     var endPosition = $(to).offset();
     var transferBlock = $( "<div class='effects-transfer'></div>" )
      .appendTo(document.body)
      .css({
          top: startPosition.top,
          left: startPosition.left,
          height: $(from).innerHeight(),
          width: $(from).innerWidth(),
          position: "absolute"
      })
     animation.add(new TimelineMax({onComplete: function () { transferBlock.remove() }})
      .to(transferBlock, duration, {top: endPosition.top, left: endPosition.left, height: $(to).innerHeight(), width: $(to).innerWidth() }), 0)
    })
 })
 return animation;
}

