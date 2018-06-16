(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../ModalComponent.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../ModalComponent.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.ModalComponent, global.enzyme, global.EnzymeSetup);
    global.ModalComponentTest = mod.exports;
  }
})(this, function (_react, _ModalComponent, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _ModalComponent2 = _interopRequireDefault(_ModalComponent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('ModalComponent', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ModalComponent2.default, null));

    it('has a Modal', function () {
      expect(wrapper.find('Modal').length).toBe(1);
    });
    it('has a ModalHeader', function () {
      expect(wrapper.find('ModalHeader').length).toBe(1);
    });
    it('has a ModalTitle', function () {
      expect(wrapper.find('ModalTitle').length).toBe(1);
    });
    it('has a ModalBody', function () {
      expect(wrapper.find('ModalBody').length).toBe(1);
    });
    it('has a ModalFooter', function () {
      expect(wrapper.find('ModalFooter').length).toBe(1);
    });
  });
});