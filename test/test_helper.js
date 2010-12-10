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
    // Fixture is predefined in the markup
    var element = document.getElementById('button');

    // @TODO Remove the event listener
    element.addEventListener(options['listener'], function(event) {
      ok(true, 'received ' + options['receives'] + ' event');
      QUnit.start();
    }, false);
    
    var eventType = options['receives'];
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

    expect(1);
    QUnit.stop(300);
    element.dispatchEvent(event);
  };
  
})(window);
