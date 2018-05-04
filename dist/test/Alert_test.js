(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../Alert.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../Alert.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Alert, global.enzyme, global.EnzymeSetup);
    global.Alert_test = mod.exports;
  }
})(this, function (_react, _Alert, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _Alert2 = _interopRequireDefault(_Alert);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Alert', function () {
    var alertclass = 'Testing';
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Alert2.default, { alertClassName: alertclass, faIcon: alertclass }));
    var alert = {
      alertClassName: 'Success!',
      faIcon: 'fa-info-circle icon',
      alertCross: true,
      children: 'children'
    };
    var component = (0, _enzyme.mount)(_react2.default.createElement(_Alert2.default, null));
    component.setProps(alert);

    it('has a className', function () {
      expect(wrapper.hasClass('row')).toBe(true);
    });

    it('has a props', function () {
      expect(component.find('div').at(1).props().className).toEqual('col-xs-12');

      expect(component.find('div').at(2).props().className).toEqual('alert-message ' + alert.alertClassName + '-message');

      expect(component.find('div').at(3).props().className).toEqual('alert-icon');

      expect(component.find('div').at(4).props().className).toEqual('alert-text');

      expect(component.props().children).toEqual(alert.children);

      expect(component.find('i').at(0).props().className).toEqual('fa ' + alert.faIcon);

      expect(component.find('div').at(5).props().className).toEqual('alert-cross');
      expect(component.find('i').at(1).props().className).toEqual('fa fa-times');
      var instance = wrapper.instance();
      expect(instance.props.faIcon).toEqual(alertclass);
      expect(instance.props.alertClassName).toEqual(alertclass);
      expect(instance.props.alertCross).toEqual(true);
    });
  });
});