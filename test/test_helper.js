(function(scope) {

  /**
   * Convience function for event mouse event assertion.
   *
   * The function will add an event listener to the button fixture and
   * dispatch an event on the button fixture. You define the type of event
   * listener and dispatcher.
   *
   * A QUnit assertion will fire if the event is received.
   *
   * @param options JSON object that defines the events to dispatch and listen for.
   *                Example: { listener: 'touchstart', receives: 'touchstart' }
   *                Example: { listener: 'touchstart', receives: 'mousedown' }
   */
  scope.assert = function(options) {
    var element  = createButton();
    var event    = createEvent(options['receives']);
    var callback = {
      onTrigger: function() {
        ok(true, 'received ' + options['receives'] + ' event');
      },
      onTimeout: function() {
        ok(false, 'did not receive ' + options['receives'] + ' event before the time out');
      }
    };

    element.addEventListener(options['listener'], function(event) {
      (options['onTrigger']) ? options.onTrigger() : callback.onTrigger();
      clearTimeout(timeoutId);
      QUnit.start();
    }, false);
    

    expect(1);
    QUnit.stop();

    var timeoutId = setTimeout(function() {
      (options['onTimeout']) ? options.onTimeout() : callback.onTimeout();
      QUnit.start();
    }, 300);

    element.dispatchEvent(event);
  };

  /**
   * Utility functon to create a button.
   *
   * Destroys an existing button and recreates it.
   * This ensures that all event listeners are removed.
   */
  var createButton = function() {
    var element = document.getElementById('button');

    if (element) {
      element.parentNode.removeChild(element);
    }

    element = document.createElement('a');
    element.setAttribute('id', 'button');
    element.setAttribute('href', '#');

    document.getElementById('qunit-fixture').appendChild(element);

    return element;
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

 var event     = document.createEvent('MouseEvents');
    event.initMouseEvent(
      eventType,    // eventType
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


})(window);
