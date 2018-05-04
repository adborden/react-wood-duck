(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../TextArea.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../TextArea.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.TextArea, global.enzyme, global.EnzymeSetup);
    global.TextArea_test = mod.exports;
  }
})(this, function (_react, _TextArea, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _TextArea2 = _interopRequireDefault(_TextArea);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('TextArea', function () {
    var textarea = {
      name: 'some-name',
      label: 'some label name',
      gridClassName: 'class name',
      rows: 123,
      labelClassName: 'label with class name',
      fieldClassName: 'field class name',
      placeholder: 'should be string',
      value: 'some-text'
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TextArea2.default, textarea));

    it('verify the no of "div" tags ', function () {
      expect(wrapper.find('div').length).toEqual(2);
    });

    it('has a className', function () {
      expect(wrapper.hasClass('form-group')).toBe(true);
    });
    it('has basic elements', function () {
      expect(wrapper.find('label').prop('className')).toEqual('form-label');
    });

    it('it has props', function () {
      expect(wrapper.find('div').at(1).props().className).toEqual(textarea.gridClassName);
      expect(wrapper.find('label').at(0).props().htmlFor).toEqual(textarea.name);
      expect(wrapper.find('textarea').at(0).props().className).toEqual(textarea.labelClassName);
      expect(wrapper.find('textarea').at(0).props().value).toEqual(textarea.value);
      expect(wrapper.find('textarea').at(0).props().placeholder).toEqual(textarea.placeholder);
      expect(wrapper.find('textarea').at(0).props().rows).toEqual(textarea.rows);
    });
  });
});