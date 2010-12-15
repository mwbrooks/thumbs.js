window.addEventListener('load', function(){

  // touchstart

  module('touchstart');

  test('should use touchstart when touchstart is supported', function() {
    listen('touchstart').trigger('touchstart');
  });

  // touchend

  module('touchend');

  test('should use touchend when touchend is supported', function() {
    listen('touchend').trigger('touchend');
  });

  // touchmove

  module('touchmove');

  test('should use touchmove when touchmove is supported', function() {
    listen('touchmove').trigger('touchmove');
  });

  // tap

  module('tap');

  test('should use tap when touch events are supported', function() {
    listen('tap').trigger('tap');
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
});
