window.addEventListener('load', function(){

  // mousedown

  module('mousedown');

  test('should use mousedown', function() {
    assert({ listener:'mousedown', receives:'mousedown' });
  });

  // mouseup

  module('mouseup');

  test('should use mouseup', function() {
    assert({ listener:'mouseup', receives:'mouseup' });
  });

  // mousemove

  module('mousemove');

  test('should use mousemove', function() {
    assert({ listener:'mousemove', receives:'mousemove' });
  });

  // click

  module('click');

  test('should use click', function() {
    assert({ listener:'click', receives:'click' });
  });

  // touchstart

  module('touchstart');

  test('should use touchstart when touchstart is supported', function() {
    assert({ listener:'touchstart', receives:'touchstart' });
  });

  test('should use mousedown when touchstart is unsupported', function() {
    assert({ listener:'touchstart', receives:'mousedown' });
  });

  // touchend

  module('touchend');

  test('should use touchend when touchend is supported', function() {
    assert({ listener:'touchend', receives:'touchend' });
  });

  test('should use mouseup when touchend is unsupported', function() {
    assert({ listener:'touchend', receives:'mouseup' });
  });

  // touchmove

  module('touchmove');

  test('should use touchmove when touchmove is supported', function() {
    assert({ listener:'touchmove', receives:'touchmove' });
  });

  test('should use mousemove when touchmove is unsupported', function() {
    assert({ listener:'touchmove', receives:'mousemove' });
  });

  // tap

  module('tap');

  test('should use tap when touch events are supported', function() {
    assert({ listener:'tap', receives:'tap' });
  });

  test('should use click when tap is unsupported', function() {
    assert({ listener:'tap', receives:'click' });
  });
  
  // tap requires touchstart + touchend - touchmove

});
