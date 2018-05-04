(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../Link', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../Link'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Link, global.EnzymeSetup);
    global.Link_test = mod.exports;
  }
})(this, function (_react, _enzyme, _Link) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _Link2 = _interopRequireDefault(_Link);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Link', function () {
    var href = 'test.html';
    var text = 'Nav Link Test';

    describe('basic', function () {
      var link = (0, _enzyme.shallow)(_react2.default.createElement(_Link2.default, { href: href, text: text, onClick: function onClick() {} }));

      it('is inactive by default', function () {
        var inst = link.instance();
        expect(inst.props.active).toBe(false);
      });

      it('renders anchor element', function () {
        var anchorElement = link.find('a');
        expect(anchorElement.text()).toBe(text);
        expect(anchorElement.props().href).toEqual(href);
        expect(anchorElement.props().className).toBe('link');
      });
    });

    describe('active', function () {
      var inactiveLink = (0, _enzyme.shallow)(_react2.default.createElement(_Link2.default, { href: href, text: text, active: true }));

      it('has active style', function () {
        expect(inactiveLink.find('.active').exists()).toBe(true);
      });
    });

    describe('with handleClick callback', function () {
      var clickHandlerInstance = void 0;
      var linkWithClickHandler = void 0;
      beforeEach(function () {
        clickHandlerInstance = { clickHandler: function clickHandler() {} };
        spyOn(clickHandlerInstance, 'clickHandler');
        linkWithClickHandler = (0, _enzyme.shallow)(_react2.default.createElement(_Link2.default, {
          href: href,
          text: text,
          clickHandler: clickHandlerInstance.clickHandler
        }));
      });

      it('invokes callback on click', function () {
        linkWithClickHandler.find('a').simulate('click');
        expect(clickHandlerInstance.clickHandler).toHaveBeenCalled();
      });
    });
  });
});