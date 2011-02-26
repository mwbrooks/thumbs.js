window.helper = (function(scope) {

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
    var createEvent = function(name, e) {
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

    return {
        /**
         * QUnit Module Environment
         */
        environment: {
            setup: function() {
                document.getElementById('qunit-fixture').innerHTML = '<a href="#" id="fixture"></a>';
            },
            teardown: function() {
                document.getElementById('qunit-fixture').innerHTML = '';
            }
        },

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
        listen: function(name, options) {
            QUnit.stop();
            expect(1);

            var TIMEOUT = 300;
            var options = merge(options, defaultOptions);
            var element = document.getElementById('fixture');

            element.addEventListener(name, function(e) {
                clearTimeout(timeoutId);
                options.onTrigger(e);
                QUnit.start();
            }, false);

            var timeoutId = setTimeout(function() {
                options.onTimeout();
                QUnit.start();
            }, TIMEOUT);

            return this;
        },

        /**
         * Trigger an event on the listener's element
         *
         * @param {String} name of event to trigger
         */
        trigger: function(name) {
            var e = createEvent(name);
            var element = document.getElementById('fixture');
            element.dispatchEvent(e);
            return this;
        }
    };

})(window);

/**
 * Bind each helper property to the global scope
 */
for (var key in helper) {
    if (helper.hasOwnProperty(key)) {
        window[key] = helper[key];
    }
}
