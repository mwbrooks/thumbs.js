Thumbs
======

> Small, transparent, and mobile-minded; Thumbs will use the right touch/mouse event.

Description
-----------

Include `thumbs.js` in your application and, like magic:

- Touch events will work on the desktop.
- Mouse events become touch events on mobile.

Oh, and a `tap` event exists.

Why use it?
-----------

Touch events are a common pain-point in mobile Web application development.

Touch events are fast.

Mouse events are slow.

Touch events do not work on the desktop.

You need the desktop to test and debug.

Thumbs ensures that the best event is used, so your application responds on all browsers.

Supports
--------

  - Desktop Webkit (Safari / Chrome)
  - iOS
  - Android

Installation
------------

Run

    make

Copy one of the following to your application

    build/thumbs.js
    build/thumbs.min.js

Usage
-----

    <!-- include before all other javascript -->
    <script type="text/javascript" src="thumbs.js"></script>
    
    // ... elsewhere ...
    
    element.addEventListener('tap',        callback);   // 'click'     on desktop
    element.addEventListener('touchstart', callback);   // 'mousedown' on desktop
    element.addEventListener('touchend',   callback);   // 'mouseup'   on desktop
    element.addEventListener('touchmove',  callback);   // 'mousemove' on desktop
    
    element.addEventListener('click',     callback);    // 'tap'        on touch-device
    element.addEventListener('mousedown', callback);    // 'touchstart' on touch-device
    element.addEventListener('mouseup',   callback);    // 'touchend'   on touch-device
    element.addEventListener('mousemove', callback);    // 'touchmove'  on touch-device

Want to contribute?
-------------------

[Issue Tracker](https://github.com/mwbrooks/thumbs.js/issues)

[Roadmap](https://github.com/mwbrooks/thumbs.js/wiki)