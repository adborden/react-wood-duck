(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../Table.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../Table.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Table, global.enzyme, global.EnzymeSetup);
    global.Table_test = mod.exports;
  }
})(this, function (_react, _Table, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _Table2 = _interopRequireDefault(_Table);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('TextArea', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Table2.default, null));

    it('has a className', function () {
      expect(wrapper.hasClass('table table-hover table-striped')).toBe(true);
    });

    it('verify the no of table rows ', function () {
      expect(wrapper.find('tr').length).toEqual(4);
    });

    it('verify the no of table header', function () {
      expect(wrapper.find('th').length).toEqual(7);
    });

    it('verify the no of table data', function () {
      expect(wrapper.find('td').length).toEqual(9);
    });
  });
});