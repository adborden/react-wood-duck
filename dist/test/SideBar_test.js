(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../NavLink', '../NavLinks', '../SideBar', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../NavLink'), require('../NavLinks'), require('../SideBar'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.NavLink, global.NavLinks, global.SideBar, global.EnzymeSetup);
    global.SideBar_test = mod.exports;
  }
})(this, function (_react, _enzyme, _NavLink, _NavLinks, _SideBar) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _NavLink2 = _interopRequireDefault(_NavLink);

  var _NavLinks2 = _interopRequireDefault(_NavLinks);

  var _SideBar2 = _interopRequireDefault(_SideBar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Side Bar', function () {
    var navLinks = _react2.default.createElement(
      _NavLinks2.default,
      null,
      _react2.default.createElement(_NavLink2.default, { text: 'Screener Summary', href: '#screenerSummary' }),
      _react2.default.createElement(_NavLink2.default, { text: 'Allegations & Disposition', href: '#allegations' }),
      _react2.default.createElement(_NavLink2.default, { text: 'History of Involvement', href: '#history' })
    );
    describe('given NavLinks as side bar content', function () {
      var sideBarWithNavigationLinksWrapper = null;
      beforeEach(function () {
        sideBarWithNavigationLinksWrapper = (0, _enzyme.shallow)(_react2.default.createElement(
          _SideBar2.default,
          null,
          navLinks
        ));
      });

      it('renders side bar', function () {
        expect(sideBarWithNavigationLinksWrapper.find('.side-bar').length).toBe(1);
      });

      it('renders side bar with valid accessibility attributes', function () {
        expect(sideBarWithNavigationLinksWrapper.find({ 'aria-label': 'Side Bar' }).length).toBe(1);
      });

      it('renders side bar with NavLinks component', function () {
        expect(sideBarWithNavigationLinksWrapper.find(_NavLinks2.default).length).toBe(1);
      });
    });
  });
});