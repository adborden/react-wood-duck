(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../../common/FormField', './../EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../../common/FormField'), require('./../EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.FormField, global.EnzymeSetup);
    global.FormField_test = mod.exports;
  }
})(this, function (_react, _enzyme, _FormField) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _FormField2 = _interopRequireDefault(_FormField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  describe('FormField', function () {
    var component = void 0;

    describe('when only required props are passed', function () {
      it('renders a label with a div wrapper', function () {
        var props = {
          children: _react2.default.createElement(
            'div',
            null,
            'Italy'
          ),
          label: 'L1'
        };
        component = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, props));
        expect(component.html()).toEqual('<div class=""><label class="">L1</label><div>Italy</div><div></div></div>');
      });
    });

    describe('when label and className props are passed', function () {
      var props = {
        children: _react2.default.createElement('br', null),
        label: 'Do not judge a component by its label',
        labelClassName: 'working-class object-oriented-class',
        gridClassName: 'giggidy'
      };

      it('renders the label inside the grid wrapper with the classes', function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, props));
        expect(component.find('div.giggidy').find('label').props().className).toEqual('working-class object-oriented-class');
      });
    });

    describe('when children are passed', function () {
      var props = {
        children: _react2.default.createElement(
          'h1',
          null,
          'Child'
        ),
        label: 'Do not judge a component by its label',
        labelClassName: 'working-class object-oriented-class',
        gridClassName: 'giggidy'
      };

      it('renders the children between the label and ErrorMessages', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, props)).first('div');
        expect(wrapper.children().length).toEqual(3);
        expect(wrapper.childAt(0).type()).toEqual('label');
        expect(wrapper.childAt(1).html()).toEqual('<h1>Child</h1>');
        expect(wrapper.find('ErrorMessages').exists()).toEqual(true);
      });
    });

    describe('when errors are passed', function () {
      var props = {
        children: _react2.default.createElement('br', null),
        label: 'Do not judge a component by its label',
        gridClassName: 'working-class object-oriented-class',
        labelClassName: 'trouble-maker',
        errors: ['Please choose wisely.', 'Stick to the plan!']
      };

      it('renders label and its wrapper with error classes', function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, props));
        expect(component.find('label.trouble-maker.input-error-label').parent().props().className).toEqual('working-class object-oriented-class input-error');
      });

      it('renders ErrorMessages and passes it errors', function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, props));
        expect(component.find('ErrorMessages').props().errors).toEqual(['Please choose wisely.', 'Stick to the plan!']);
      });

      describe('when required', function () {
        beforeEach(function () {
          component = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, _extends({}, props, { required: true })));
        });

        it('renders label as required', function () {
          expect(component.find('label').props().className).toContain('required');
        });
      });
    });

    describe('when no errors passed', function () {
      var props = {
        children: _react2.default.createElement('br', null),
        label: 'Do not judge a component by its label',
        gridClassName: 'working-class object-oriented-class',
        labelClassName: 'trouble-maker'
      };

      beforeEach(function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, _extends({}, props, { required: true })));
      });

      it('does not display any errors', function () {
        expect(component.find('.input-error').length).toEqual(0);
      });

      it('does not render the label as if it has an error', function () {
        expect(component.find('.input-error-label').length).toEqual(0);
      });

      it('renders ErrorMessages but with no errors', function () {
        expect(component.find('ErrorMessages').exists()).toEqual(true);
        expect(component.find('ErrorMessages').props().errors).toEqual(undefined);
      });

      describe('when is required', function () {
        it('renders required class', function () {
          expect(component.find('label').props().className).toEqual('trouble-maker required');
        });
      });
    });
  });
});