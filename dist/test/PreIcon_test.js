(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../PreIcon', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../PreIcon'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.PreIcon, global.EnzymeSetup);
    global.PreIcon_test = mod.exports;
  }
})(this, function (_react, _enzyme, _PreIcon) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _PreIcon2 = _interopRequireDefault(_PreIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('PreIcon', function () {
    it('renders nothing when icon property is not provided', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_PreIcon2.default, null)).children().length).toBe(0);
    });

    it('renders pre icon when valid icon property is provided', function () {
      var icon = 'fa-user';
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_PreIcon2.default, { icon: icon }));
      expect(wrapper.filterWhere(function (n) {
        return n.hasClass(icon);
      }).exists()).toBe(true);
    });
  });
});