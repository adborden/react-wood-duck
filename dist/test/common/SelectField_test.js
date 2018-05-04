(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../../common/SelectField', './../EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../../common/SelectField'), require('./../EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.SelectField, global.EnzymeSetup);
    global.SelectField_test = mod.exports;
  }
})(this, function (_react, _enzyme, _SelectField) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _SelectField2 = _interopRequireDefault(_SelectField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('SelectField', function () {
    var component = void 0;
    var formField = void 0;
    var props = {
      children: [],
      gridClassName: 'myWrapperTest',
      labelClassName: 'myLabelTest',
      id: 'myDateFieldId',
      label: 'this is my label',
      value: 'this-is-my-value'
    };
    var onChange = void 0;
    var onBlur = void 0;
    beforeEach(function () {
      onChange = jasmine.createSpy('onChange');
      onBlur = jasmine.createSpy('onBlur');
      props.onChange = onChange;
      props.onBlur = onBlur;
      component = (0, _enzyme.shallow)(_react2.default.createElement(
        _SelectField2.default,
        props,
        _react2.default.createElement('option', null)
      ));
      formField = component.find('FormField');
    });

    it('passes props to the FormField', function () {
      expect(formField.props().labelClassName).toEqual('myLabelTest');
      expect(formField.props().gridClassName).toEqual('myWrapperTest');
      expect(formField.props().htmlFor).toEqual('myDateFieldId');
      expect(formField.props().label).toEqual('this is my label');
      expect(formField.childAt(0).getElement().type).toEqual('select');
    });

    it('renders the select element and children', function () {
      var selectElement = component.find('select');
      expect(selectElement.length).toEqual(1);
      expect(selectElement.props().value).toEqual('this-is-my-value');
      expect(selectElement.find('option').length).toEqual(1);
    });

    it('renders the select element value with empty string when value is null', function () {
      var propsWithNullValue = Object.assign(props, { value: null });
      component = (0, _enzyme.shallow)(_react2.default.createElement(_SelectField2.default, propsWithNullValue));
      var inputElement = component.find('select');
      expect(inputElement.length).toEqual(1);
      expect(inputElement.props().value).toEqual('');
    });

    it('calls onChange when a change event occurs on select field', function () {
      var selectElement = component.find('select');
      selectElement.simulate('change');
      expect(onChange).toHaveBeenCalled();
    });

    it('calls onBlur when a blur event occurs on select field', function () {
      var selectElement = component.find('select');
      selectElement.simulate('blur');
      expect(onBlur).toHaveBeenCalled();
    });

    it('does not render a required select field', function () {
      expect(formField.props().required).toEqual(undefined);
      expect(component.find('select').prop('required')).toEqual(undefined);
      expect(component.find('select').prop('aria-required')).toEqual(undefined);
    });

    describe('when SelectField is required', function () {
      it('renders a required select field', function () {
        onChange = jasmine.createSpy('onChange');
        var props = {
          children: [],
          gridClassName: 'myWrapperTest',
          labelClassName: 'myLabelTest',
          id: 'myDateFieldId',
          label: 'this is my label',
          required: true,
          value: 'this-is-my-value',
          onChange: onChange
        };
        component = (0, _enzyme.shallow)(_react2.default.createElement(_SelectField2.default, props));
        expect(component.find('FormField').props().required).toEqual(true);
        expect(component.find('select').prop('required')).toEqual(true);
        expect(component.find('select').prop('aria-required')).toEqual(true);
      });
    });
  });
});