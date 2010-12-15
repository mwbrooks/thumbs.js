window.addEventListener('load', function(){

  // mousedown

  module('mousedown');

  test('should use mousedown', function() {
    listen('mousedown').trigger('mousedown');
  });

  // mouseup

  module('mouseup');

  test('should use mouseup', function() {
    listen('mouseup').trigger('mouseup');
  });

  // mousemove

  module('mousemove');

  test('should use mousemove', function() {
    listen('mousemove').trigger('mousemove');
  });

  // click

  module('click');

  test('should use click', function() {
    listen('click').trigger('click');
  });

  // touchstart

  module('touchstart');

  test('should use touchstart when touchstart is supported', function() {
    listen('touchstart').trigger('touchstart');
  });

  test('should use mousedown when touchstart is unsupported', function() {
    listen('touchstart').trigger('mousedown');
  });

  // touchend

  module('touchend');

  test('should use touchend when touchend is supported', function() {
    listen('touchend').trigger('touchend');
  });

  test('should use mouseup when touchend is unsupported', function() {
    listen('touchend').trigger('mouseup');
  });

  // touchmove

  module('touchmove');

  test('should use touchmove when touchmove is supported', function() {
    listen('touchmove').trigger('touchmove');
  });

  test('should use mousemove when touchmove is unsupported', function() {
    listen('touchmove').trigger('mousemove');
  });

  // tap

  module('tap');

  test('should use tap when touch events are supported', function() {
    listen('tap').trigger('tap');
  });

  test('should use click when tap is unsupported', function() {
    listen('tap').trigger('click');
  });

  test('should fire tap after sequence of touchstart => touchend', function() {
    listen('tap').trigger('touchstart').trigger('touchend');
  });
  
  test('should fire tap when touchmove is under the threshold', function() {
    ok(false);
  });
  
  test('should not fire tap when touchmove is over the threshold', function() {
    ok(false);
  });

  test('should not fire tap on touchstart', function() {
    listen('tap', {
      onTrigger: function() { ok(false); },
      onTimeout: function() { ok(true, 'did not receive touchstart event'); }
    }).trigger('touchstart');
  });

  test('should not fire tap on touchmove', function() {
    listen('tap', {
      onTrigger: function() { ok(false); },
      onTimeout: function() { ok(true, 'did not receive touchmove event'); }
    }).trigger('touchmove');
  });

  test('should not fire tap on touchup', function() {
    listen('tap', {
      onTrigger: function() { ok(false); },
      onTimeout: function() { ok(true, 'did not receive touchup event'); }
    }).trigger('touchup');
  });

  test('should not fire tap on mousedown', function() {
    listen('tap', {
      onTrigger: function() { ok(false); },
      onTimeout: function() { ok(true, 'did not receive mousedown event'); }
    }).trigger('mousedown');
  });

  test('should not fire tap on mousemove', function() {
    listen('tap', {
      onTrigger: function() { ok(false); },
      onTimeout: function() { ok(true, 'did not receive mousemove event'); }
    }).trigger('mousemove');
  });

  test('should not fire tap on mouseup', function() {
    listen('tap', {
      onTrigger: function() { ok(false); },
      onTimeout: function() { ok(true, 'did not receive mouseup event'); }
    }).trigger('mouseup');
  });
});
