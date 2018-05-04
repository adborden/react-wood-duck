(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['../CommonAddressComponent.js', 'react', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('../CommonAddressComponent.js'), require('react'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.CommonAddressComponent, global.react, global.enzyme, global.EnzymeSetup);
    global.CommonAddressComponent_tests = mod.exports;
  }
})(this, function (_CommonAddressComponent, _react, _enzyme) {
  'use strict';

  var _CommonAddressComponent2 = _interopRequireDefault(_CommonAddressComponent);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var stateTypes = {
    items: [{
      id: 1,
      value: 'Alabama'
    }, {
      id: 2,
      value: 'Alaska'
    }, {
      id: 3,
      value: 'American Samoa'
    }, {
      id: 4,
      value: 'Arizona'
    }, {
      id: 5,
      value: 'Arkansas'
    }, {
      id: 6,
      value: 'California'
    }]
  };
  describe('Verify Common Address Fields Component', function () {
    var commonAddressComponent = void 0,
        onChangeSpy = void 0;
    onChangeSpy = jasmine.createSpy('onChange');
    var addressFields = {
      street_address: '',
      zip: '',
      city: '',
      state: null
    };
    var props = {
      addressTitle: 'Physical Address',
      addressType: 'Residential',
      id: 'street_address',
      suggestions: [],
      stateTypes: stateTypes.items,
      addressFields: addressFields,
      onChange: onChangeSpy,
      onSuggestionsFetchRequested: onChangeSpy,
      onSuggestionSelected: onChangeSpy
    };
    beforeEach(function () {
      commonAddressComponent = (0, _enzyme.shallow)(_react2.default.createElement(_CommonAddressComponent2.default, {
        addressTitle: 'Physical Address',
        addressType: 'Residential',
        id: 'street_address',
        suggestions: [],
        stateTypes: stateTypes.items,
        addressFields: addressFields,
        onChange: onChangeSpy,
        renderSuggestion: onChangeSpy,
        onSuggestionsFetchRequested: onChangeSpy,
        onSuggestionSelected: onChangeSpy
      }));
    });
    it('Load Address Fields', function () {
      expect(commonAddressComponent.length).toEqual(1);
    });
    it('verify Residential street address', function () {
      var streetAddress = commonAddressComponent.find('#Residentialstreet_address').at(0);
      expect(streetAddress.length).toBe(1);
    });
    it('verify mailing address zip change', function () {
      var zipCodeField = commonAddressComponent.find('#Residentialzip').at(0);
      zipCodeField.simulate('change', { target: { value: '95833' } });
      expect(onChangeSpy).toHaveBeenCalledWith('zip', '95833');
    });

    it('allows only 5 numeric characters for mailing address zip on change ', function () {
      var zipCodeField = commonAddressComponent.find('#Residentialzip').at(0);
      zipCodeField.simulate('change', { target: { value: 'asd958334ccc' } });
      expect(onChangeSpy).toHaveBeenCalledWith('zip', '95833');
    });

    it('verify mailing Address city change', function () {
      var cityField = commonAddressComponent.find('#Residentialcity').at(0);
      cityField.simulate('change', { target: { value: 'Sacramento' } });
      expect(onChangeSpy).toHaveBeenCalledWith('city', 'Sacramento');
    });
    it('verify mailing Address State change', function () {
      var stateDropDownField = commonAddressComponent.find('#Residentialstate_type').at(0);
      stateDropDownField.simulate('change', { id: 1, value: 'Alabama' });
      expect(onChangeSpy).toHaveBeenCalledWith('state', {
        id: 1,
        value: 'Alabama'
      });
    });
    describe('AutoSuggest Render', function () {
      var addressComponent = void 0;
      beforeEach(function () {
        addressComponent = (0, _enzyme.shallow)(_react2.default.createElement(_CommonAddressComponent2.default, props));
      });
      it('AutoSuggest label', function () {
        expect(addressComponent.find('label').text()).toEqual('Physical Address');
      });
      it('for AutoSuggest Component load', function () {
        expect(addressComponent.find('Autosuggest').length).toBe(1);
      });
    });
  });
});