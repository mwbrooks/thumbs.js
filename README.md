thumbs.js
=========

> Add touch support to your browser.

About
-----

Small, transparent, and syntax-less library that adds touch support to your browser.

- Handy for desktop debugging
- Add touch to touch-less devices
- Does nothing on touch-enabled devices
- [PhoneGap](http://phonegap.com) and mobile web friendly

More detail and a demo are on the [thumbs.js homepage](http://mwbrooks.github.com/thumbs.js/).

Browser Support
---------------

- FireFox Desktop
- Opera Desktop
- Webkit Desktop
- Webkit Mobile

Usage
-----

    <!-- include before all javascript -->
    <script type="text/javascript" src="thumbs.js"></script>

    // later on...

    element.addEventListener('touchstart', callback, false);
    element.addEventListener('touchend',   callback, false);
    element.addEventListener('touchmove',  callback, false);

    // jQuery or zepto.js
    $(element).bind('touchstart', callback);

    // xui
    $(element).on('touchstart', callback);

Building from source
--------------------

Run:

    make

Generates:

    build/thumbs.x.x.js
    build/thumbs.x.x.min.js

Running the tests
-----------------

Open in a browser:

    test/index.html

Running a simple example
------------------------

Open in a browser:

    example/index.html

Want to contribute?
-------------------

### Report or fix an issue

We use [GitHub Issues](https://github.com/mwbrooks/thumbs.js/issues)

By the way, you rock! Thanks for helping us improve thumbs.js.

### Pull Requests

Pull requests are welcome!

We appreciate the use of topic branches.

    git checkout -b issue_23

    # code

    git commit -m "Issue 23: Fix a bad bug."

    git push origin issue_23

    # send pull request from branch issue_23 to mwbrooks:master
