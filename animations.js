var highlight = function (elem, duration, o) {
  o = o || {};
  var color = o.color || '#60a0d0';
  return new TimelineMax()
     .to(elem, 0, {backgroundColor: 'white', fill: 'white'})
     .to(elem, duration/2, {backgroundColor: color, fill: color})
     .to(elem, duration/2, {backgroundColor: 'white', fill: 'white'})
};
var transfer = function (o, duration) {
 var allTransfers = new TimelineMax();
 o.from.each(function (idx, from) {
   o.to.each(function (idx, to) {
     var transfer = new TimelineMax({onComplete: function () { transferBlock.remove() }})
     var transferBlock = $( "<div class='effects-transfer'></div>" )
     transfer.add(highlight($(from), duration), 0);
     transfer.add(highlight($(to), duration), 0);
     transfer.add(TweenLite.delayedCall(0, function () { transferBlock.appendTo(document.body) }), 0)
     transfer.add(function () { 
       var startPosition = $(from).offset();
       var endPosition = $(to).offset();
       transferBlock
        .css({
            top: startPosition.top,
            left: startPosition.left,
            height: $(from).innerHeight(),
            width: $(from).innerWidth(),
            position: "absolute"
        })
       return TweenLite.to(transferBlock, duration, {top: endPosition.top, left: endPosition.left, height: $(to).innerHeight(), width: $(to).innerWidth() })
     }, 0)
     allTransfers.add(transfer, 0)
    })
 })
 return allTransfers;
}

