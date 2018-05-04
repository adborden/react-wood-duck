(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../AddAdditionalItem.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../AddAdditionalItem.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.AddAdditionalItem, global.enzyme, global.EnzymeSetup);
    global.AddAdditionalItem_test = mod.exports;
  }
})(this, function (_react, _AddAdditionalItem, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _AddAdditionalItem2 = _interopRequireDefault(_AddAdditionalItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('AddAdditionalItem', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AddAdditionalItem2.default, null));

    it('verify the no of "div" tags ', function () {
      expect(wrapper.find('div').length).toEqual(1);
    });

    it('has a className', function () {
      expect(wrapper.hasClass('list-item')).toBe(true);
    });

    it('has props passed as children', function () {
      var component = (0, _enzyme.mount)(_react2.default.createElement(_AddAdditionalItem2.default, null));
      var additionItem = {
        children: 'some class'
      };
      component.setProps(additionItem);
      expect(component.find('div').at(0).props().children).toEqual(additionItem.children);
    });
  });
});