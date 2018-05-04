(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.testsWebpack = mod.exports;
  }
})(this, function () {
  'use strict';

  var testsContext = require.context('./', true, /tests$/);
  testsContext.keys().forEach(testsContext);

  var componentContext = require.context('././', true, /\*\.js$/);
  componentContext.keys().forEach(componentContext);
});