(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['../../common/FieldUtils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('../../common/FieldUtils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.FieldUtils);
    global.FieldUtils_test = mod.exports;
  }
})(this, function (_FieldUtils) {
  'use strict';

  describe('FieldУtils', function () {
    describe('#santizeValue', function () {
      describe('When provide a string value', function () {
        it('returns sanitised result', function () {
          expect((0, _FieldUtils.sanitizeValue)('a1234a', '[0-9]')).toBe('1234');
        });
      });
      describe('When provides an empty value', function () {
        it('returns empty string', function () {
          expect((0, _FieldUtils.sanitizeValue)('', '[0-9]')).toBe('');
        });
      });
      describe('When provides a null', function () {
        it('returns empty string', function () {
          expect((0, _FieldUtils.sanitizeValue)(null, '[0-9]')).toBe('');
        });
      });
      describe('When provides a undefined', function () {
        it('returns empty string', function () {
          expect((0, _FieldUtils.sanitizeValue)(undefined, '[0-9]')).toBe('');
        });
      });
      describe('When provides regexp as null', function () {
        it('Throws error', function () {
          expect(function () {
            (0, _FieldUtils.sanitizeValue)('', null);
          }).toThrow(new Error('regex must not be null'));
        });
      });
      describe('When provides regexp as undefined', function () {
        it('Throws error', function () {
          expect(function () {
            (0, _FieldUtils.sanitizeValue)('', undefined);
          }).toThrow(new Error('regex must not be null'));
        });
      });
    });
  });
});