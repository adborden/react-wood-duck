(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../../common/CheckboxField', './../EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../../common/CheckboxField'), require('./../EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.CheckboxField, global.EnzymeSetup);
    global.CheckboxField_test = mod.exports;
  }
})(this, function (_react, _enzyme, _CheckboxField) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _CheckboxField2 = _interopRequireDefault(_CheckboxField);

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

  describe('CheckboxField', function () {
    var onChange = void 0;
    var onBlur = void 0;
    var component = void 0;
    var props = {
      errors: [],
      id: 'myCheckboxFieldId',
      value: 'this-is-my-value',
      label: 'This is my label'
    };
    beforeEach(function () {
      onChange = jasmine.createSpy('onChange');
      onBlur = jasmine.createSpy('onBlur');
      props.onChange = onChange;
      props.onBlur = onBlur;
      component = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxField2.default, props));
    });

    it('passes ariaDescribedBy to the ErrorMessages', function () {
      expect(component.find('ErrorMessages').props().ariaDescribedBy).toEqual('myCheckboxFieldId');
    });

    it('passes errors to the ErrorMessages', function () {
      expect(component.find('ErrorMessages').props().errors).toEqual([]);
    });

    describe('with no flags set', function () {
      it('renders the id', function () {
        expect(component.find('input').props().id).toEqual('myCheckboxFieldId');
        expect(component.find('label[htmlFor="myCheckboxFieldId"]').exists()).toEqual(true);
      });

      it('renders the value', function () {
        expect(component.find('input').props().value).toEqual('this-is-my-value');
        expect(component.find('label').text()).toEqual('This is my label');
      });

      it('renders with NO checked prop', function () {
        expect(component.find('input').props().checked).toEqual(undefined);
      });

      it('renders with NO disable prop', function () {
        expect(component.find('input').props().disabled).toEqual(undefined);
      });

      it('renders with NO required prop', function () {
        expect(component.find('label.required').exists()).toEqual(false);
        expect(component.find('input').prop('required')).toEqual(undefined);
      });
    });

    it('calls onChange when a change event occurs on checkbox field', function () {
      var selectElement = component.find('input');
      selectElement.simulate('change');
      expect(onChange).toHaveBeenCalled();
    });

    it('calls onBlur when a blur event occurs on checkbox field', function () {
      var selectElement = component.find('input');
      selectElement.simulate('blur');
      expect(onBlur).toHaveBeenCalled();
    });

    describe('when flag props are set', function () {
      it('renders with required prop', function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxField2.default, _extends({}, props, { required: true })));
        expect(component.find('label.required').exists()).toEqual(true);
        expect(component.find('input').prop('required')).toEqual(true);
      });

      it('renders with disable prop', function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxField2.default, _extends({}, props, { disabled: true })));
        expect(component.find('input').props().disabled).toEqual(true);
      });

      it('renders with checked prop', function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxField2.default, _extends({}, props, { checked: true })));
        expect(component.find('input').props().checked).toEqual(true);
      });
    });
  });
});