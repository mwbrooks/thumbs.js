window.addEventListener('load', function(){

    // mousedown

    module('mousedown', environment);

    test('should respond to mousedown', 1, function() {
        listen('mousedown').trigger('mousedown');
    });

    // mouseup

    module('mouseup', environment);

    test('should respond to mouseup', 1, function() {
        listen('mouseup').trigger('mouseup');
    });

    // mousemove

    module('mousemove', environment);

    test('should respond to mousemove', 1, function() {
        listen('mousemove').trigger('mousemove');
    });

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
