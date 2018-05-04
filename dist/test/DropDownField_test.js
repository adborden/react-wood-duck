(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../DropDownField.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../DropDownField.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.DropDownField, global.enzyme, global.EnzymeSetup);
    global.DropDownField_test = mod.exports;
  }
})(this, function (_react, _DropDownField, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _DropDownField2 = _interopRequireDefault(_DropDownField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('DropDownField', function () {
    var onChangeSpy = jasmine.createSpy('onChange');
    var props = {
      options: ['Male', 'Female'],
      selectedOption: 'California',
      placeholder: 'Values',
      gridClassName: 'Grid class name',
      label: 'label name',
      selectClassName: 'classnames',
      onChange: onChangeSpy
    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_DropDownField2.default, props));
    var instance = wrapper.instance();

    it('has basic elements ', function () {
      expect(wrapper.hasClass('form-group')).toEqual(true);
    });
    it('has props', function () {
      expect(instance.props.options).toEqual(['Male', 'Female']);
      expect(instance.props.selectedOption).toEqual('California');
      expect(instance.props.placeholder).toEqual('Values');
      expect(instance.props.gridClassName).toEqual('Grid class name');
      expect(instance.props.label).toEqual('label name');
      expect(instance.props.selectClassName).toEqual('classnames');
      expect(instance.props.onChange).toEqual(onChangeSpy);
    });
  });
});