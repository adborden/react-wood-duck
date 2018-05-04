(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../GlobalHeaderAction', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../GlobalHeaderAction'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.GlobalHeaderAction, global.EnzymeSetup);
    global.GlobalHeaderAction_test = mod.exports;
  }
})(this, function (_react, _enzyme, _GlobalHeaderAction) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _GlobalHeaderAction2 = _interopRequireDefault(_GlobalHeaderAction);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('GlobalHeaderIcon', function () {
    var icon = _react2.default.createElement('i', { className: 'fa fa-user' });
    var ariaLabel = 'test label';

    it('renders null when no callback property is given', function () {
      var globalHeaderAction = (0, _enzyme.shallow)(_react2.default.createElement(_GlobalHeaderAction2.default, { icon: icon, ariaLabel: ariaLabel }));
      expect(globalHeaderAction.equals(null)).toBe(true);
    });

    describe('given callback property', function () {
      var callbackInstance = void 0;
      var globalHeaderAction = void 0;
      beforeEach(function () {
        callbackInstance = { callback: function callback() {} };
        spyOn(callbackInstance, 'callback');
        globalHeaderAction = (0, _enzyme.shallow)(_react2.default.createElement(_GlobalHeaderAction2.default, {
          icon: icon,
          ariaLabel: ariaLabel,
          callback: callbackInstance.callback
        }));
      });

      it('renders given icon element', function () {
        expect(globalHeaderAction.contains(icon)).toBe(true);
      });

      it('renders with given aria label', function () {
        expect(globalHeaderAction.findWhere(function (n) {
          return n.prop('ariaLabel') === 'test label';
        }).exists()).toBe(true);
      });

      it('invokes given callback on click', function () {
        globalHeaderAction.find('a').simulate('click');
        expect(callbackInstance.callback).toHaveBeenCalled();
      });
    });
  });
});