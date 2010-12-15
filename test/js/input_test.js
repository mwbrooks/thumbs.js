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

  test('should use mousedown when touchstart is unsupported', function() {
    listen('touchstart').trigger('mousedown');
  });

  // touchend

  module('touchend');

  test('should use mouseup when touchend is unsupported', function() {
    listen('touchend').trigger('mouseup');
  });

  // touchmove

  module('touchmove');

  test('should use mousemove when touchmove is unsupported', function() {
    listen('touchmove').trigger('mousemove');
  });

  // tap

  module('tap');

  test('should use click when tap is unsupported', function() {
    listen('tap').trigger('click');
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
