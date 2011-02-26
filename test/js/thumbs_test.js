window.addEventListener('load', function(){

    // touchstart

    module('touchstart', environment);

    test('should respond to touchstart', 1, function() {
        listen('touchstart').trigger('mousedown');
    });

    // touchend

    module('touchend', environment);

    test('should respond to touchend', 1, function() {
        listen('touchend').trigger('mouseup');
    });

    // touchmove

    module('touchmove', environment);

    test('should respond to touchmove', 1, function() {
        listen('touchmove').trigger('mousemove');
    });

});
