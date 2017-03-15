(function() {
  'use strict';
  if (
    typeof require === 'function' &&
    typeof exports === 'object' &&
    typeof module === 'object'
  ) {
    // NodeJS
    module.exports = chaiTruthy;
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(function() {
      return chaiTruthy;
    });
  } else {
    // Other environment (usually <script> tag): plug in to global chai instance directly.
    chai.use(chaiTruthy);
  }

  function chaiTruthy(chai, utils) {
    utils.addMethod(chai.Assertion.prototype, 'truthy', function() {
      var obj = utils.flag(this, 'object');
      new chai.Assertion(obj).to.be.ok;
    });

    utils.addMethod(chai.Assertion.prototype, 'falsy', function() {
      var obj = utils.flag(this, 'object');
      new chai.Assertion(obj).to.be.not.ok;
    });
  }
})();
