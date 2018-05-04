(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../NavLink.js', '../NavLinks.js', '../Layout03.js', '../GlobalHeader.js', '../PageHeader.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../NavLink.js'), require('../NavLinks.js'), require('../Layout03.js'), require('../GlobalHeader.js'), require('../PageHeader.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.NavLink, global.NavLinks, global.Layout03, global.GlobalHeader, global.PageHeader, global.enzyme, global.EnzymeSetup);
    global.Layout03_test = mod.exports;
  }
})(this, function (_react, _NavLink, _NavLinks, _Layout, _GlobalHeader, _PageHeader, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _NavLink2 = _interopRequireDefault(_NavLink);

  var _NavLinks2 = _interopRequireDefault(_NavLinks);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

  var _PageHeader2 = _interopRequireDefault(_PageHeader);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Layout03', function () {
    var clickHandler = function clickHandler() {};
    var globalHeaderProps = {
      searchCallback: function searchCallback() {},
      addNewCallback: function addNewCallback() {},
      notificationsCallback: function notificationsCallback() {},
      logoutCallback: function logoutCallback() {}
    };
    var sideBarContent = _react2.default.createElement(
      _NavLinks2.default,
      null,
      _react2.default.createElement(_NavLink2.default, {
        text: 'Tommy Cambell',
        href: '#tm',
        preIcon: 'fa fa-user',
        handleClick: clickHandler,
        active: true,
        key: 1
      }),
      _react2.default.createElement(_NavLink2.default, {
        text: 'Aubrey Cambell',
        href: '#au',
        preIcon: 'fa fa-user',
        handleClick: clickHandler,
        key: 2
      })
    );
    var sideBarWidth = 4;
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Layout2.default, {
      globalHeaderProps: globalHeaderProps,
      sideBarContent: sideBarContent,
      sideBarColumnWidth: sideBarWidth
    }));

    it('verify the no of "div" tags ', function () {
      expect(wrapper.find('div').length).toEqual(6);
    });

    it('contains matching elements', function () {
      expect(wrapper.containsMatchingElement(_react2.default.createElement(_PageHeader2.default, null))).toEqual(true);
      expect(wrapper.containsMatchingElement(_react2.default.createElement(_GlobalHeader2.default, globalHeaderProps))).toEqual(true);
    });
  });
});