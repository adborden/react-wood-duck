(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../RelationCard.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../RelationCard.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.RelationCard, global.enzyme, global.EnzymeSetup);
    global.RelationCard_test = mod.exports;
  }
})(this, function (_react, _RelationCard, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _RelationCard2 = _interopRequireDefault(_RelationCard);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('RelationCard', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RelationCard2.default, null));
    var RelationCardProps = {
      firstName: 'Han',
      lastName: 'Solo'
    };
    var component = (0, _enzyme.mount)(_react2.default.createElement(_RelationCard2.default, null));
    component.setProps(RelationCardProps);

    it('has a BootstrapTable', function () {
      expect(wrapper.find('BootstrapTable').length).toBe(1);
    });
    it('has a TableHeaderColumn', function () {
      expect(wrapper.find('TableHeaderColumn').length).toBe(3);
    });
    it('has props', function () {
      expect(component.prop('firstName')).toEqual('Han');
      expect(component.prop('lastName')).toEqual('Solo');
      expect(component.find('div').at(1).props().className).toEqual('childName');
    });
  });
});