(function(scope) {

  var addEventListener = window.Element.prototype.addEventListener;
  
  var events = {
    touchstart: 'mousedown',
    touchend:   'mouseup',
    touchmove:  'mousemove',
    tap:        'click'
  };

  window.Element.prototype.addEventListener = function(type, listener, useCapture) {
    // Remap unsupported events
    if (events[type]) {
      if (typeof this[type] === 'undefined') {
        type = events[type];
      }
    }

    // Forward to the actual addEventListener
    return addEventListener.call(this, type, listener, useCapture);
  };

})(window);
