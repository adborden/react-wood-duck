(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.FieldUtils = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var sanitizeValue = function sanitizeValue(string, allowRegex) {
    if (allowRegex == null) throw new Error('regex must not be null');
    var sanitizedStr = '';
    if (string) {
      var characterArray = string.split('');
      sanitizedStr = characterArray.filter(function (character) {
        return character.match(allowRegex);
      }).join('');
    }
    return sanitizedStr;
  };
  exports.sanitizeValue = sanitizeValue;
});