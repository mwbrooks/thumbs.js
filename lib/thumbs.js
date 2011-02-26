(function(scope) {

    /**
     * Utility function to check event support
     *
     * Cannot inspect document.body because it may not be loaded yet
     *
     * @param  {String} name of the event
     * @return {Boolean}
     */
    var supports = function(name) {
        return (typeof document['on' + name] !== 'undefined');
    };

    /**
     * Do not use thumbs.js on touch-enabled devices
     */
    if (supports('touchstart')) return;

    /**
     * Backup original addEventListener
     */
    var addEventListener = window.Element.prototype.addEventListener;

    /**
     * Map touch events to mouse events
     */
    var events = {
        'touchstart': 'mousedown',
        'touchend':   'mouseup',
        'touchmove':  'mousemove'
    };

    /**
     * Override Element addEventListener
     *
     * Intercept the addEventListener calls in order to select best event type.
     *
     * @param type       {String}   is the event name
     * @param listener   {Function} is the event handler
     * @param useCapture {Boolean}  defines capture rule for event
    */
    window.Element.prototype.addEventListener = function(type, listener, useCapture) {
        // To add touch support, we wrap each touch event in the corresponding
        // mouse event. When the mouse event fires, we manually fire the expect
        // touch event.
        if (events[type]) {
            // Back up the desiredd touch event and callback function
            var original = {
                listener: listener,
                type: type
            };

            // Wrap callback in a function that manually fires the touch event
            listener = function(e) {
                var e = createTouchEvent(original.type, e);
                original.listener.call(self, e);
            };

            // Use corresponding mouse event
            type = events[type];
        }

        return addEventListener.call(this, type, listener, useCapture);
    };

    /**
     * Utility function to create a touch event.
     *
     * @param  name  {String} of the event
     * @return event {Object}
     */
    var createTouchEvent = function(name, e) {
        var event = document.createEvent('MouseEvents');

        event.initMouseEvent(
            name,
            e.cancelBubble,
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

        return event;
    };

})(window);
