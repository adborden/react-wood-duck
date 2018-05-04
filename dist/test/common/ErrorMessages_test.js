(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../../common/ErrorMessages', './../EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../../common/ErrorMessages'), require('./../EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ErrorMessages, global.EnzymeSetup);
    global.ErrorMessages_test = mod.exports;
  }
})(this, function (_react, _enzyme, _ErrorMessages) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _ErrorMessages2 = _interopRequireDefault(_ErrorMessages);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('ErrorMessages', function () {
    var component = void 0;

    describe('when no errors are passed', function () {
      beforeEach(function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_ErrorMessages2.default, { id: 'myInputFieldId' }));
      });

      it('renders the div wrapper', function () {
        expect(component.find('div').exists()).toEqual(true);
      });

      it('does not render error messages', function () {
        expect(component.find('.input-error-message').exists()).toEqual(false);
      });
    });

    describe('when errors is an empty array', function () {
      var props = { id: 'myInputFieldId', errors: [] };

      it('does not render error messages', function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_ErrorMessages2.default, props));
        expect(component.find('.input-error-message').exists()).toEqual(false);
      });
    });

    describe('when there are errors', function () {
      var errors = ['You have failed this city', 'Stick to the plan!'];
      describe('when ariaDescribedBy is passed', function () {
        beforeEach(function () {
          var props = { ariaDescribedBy: 'myInputFieldId', errors: errors };
          component = (0, _enzyme.shallow)(_react2.default.createElement(_ErrorMessages2.default, props));
        });

        it('adds an aria-describedby prop', function () {
          expect(component.find(".input-error-message[aria-describedby='myInputFieldId']").length).toEqual(2);
        });

        it('adds a role prop', function () {
          expect(component.find(".input-error-message[role='alert']").length).toEqual(2);
        });

        it('displays error messages', function () {
          expect(component.find('.input-error-message').length).toEqual(2);
          expect(component.find('.input-error-message').first().text()).toEqual('You have failed this city');
          expect(component.find('.input-error-message').last().text()).toEqual('Stick to the plan!');
        });
      });

      describe('when ariaDescribedBy is not passed', function () {
        beforeEach(function () {
          component = (0, _enzyme.shallow)(_react2.default.createElement(_ErrorMessages2.default, { errors: errors }));
        });

        it('does not add an aria-describedby prop', function () {
          expect(component.first('.input-error-message').html()).not.toContain('aria-describedby');
        });

        it('adds a role prop', function () {
          expect(component.find(".input-error-message[role='alert']").length).toEqual(2);
        });

        it('displays error messages', function () {
          expect(component.find('.input-error-message').length).toEqual(2);
          expect(component.find('.input-error-message').first().text()).toEqual('You have failed this city');
          expect(component.find('.input-error-message').last().text()).toEqual('Stick to the plan!');
        });
      });
    });
  });
});