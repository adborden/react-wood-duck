(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../Layout01.js', '../GlobalHeader.js', '../PageHeader.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../Layout01.js'), require('../GlobalHeader.js'), require('../PageHeader.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Layout01, global.GlobalHeader, global.PageHeader, global.enzyme, global.EnzymeSetup);
    global.Layout01_test = mod.exports;
  }
})(this, function (_react, _Layout, _GlobalHeader, _PageHeader, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

  var _PageHeader2 = _interopRequireDefault(_PageHeader);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Layout01', function () {
    var globalHeaderProps = {
      searchCallback: function searchCallback() {},
      addNewCallback: function addNewCallback() {},
      notificationsCallback: function notificationsCallback() {},
      logoutCallback: function logoutCallback() {}
    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Layout2.default, { globalHeaderProps: globalHeaderProps }));

    it('contains matching elements', function () {
      expect(wrapper.containsMatchingElement(_react2.default.createElement(_PageHeader2.default, null))).toEqual(true);
      expect(wrapper.containsMatchingElement(_react2.default.createElement(_GlobalHeader2.default, globalHeaderProps))).toEqual(true);
    });
  });
});