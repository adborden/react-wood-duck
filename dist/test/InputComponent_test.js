(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../InputComponent.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../InputComponent.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.InputComponent, global.enzyme, global.EnzymeSetup);
    global.InputComponent_test = mod.exports;
  }
})(this, function (_react, _InputComponent, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _InputComponent2 = _interopRequireDefault(_InputComponent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Input component', function () {
    var onChange = jasmine.createSpy('onChange');
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InputComponent2.default, null));
    var input = {
      id: '123ASD',
      label: 'label name',
      gridClassName: 'grid class name',
      serverError: true,
      labelClassName: 'label class name',
      fieldClassName: 'field class name',
      placeholder: 'string ',
      value: 'enter the name',
      onChange: onChange
    };
    var instance = wrapper.instance();
    wrapper.setProps(input);

    it('has basic elements', function () {
      expect(wrapper.hasClass('form-group')).toBe(true);
      expect(wrapper.find('span').at(0).props().className).toEqual('error text-danger');
      expect(wrapper.find('i').at(0).props().className).toEqual('fa fa-exclamation-triangle');
    });

    it('has props ', function () {
      expect(wrapper.find('div').at(1).props().className).toEqual(input.gridClassName + ' has-error');
      expect(wrapper.find('label').at(0).props().className).toEqual(input.labelClassName);
      expect(wrapper.find('label').at(0).props().htmlFor).toEqual(input.id);
      expect(instance.props.label).toBe('label name');
      expect(wrapper.find('input').at(0).props().placeholder).toEqual(input.placeholder);
      expect(wrapper.find('input').at(0).props().value).toEqual(input.value);
      expect(wrapper.find('input').at(0).props().value).toEqual(input.value);
    });

    it('sanitizes the call to onChange when an allowCharacters pattern is given', function () {
      wrapper.setProps({ allowCharacters: /[a-zA-Z\s-]/ });
      var inputElement = wrapper.find('input');
      inputElement.simulate('change', {
        target: { value: 'hola mu-ndo239847%^#@$?' }
      });
      expect(onChange).toHaveBeenCalledWith({
        target: { value: 'hola mu-ndo' }
      });
    });
  });
});