(function(scope) {

  /**
   * Event Listener Assertion
   *
   * Listens for an event on a custom element and
   * fires onTrigger or onTimeout.
   *
   * @param  {String} name of the event to listen for
   * @param  {Object} options { onTrigger: {Function}, onTimeout: {Function} }
   * @return {Object} of chainable actions
   */
  scope.listen = function(name, options) {
    QUnit.stop();
    expect(1);

    var options = merge(options, defaultOptions);
    var element = document.createElement('a');

    element.addEventListener(name, function(e) {
      clearTimeout(timeoutId);
      options.onTrigger(e);
      QUnit.start();
    }, false);

    var timeoutId = setTimeout(function() {
      options.onTimeout();
      QUnit.start();
    }, 300);

    return {
      /**
       * Trigger an event on the listener's element
       *
       * @param {String} name of event to trigger
       */
      trigger: function(name) {
        var e = createEvent(name);
        element.dispatchEvent(e);
        return this;
      }
    };
  };

  /**
   * Default Options for Listener
   */
  var defaultOptions = {
    onTrigger: function(e) {
      ok(true, 'received ' + name + ' event');
    },
    onTimeout: function() {
      ok(false, 'Timed out');
    }
  };

  /**
   * Merge Objects
   *
   * @param {Object} original with priority
   * @param {Object} defaults for the obj
   * @return {Object} new object
   */
  var merge = function(original, defaults) {
      var obj = original || {};
      for (var key in defaults) {
          if (typeof obj[key] === 'undefined') {
              obj[key] = defaults[key];
          }
      }
      return obj;
  };

  /**
   * Utility function to create an event.
   *
   * @param name of the event
   * @return event object
   */
  var createEvent = function(name) {
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent(
      name,         // eventType
      true,         // canBubble
      true,         // cancelable
      window,       // view
      0,            // detail (mouse click count)
      0,            // screenX
      0,            // screenY
      0,            // clientX
      0,            // clientY
      false,        // ctrlKey
      false,        // altKey
      false,        // shiftKey
      false,        // metaKey
      0,            // button
      null          // relatedTarget
    );

    return event;
  };

})(window);
