(function() {

    // mousedown

    module('mousedown', environment);

    test('should respond to mousedown', 1, function() {
        listen('mousedown').trigger('mousedown');
    });

    test('should respond to onmousedown (attribute)', 1, function() {
        on('mousedown').trigger('mousedown');
    });

    // mouseup

    module('mouseup', environment);

    test('should respond to mouseup', 1, function() {
        listen('mouseup').trigger('mouseup');
    });

    test('should respond to onmouseup (attribute)', 1, function() {
        on('mouseup').trigger('mouseup');
    });

    // mousemove

    module('mousemove', environment);

    test('should respond to mousemove', 1, function() {
        listen('mousemove').trigger('mousemove');
    });

    test('should respond to onmousemove (attribute)', 1, function() {
        on('mousemove').trigger('mousemove');
    });

    // touchstart

    module('touchstart', environment);

    test('should respond to touchstart', 1, function() {
        listen('touchstart').trigger('mousedown');
    });

    test('should respond to ontouchstart (attribute)', 1, function() {
        on('touchstart').trigger('touchstart');
    });

    // touchend

    module('touchend', environment);

    test('should respond to touchend', 1, function() {
        listen('touchend').trigger('mouseup');
    });

    test('should respond to ontouchend (attribute)', 1, function() {
        on('touchend').trigger('touchend');
    });

    // touchmove

    module('touchmove', environment);

    test('should respond to touchmove', 1, function() {
        listen('touchmove').trigger('mousemove');
    });

    test('should respond to ontouchmove (attribute)', 1, function() {
        on('touchmove').trigger('touchmove');
    });

})();
