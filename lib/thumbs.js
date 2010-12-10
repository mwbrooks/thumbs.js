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
        threshold=40;
    
    var onTouchEnd = function (e) {
      var newEvent  = window.document.createEvent('TouchEvent');
      /* TODO: some of the event properties transposed below
            are actually stored on the touch objects. 
            For touchend, they'll be on changedTouches
            --
            var touch = e.changedTouches[0];
      */
      newEvent.initTouchEvent(
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
        e.touches,
        e.targetTouches,
        e.changedTouches,
        e.scale,
        e.rotation
      );
      
      element.dispatchEvent(newEvent);
    }
    
    var onTouchMove = function (e) {
      currY=e.targetTouches[0].screenY;
      diffY=Math.abs(originY-currY);
      if (diffY > threshold) {
        console.log('cancelled')
        element.removeEventListener('touchend',onTouchEnd);
        element.removeEventListener('touchmove',onTouchMove);
      }
    }

    var onTouchStart = function(e) {
      originY=e.targetTouches[0].screenY;
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
      if (type === 'tap' && typeof document.body['ontouchstart'] != 'undefined') {
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
