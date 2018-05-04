(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../Cards.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../Cards.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Cards, global.enzyme, global.EnzymeSetup);
    global.Cards_test = mod.exports;
  }
})(this, function (_react, _Cards, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _Cards2 = _interopRequireDefault(_Cards);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Cards', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Cards2.default, null));
    var card = {
      editClass: '',
      cardHeaderText: 'some-text',
      children: 'primary'
    };
    var component = (0, _enzyme.mount)(_react2.default.createElement(_Cards2.default, null));
    component.setProps(card);

    it('has props', function () {
      expect(wrapper.children.length).toEqual(1);
      expect(component.prop('cardbgcolor')).toEqual('transparent');
      expect(component.prop('wrapContainer')).toEqual('container-fluid');
      expect(component.prop('columnXsmallWidth')).toEqual(12);
      expect(component.prop('columnMediumWidth')).toEqual(12);
      expect(component.prop('columnLargeWidth')).toEqual(12);
      expect(component.prop('offsetMediumValue')).toEqual(0);
      expect(component.prop('cardHeaderButton')).toEqual(false);
      expect(component.prop('cardActionButtons')).toEqual(false);
      expect(component.find('div').at(1).props().className).toEqual('card ' + card.editClass + ' double-gap-top');

      expect(component.find('div').at(2).props().className).toEqual('card-header');
      expect(component.find('div').at(3).props().className).toEqual('card-body');
      expect(component.find('div').at(4).props().className).toEqual('clearfix');
      expect(component.find('span').at(0).props().children).toEqual(card.cardHeaderText);
      expect(component.props().children).toEqual(card.children);
    });

    it('when cardHeaderButton is true edit button displays', function () {
      var post = {
        cardHeaderButton: true,
        cardActionButtons: false
      };
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Cards2.default, post));
      expect(wrapper.find('Button').length).toBe(1);
    });

    it('when cardActionButtons is true save and cancel buttons displays', function () {
      var post = {
        cardHeaderButton: false,
        cardActionButtons: true
      };
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Cards2.default, post));
      expect(wrapper.find('Button').length).toBe(2);
    });
  });
});