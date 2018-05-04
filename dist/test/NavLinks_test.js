(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../NavLink', '../NavLinks', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../NavLink'), require('../NavLinks'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.NavLink, global.NavLinks, global.EnzymeSetup);
    global.NavLinks_test = mod.exports;
  }
})(this, function (_react, _enzyme, _NavLink, _NavLinks) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _NavLink2 = _interopRequireDefault(_NavLink);

  var _NavLinks2 = _interopRequireDefault(_NavLinks);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('NavLinks', function () {
    var clickHandler = function clickHandler() {};
    var simpleNavLinks = [_react2.default.createElement(_NavLink2.default, {
      text: 'Tommy Cambell',
      href: '#tm',
      preIcon: 'fa fa-user',
      handleClick: clickHandler,
      active: true,
      key: 1
    }), _react2.default.createElement(_NavLink2.default, {
      text: 'Aubrey Cambell',
      href: '#au',
      preIcon: 'fa fa-user',
      handleClick: clickHandler,
      key: 2
    })];
    var nestedNavLinks = [_react2.default.createElement(_NavLink2.default, { text: 'Screener Summary', href: '#summary', key: 1 }), _react2.default.createElement(
      _NavLink2.default,
      { text: 'People & Roles', href: '#ppl', key: 2 },
      _react2.default.createElement(
        _NavLinks2.default,
        { nested: true },
        _react2.default.createElement(_NavLink2.default, {
          text: 'Tommy Cambell',
          href: '#tom',
          preIcon: 'fa fa-user',
          postIcon: 'fa fa-exclamation-triangle c-red',
          indentationLevel: 1,
          key: 1
        }),
        _react2.default.createElement(_NavLink2.default, {
          text: 'Aubrey Cambell',
          href: '#aub',
          preIcon: 'fa fa-user',
          indentationLevel: 1,
          key: 2
        }),
        _react2.default.createElement(_NavLink2.default, {
          text: 'Chris Cambell',
          href: '#chr',
          preIcon: 'fa fa-user',
          indentationLevel: 1,
          key: 3
        })
      )
    )];

    describe('given empty navigation links', function () {
      var nullNavLinksComponent = (0, _enzyme.shallow)(_react2.default.createElement(_NavLinks2.default, null));

      it('renders No navigation links', function () {
        expect(nullNavLinksComponent.html()).toBe(null);
        expect(nullNavLinksComponent.children().length).toBe(0);
      });
    });

    describe('given simple navigation links', function () {
      var simpleNavLinksComponent = (0, _enzyme.shallow)(_react2.default.createElement(
        _NavLinks2.default,
        null,
        simpleNavLinks
      ));
      var simpleNavLinksUlElement = simpleNavLinksComponent.find('ul');
      var simpleNavLinksNavElement = simpleNavLinksComponent.find('.row');

      it('renders nav element', function () {
        expect(simpleNavLinksNavElement.props().className).toBe('row');
      });

      it('renders with accessibility attributes', function () {
        expect(simpleNavLinksNavElement.prop('aria-label')).toBe('Main Content Navigation Menu');
      });

      it('renders ul tag', function () {
        expect(simpleNavLinksUlElement.props().className).toBe('nav nav-stacked');
      });

      it('renders simple navigation links', function () {
        expect(simpleNavLinksUlElement.props().children).toEqual(simpleNavLinks);
      });
    });

    describe('given nested navigation links', function () {
      var nestedNavLinksComponent = (0, _enzyme.shallow)(_react2.default.createElement(
        _NavLinks2.default,
        null,
        nestedNavLinks
      ));

      it('renders only one nav element', function () {
        expect(nestedNavLinksComponent.filter('nav').length).toBe(1);
      });

      it('renders nested navigation links', function () {
        expect(nestedNavLinksComponent.find('ul').props().children).toEqual(nestedNavLinks);
      });
    });
  });
});