(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../PostIcon', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../PostIcon'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.PostIcon, global.EnzymeSetup);
    global.PostIcon_test = mod.exports;
  }
})(this, function (_react, _enzyme, _PostIcon) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _PostIcon2 = _interopRequireDefault(_PostIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('PostIcon', function () {
    it('renders nothing when icon property is not provided', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_PostIcon2.default, null)).children().length).toBe(0);
    });

    it('renders post icon when valid icon property is provided', function () {
      var icon = 'fa-warning';
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_PostIcon2.default, { icon: icon }));
      expect(wrapper.filterWhere(function (n) {
        return n.hasClass(icon);
      }).exists()).toBe(true);
    });
  });
});