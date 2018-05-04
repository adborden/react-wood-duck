(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../Button.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../Button.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Button, global.enzyme, global.EnzymeSetup);
    global.Button_test = mod.exports;
  }
})(this, function (_react, _Button, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _Button2 = _interopRequireDefault(_Button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Button', function () {
    var btnclass = 'some class';
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Button2.default, { btnClassName: btnclass, btnName: btnclass }));

    it('has a props', function () {
      var button = {
        btnClassName: 'specific class name',
        btnName: 'primary'
      };
      wrapper.setProps(button);
      expect(wrapper.find('button').at(0).props().className).toEqual('btn btn-' + button.btnClassName);

      expect(wrapper.find('button').at(0).props().children).toEqual(button.btnName);
    });
  });
});