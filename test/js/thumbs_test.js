(function() {

    // mousedown

    module('mousedown', environment);

    test('should respond to mousedown', 1, function() {
        listen('mousedown').trigger('mousedown');
    });

    test('should respond to onmousedown (attribute)', 1, function() {
        on('mousedown').trigger('mousedown');
    });

    test('should respond to onmousedown (property)', 1, function() {
        onProperty('mousedown').invoke('mousedown');
    });

    // mouseup

    module('mouseup', environment);

    test('should respond to mouseup', 1, function() {
        listen('mouseup').trigger('mouseup');
    });

    test('should respond to onmouseup (attribute)', 1, function() {
        on('mouseup').trigger('mouseup');
    });

    test('should respond to onmouseup (property)', 1, function() {
        onProperty('mouseup').invoke('mouseup');
    });

    // mousemove

    module('mousemove', environment);

    test('should respond to mousemove', 1, function() {
        listen('mousemove').trigger('mousemove');
    });

    test('should respond to onmousemove (attribute)', 1, function() {
        on('mousemove').trigger('mousemove');
    });

    test('should respond to onmousemove (property)', 1, function() {
        onProperty('mousemove').invoke('mousemove');
    });

    // touchstart

    module('touchstart', environment);

    test('should respond to touchstart', 1, function() {
        listen('touchstart').trigger('mousedown');
    });

    test('should respond to ontouchstart (attribute)', 1, function() {
        on('touchstart').trigger('touchstart');
    });

    test('should respond to ontouchstart (property)', 1, function() {
        onProperty('touchstart').invoke('touchstart');
    });

    // touchend

    module('touchend', environment);

    test('should respond to touchend', 1, function() {
        listen('touchend').trigger('mouseup');
    });

    test('should respond to ontouchend (attribute)', 1, function() {
        on('touchend').trigger('touchend');
    });

    test('should respond to ontouchend (property)', 1, function() {
        onProperty('touchend').invoke('touchend');
    });

    // touchmove

    module('touchmove', environment);

    test('should respond to touchmove', 1, function() {
        listen('touchmove').trigger('mousemove');
    });

    test('should respond to ontouchmove (attribute)', 1, function() {
        on('touchmove').trigger('touchmove');
    });

    test('should respond to ontouchmove (property)', 1, function() {
        onProperty('touchmove').invoke('touchmove');
    });

})();
