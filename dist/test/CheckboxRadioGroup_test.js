(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../CheckboxRadioGroup.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../CheckboxRadioGroup.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.CheckboxRadioGroup, global.enzyme, global.EnzymeSetup);
    global.CheckboxRadioGroup_test = mod.exports;
  }
})(this, function (_react, _CheckboxRadioGroup, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _CheckboxRadioGroup2 = _interopRequireDefault(_CheckboxRadioGroup);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var props = {
    label: 'hi',
    type: 'radio',
    name: 'CheckboxRadioGroup',
    options: [],
    heading: 'CheckBox Test'
  };

  describe('CheckboxRadioGroup', function () {
    var renderedComponent = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxRadioGroup2.default, props));

    it('haa the tag', function () {
      expect(renderedComponent.type()).toBe('fieldset');
    });

    it('verify the className', function () {
      expect(renderedComponent.props().className).toBe('fieldset-inputs sans');
    });

    it('have passed props', function () {
      var instance = renderedComponent.instance();
      expect(instance.props.label).toBe('hi');
      expect(instance.props.type).toBe('radio');
      expect(instance.props.name).toBe('CheckboxRadioGroup');
      expect(instance.props.options.length).toEqual([].length);
      expect(instance.props.heading).toBe('CheckBox Test');
    });
  });
});