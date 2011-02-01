window.addEventListener('load', function(){

  var mouse = receiverEventType();
  var touch = mouse;
  
  // mousedown

  module('mousedown');

  test('should use ' + mouse.down, function() {
    listen('mousedown').trigger(mouse.down);
  });

  // mouseup

  module('mouseup');

  test('should use ' + mouse.up, function() {
    listen('mouseup').trigger(mouse.up);
  });

  // mousemove

  module('mousemove');

  test('should use ' + mouse.move, function() {
    listen('mousemove').trigger(mouse.move);
  });

  // click

  module('click');

  test('should use ' + mouse.click, function() {
    listen('click').trigger(mouse.click);
  });

  // touchstart

  module('touchstart');

  test('should use ' + touch.start, function() {
    listen('touchstart').trigger(touch.start);
  });

  // touchend

  module('touchend');

  test('should use ' + touch.end, function() {
    listen('touchend').trigger(touch.end);
  });

  // touchmove

  module('touchmove');

  test('should use ' + touch.move, function() {
    listen('touchmove').trigger(touch.move);
  });

  // tap

  module('tap');

  test('should use ' + touch.tap, function() {
    listen('tap').trigger(touch.tap);
  });
  
  // test('should fire tap after sequence of touchstart => touchend', function() {
  //   listen('tap').trigger('touchstart').trigger('touchend');
  // });
  // 
  // test('should not fire tap on mousedown', function() {
  //   listen('tap', {
  //     onTrigger: function() { ok(false); },
  //     onTimeout: function() { ok(true, 'did not receive mousedown event'); }
  //   }).trigger('mousedown');
  // });
  // 
  // test('should not fire tap on mousemove', function() {
  //   listen('tap', {
  //     onTrigger: function() { ok(false); },
  //     onTimeout: function() { ok(true, 'did not receive mousemove event'); }
  //   }).trigger('mousemove');
  // });
  // 
  // test('should not fire tap on mouseup', function() {
  //   listen('tap', {
  //     onTrigger: function() { ok(false); },
  //     onTimeout: function() { ok(true, 'did not receive mouseup event'); }
  //   }).trigger('mouseup');
  // });
});
