(function(scope) {
  
  /**
   * Utility function to check event support
   *
   * @param  {String} name of the event
   * @return {Boolean}
   */
  var supports = function(name) {
    // Cannot inspect document.body because it may not be loaded at this time
    return (typeof document['on' + name] !== 'undefined');
  };
  
  /**
   * Backup original addEventListener and determine best event type
   */
  var addEventListener = window.Element.prototype.addEventListener;
  var touchable = supports('touchstart');
  var events = {
    'click':      touchable ? 'tap'        : 'click',
    'mousedown':  touchable ? 'touchstart' : 'mousedown',
    'mouseup':    touchable ? 'touchend'   : 'mouseup',
    'mousemove':  touchable ? 'touchmove'  : 'mousemove',
    'tap':        touchable ? 'tap'        : 'click',
    'touchstart': touchable ? 'touchstart' : 'mousedown',
    'touchend':   touchable ? 'touchend'   : 'mouseup',
    'touchmove':  touchable ? 'touchmove'  : 'mousemove'
  };
  
  /**
   * @override
   * Override Element addEventListener
   *
   * Intercept the addEventListener calls in order to select best event type.
   *
   * @param type       {String} is the event name
   * @param listener   {Function} is the event handler
   * @param useCapture {Boolean} defines capture rule for event
   */
  window.Element.prototype.addEventListener = function(type, listener, useCapture) {
    type = (events[type] || type);
    if (type === 'tap') Tap.create(this, listener, useCapture);
    
    return addEventListener.call(this, type, listener, useCapture);
  };
  
  /**
   * Tap event (elementary implementation)
   */
  var Tap = (function() {    
    return {
      create: function(element, listener, useCapture) {
        element.addEventListener('touchend', listener, useCapture);
      }
    };
  })();
  
})(window);
