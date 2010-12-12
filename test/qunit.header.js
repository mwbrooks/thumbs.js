(function(scope) {

  var QUnit = {
    done: window.QUnit.done
  };

  var id = function(name) {
    return document.getElementById(name);
  };

  //
  // Intercept QUnit.done to duplicate summary at the top of the page
  //
  window.QUnit.done = function(failures, total) {
    var $tests   = id('qunit-tests');
    var $results = id('qunit-testresult');

    if ($tests && $results) {
      var $resultsTop = $results.cloneNode(true);
      $resultsTop.id += '-top';

      $tests.parentNode.insertBefore($resultsTop, $tests.previousSibling);
    }

    return QUnit.done(failures, total);
  };

})(window);
