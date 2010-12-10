(function(scope) {

  var addEventListener = window.Element.prototype.addEventListener;
  
  var events = {
    touchstart: 'mousedown',
    touchend:   'mouseup',
    touchmove:  'mousemove',
    tap:        'click'
  };

  var Tap = function(element) {
    
    var originY,
        currY,
        diffY,
        threshold=4;
    
    var onTouchEnd = function (e) {
      var newEvent  = window.document.createEvent('MouseEvent');
      newEvent.initMouseEvent(
        "tap",
        e.bubbles,
        e.cancelable,
        e.view,
        e.detail,
        e.screenX,
        e.screenY,
        e.clientX,
        e.clientY,
        e.ctrlKey,
        e.altKey,
        e.shiftKey,
        e.metaKey,
        e.button,
        e.relatedTarget
      );
    }
    
    var onTouchMove = function (e) {
      currY=e.targetTouches[0].pageY;
      diffY=Math.abs(originY-currY);
      if (diffY > threshold) {
        element.removeEventListener('touchend',onTouchEnd);
        element.removeEventListener('touchmove',onTouchMove);
      }
    }

    var onTouchStart = function(e) {
      originY=e.targetTouches[0].pageY;
      element.addEventListener('touchend',onTouchEnd); 
      element.addEventListener('touchmove',onTouchMove); 
    };
    
    element.addEventListener('touchstart',onTouchStart);
    
    return {
      
    };
  };
  
  window.Element.prototype.addEventListener = function(type, listener, useCapture) {
    // Remap unsupported events
    if (events[type]) {
      if (type === 'tap') {
        new Tap(this);
      }
      else if (typeof document.body['on' + type] === 'undefined') {
        type = events[type];
      }
    }
    
    // Forward to the actual addEventListener
    return addEventListener.call(this, type, listener, useCapture);
  };

})(window);
