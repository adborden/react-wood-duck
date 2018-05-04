(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../../common/InputField', './../EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../../common/InputField'), require('./../EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.InputField, global.EnzymeSetup);
    global.InputField_test = mod.exports;
  }
})(this, function (_react, _enzyme, _InputField) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _InputField2 = _interopRequireDefault(_InputField);

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

  describe('InputField', function () {
    var component = void 0;
    var formField = void 0;
    var onChange = void 0;
    var onBlur = void 0;

    var props = {
      disabled: false,
      errors: [],
      gridClassName: 'myWrapperTest',
      id: 'myInputFieldId',
      label: 'this is my label',
      labelClassName: 'myLabelTest',
      maxLength: '125',
      placeholder: 'This is some placeholder text...',
      required: false,
      value: 'this is my field value'
    };

    beforeEach(function () {
      onChange = jasmine.createSpy('onChange');
      onBlur = jasmine.createSpy('onBlur');
    });

    describe('basic functionality', function () {
      beforeEach(function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_InputField2.default, _extends({}, props, { onChange: onChange, onBlur: onBlur })));
        formField = component.find('FormField');
      });

      it('passes props to the FormField', function () {
        expect(formField.props().labelClassName).toEqual('myLabelTest');
        expect(formField.props().gridClassName).toEqual('myWrapperTest');
        expect(formField.props().htmlFor).toEqual('myInputFieldId');
        expect(formField.props().label).toEqual('this is my label');
        expect(formField.props().errors).toEqual([]);
        expect(formField.props().required).toEqual(false);
        expect(formField.childAt(0).getElement().type).toEqual('input');
        expect(formField.props().disabled).toEqual(false);
      });

      it('renders the input placeholder', function () {
        var inputElement = component.find('input');
        expect(inputElement.props().placeholder).toEqual('This is some placeholder text...');
      });

      it('renders the input value', function () {
        var inputElement = component.find('input');
        expect(inputElement.props().value).toEqual('this is my field value');
      });

      it('renders the input type', function () {
        var inputElement = component.find('input');
        var inputElementWithType = (0, _enzyme.shallow)(_react2.default.createElement(_InputField2.default, _extends({}, props, { type: 'tel', onChange: onChange, onBlur: onBlur }))).find('input');

        expect(inputElement.props().type).toEqual('text');
        expect(inputElementWithType.props().type).toEqual('tel');
      });

      it('renders the input length', function () {
        var inputElement = component.find('input');
        expect(inputElement.props().maxLength).toEqual('125');
      });

      it('calls onChange when a change event occurs on input field', function () {
        var inputElement = component.find('input');
        inputElement.simulate('change', { target: { value: 'hola mundo' } });
        expect(onChange).toHaveBeenCalledWith({
          target: { value: 'hola mundo' }
        });
      });

      it('sanitizes the call to onChange when an allowCharacters pattern is given', function () {
        component.setProps({ allowCharacters: /[a-zA-Z\s-]/ });
        var inputElement = component.find('input');
        inputElement.simulate('change', {
          target: { value: 'hola mu-ndo239847%^#@$?' }
        });
        expect(onChange).toHaveBeenCalledWith({
          target: { value: 'hola mu-ndo' }
        });
      });

      it('calls onBlur when a blur event occurs on input field', function () {
        var inputElement = component.find('input');
        inputElement.simulate('blur');
        expect(onBlur).toHaveBeenCalled();
      });
    });

    describe('when it is NOT required', function () {
      beforeEach(function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_InputField2.default, _extends({}, props, { onChange: onChange, onBlur: onBlur })));
      });

      it('renders an input field', function () {
        expect(component.find('label.required').exists()).toEqual(false);
        expect(component.find('FormField').props().required).toEqual(false);
      });
    });

    describe('when it is required', function () {
      beforeEach(function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_InputField2.default, _extends({}, props, { onChange: onChange, onBlur: onBlur, required: true })));
      });

      it('renders a required input field', function () {
        expect(component.find('FormField').props().required).toEqual(true);
        expect(component.find('input').prop('required')).toEqual(true);
        expect(component.find('input').prop('aria-required')).toEqual(true);
      });
    });

    describe('when it is disabled', function () {
      beforeEach(function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_InputField2.default, _extends({}, props, { onChange: onChange, onBlur: onBlur, disabled: true })));
      });

      it('renders a disabled input field', function () {
        expect(component.find('FormField').props().disabled).toEqual(true);
        expect(component.find('input').prop('disabled')).toEqual(true);
      });
    });
  });
});