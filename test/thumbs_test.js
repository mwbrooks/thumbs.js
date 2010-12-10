window.addEventListener('load', function(){
///
module('touchstart');

test('should use touchstart when touchstart is supported', function() {
  ok(false, 'not implemented');
  // assert({ listener:'touchstart', receives:'touchstart' });
});

test('should use mousedown when touchstart is unsupported', function() {
  ok(false, 'not implemented');
  // assert({ listener:'touchstart', receives:'mousedown' });
});

module('touchend');

test('should use touchend when touchend is supported', function() {
  ok(false, 'not implemented');
  // assert({ listener:'touchend', receives:'touchend' });
});

test('should use mouseup when touchend is unsupported', function() {
  ok(false, 'not implemented');
  // assert({ listener:'touchend', receives:'mouseup' });
});

module('touchmove');

test('should use touchmove when touchmove is supported', function() {
  ok(false, 'not implemented');
  // assert({ listener:'touchmove', receives:'touchmove' });
});

test('should use mousemove when touchmove is unsupported', function() {
  ok(false, 'not implemented');
  // assert({ listener:'touchmove', receives:'mousemove' });
});

module('tap');

test('should use tap when touch events are supported', function() {
  ok(false, 'not implemented');
  // assert({ listener:'tap', receives:'tap' });
});

test('should use click when touch events are unsupported', function() {
  ok(false, 'not implemented');
  // assert({ listener:'tap', receives:'click' });
});
///
});
