(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../PreIcon', '../PostIcon', '../Link', '../NavLink', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../PreIcon'), require('../PostIcon'), require('../Link'), require('../NavLink'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.PreIcon, global.PostIcon, global.Link, global.NavLink, global.EnzymeSetup);
    global.NavLink_test = mod.exports;
  }
})(this, function (_react, _enzyme, _PreIcon, _PostIcon, _Link, _NavLink) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _PreIcon2 = _interopRequireDefault(_PreIcon);

  var _PostIcon2 = _interopRequireDefault(_PostIcon);

  var _Link2 = _interopRequireDefault(_Link);

  var _NavLink2 = _interopRequireDefault(_NavLink);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('NavLink', function () {
    var navLinkHref = 'test.html';
    var navLinkText = 'Nav Link Test';
    var navLinkClass = 'navlink';
    var preIconProp = 'fa fa-user';
    var postIconProp = 'fa icon-warning-sign';
    var indentationLevel = 2;

    var activeNavLinkClass = 'active-navlink';
    var inactiveNavLinkClass = 'inactive-navlink';
    var indentationClassName = 'indent-level' + indentationLevel;
    var clickHandler = function clickHandler() {};

    describe('basic', function () {
      var inactiveBasicNavLink = (0, _enzyme.shallow)(_react2.default.createElement(_NavLink2.default, {
        href: navLinkHref,
        text: navLinkText,
        indentationLevel: indentationLevel,
        clickHandler: clickHandler
      }));
      var inst = inactiveBasicNavLink.instance();

      it('has all the props', function () {
        expect(inst.props.text).toBe(navLinkText);
        expect(inst.props.href).toBe(navLinkHref);
        expect(inst.props.indentationLevel).toBe(indentationLevel);
      });

      it('is inactive by default', function () {
        expect(inst.props.active).toBe(false);
        expect(inactiveBasicNavLink.find('.' + inactiveNavLinkClass).exists()).toBe(true);
      });

      it('has li element', function () {
        var liElement = inactiveBasicNavLink.find('li');
        expect(liElement.hasClass(navLinkClass)).toBe(true);
      });

      it('has Link component', function () {
        expect(inactiveBasicNavLink.containsMatchingElement(_react2.default.createElement(_Link2.default, {
          text: navLinkText,
          href: navLinkHref,
          active: false,
          clickHandler: clickHandler
        }))).toBe(true);
      });

      it('has valid indentation style', function () {
        expect(inactiveBasicNavLink.find('.' + indentationClassName).exists()).toBe(true);
      });

      it('has pre icon component', function () {
        expect(inactiveBasicNavLink.containsMatchingElement(_react2.default.createElement(_PreIcon2.default, null))).toBe(true);
      });

      it('has post icon component', function () {
        expect(inactiveBasicNavLink.containsMatchingElement(_react2.default.createElement(_PostIcon2.default, null))).toBe(true);
      });
    });

    describe('with PreIcon', function () {
      var navLinkWithPreIcon = (0, _enzyme.shallow)(_react2.default.createElement(_NavLink2.default, {
        href: navLinkHref,
        text: navLinkText,
        preIcon: preIconProp,
        indentationLevel: indentationLevel,
        clickHandler: clickHandler
      }));

      it('renders valid pre icon component', function () {
        expect(navLinkWithPreIcon.containsMatchingElement(_react2.default.createElement(_PreIcon2.default, { icon: preIconProp }))).toBe(true);
      });
    });

    describe('with PostIcon', function () {
      var navLinkWithPostIcon = (0, _enzyme.shallow)(_react2.default.createElement(_NavLink2.default, {
        href: navLinkHref,
        text: navLinkText,
        postIcon: postIconProp,
        indentationLevel: indentationLevel,
        clickHandler: clickHandler
      }));

      it('renders valid post icon component', function () {
        expect(navLinkWithPostIcon.containsMatchingElement(_react2.default.createElement(_PostIcon2.default, { icon: postIconProp }))).toBe(true);
      });
    });

    describe('with child components', function () {
      var navLinkWithChildren = (0, _enzyme.shallow)(_react2.default.createElement(
        _NavLink2.default,
        { href: navLinkHref, text: navLinkText },
        _react2.default.createElement(
          'div',
          null,
          'Test Child'
        )
      ));

      it('has basic elements', function () {
        expect(navLinkWithChildren.find('li').exists()).toBeTruthy();
        expect(navLinkWithChildren.find(_Link2.default).exists()).toBe(true);
      });

      it('has given child components', function () {
        expect(navLinkWithChildren.contains(_react2.default.createElement(
          'div',
          null,
          'Test Child'
        ))).toBe(true);
      });
    });

    describe('with active property', function () {
      var activeNavLinkWithPreIcon = (0, _enzyme.shallow)(_react2.default.createElement(_NavLink2.default, {
        href: navLinkHref,
        text: navLinkText,
        preIcon: preIconProp,
        active: true
      }));

      it('has active style', function () {
        expect(activeNavLinkWithPreIcon.find('.' + activeNavLinkClass).exists()).toBe(true);
      });

      it('has Link component with active property', function () {
        expect(activeNavLinkWithPreIcon.containsMatchingElement(_react2.default.createElement(_Link2.default, { text: navLinkText, href: navLinkHref, active: true }))).toBe(true);
      });
    });
  });
});