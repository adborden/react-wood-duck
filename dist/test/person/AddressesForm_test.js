(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../../person/AddressesForm', './../EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../../person/AddressesForm'), require('./../EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.AddressesForm, global.EnzymeSetup);
    global.AddressesForm_test = mod.exports;
  }
})(this, function (_react, _enzyme, _AddressesForm) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _AddressesForm2 = _interopRequireDefault(_AddressesForm);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  describe('AddressForm', function () {
    var renderAddressesForm = function renderAddressesForm(_ref) {
      var _ref$addresses = _ref.addresses,
          addresses = _ref$addresses === undefined ? [] : _ref$addresses,
          _ref$addressTypeOptio = _ref.addressTypeOptions,
          addressTypeOptions = _ref$addressTypeOptio === undefined ? [] : _ref$addressTypeOptio,
          _ref$stateOptions = _ref.stateOptions,
          stateOptions = _ref$stateOptions === undefined ? [] : _ref$stateOptions,
          options = _objectWithoutProperties(_ref, ['addresses', 'addressTypeOptions', 'stateOptions']);

      var props = _extends({ addresses: addresses, addressTypeOptions: addressTypeOptions, stateOptions: stateOptions }, options);
      return (0, _enzyme.shallow)(_react2.default.createElement(_AddressesForm2.default, props));
    };

    it('renders a button to add a new address', function () {
      var component = renderAddressesForm({});
      var addNewButton = component.find('button');
      expect(addNewButton.exists()).toEqual(true);
      expect(addNewButton.props()['aria-label']).toEqual('Add address');
      expect(addNewButton.children('span').text()).toEqual(' Add new address');
      expect(addNewButton.children('i').props().className).toEqual('fa fa-plus');
    });

    it('calls addAddress when add new address is clicked', function () {
      var addAddress = jasmine.createSpy('addAddress');
      var component = renderAddressesForm({ addAddress: addAddress });
      var addNewButton = component.find('button');
      addNewButton.simulate('click');
      expect(addAddress).toHaveBeenCalled();
    });

    it('renders a delete button for every address', function () {
      var addresses = [{}, {}];
      var component = renderAddressesForm({ addresses: addresses });
      var deleteLinks = component.find('button[aria-label="Delete address"]');
      expect(deleteLinks.length).toEqual(2);
    });

    it('passes default props to the delete button', function () {
      var addresses = [{}];
      var component = renderAddressesForm({ addresses: addresses });
      var deleteLink = component.find('button[aria-label="Delete address"]');
      expect(deleteLink.props().className).toEqual('btn btn-default list-item__button');
      expect(deleteLink.children('i').props().className).toEqual('fa fa-times');
    });

    it('calls delete address with the index of the address when the delete button is clicked', function () {
      var deleteAddress = jasmine.createSpy('deleteAddress');
      var addresses = [{}];
      var component = renderAddressesForm({ addresses: addresses, deleteAddress: deleteAddress });
      var deleteLink = component.find('button[aria-label="Delete address"]');
      deleteLink.simulate('click', { preventDefault: function preventDefault() {} });
      expect(deleteAddress).toHaveBeenCalledWith(0);
    });

    it('renders an input for street with default params and a value', function () {
      var addresses = [{ street: '1234 Nowhere Lane' }];
      var component = renderAddressesForm({ addresses: addresses });
      var streetInput = component.find('InputField[label="Address"]');
      expect(streetInput.props().maxLength).toEqual('128');
      expect(streetInput.props().value).toEqual('1234 Nowhere Lane');
    });

    it('calls onChange when the street is updated', function () {
      var onChange = jasmine.createSpy('onChange');
      var addresses = [{}];
      var component = renderAddressesForm({ addresses: addresses, onChange: onChange });
      var streetInput = component.find('InputField[label="Address"]');
      streetInput.simulate('change', {
        target: { value: '1234 Somewhere Street' }
      });
      expect(onChange).toHaveBeenCalledWith(0, 'street', '1234 Somewhere Street');
    });

    it('renders an input for city with default props and a value', function () {
      var addresses = [{ city: 'Nowheresville' }];
      var component = renderAddressesForm({ addresses: addresses });
      var streetInput = component.find('InputField[label="City"]');
      expect(streetInput.props().maxLength).toEqual('64');
      expect(streetInput.props().value).toEqual('Nowheresville');
    });

    it('calls onChange when the city is updated', function () {
      var onChange = jasmine.createSpy('onChange');
      var addresses = [{}];
      var component = renderAddressesForm({ addresses: addresses, onChange: onChange });
      var cityInput = component.find('InputField[label="City"]');
      cityInput.simulate('change', { target: { value: 'Somewheresville' } });
      expect(onChange).toHaveBeenCalledWith(0, 'city', 'Somewheresville');
    });

    it('renders a state select field with proper value', function () {
      var addresses = [{ state: 'CA' }];
      var component = renderAddressesForm({ addresses: addresses });
      var stateSelect = component.find('SelectField[label="State"]');
      expect(stateSelect.props().value).toEqual('CA');
    });

    it('renders stateOptions for the state select field', function () {
      var stateOptions = [{ value: 'CA', label: 'California' }, { value: 'AZ', label: 'Arizona' }];
      var addresses = [{}];
      var component = renderAddressesForm({ stateOptions: stateOptions, addresses: addresses });
      var stateSelect = component.find('SelectField[label="State"]');
      var stateSelectOptions = stateSelect.children();
      expect(stateSelectOptions.at(0).text()).toEqual('');
      expect(stateSelectOptions.at(1).props().value).toEqual('CA');
      expect(stateSelectOptions.at(1).children().text()).toEqual('California');
      expect(stateSelectOptions.at(2).props().value).toEqual('AZ');
      expect(stateSelectOptions.at(2).children().text()).toEqual('Arizona');
    });

    it('calls onChange when the state is updated', function () {
      var onChange = jasmine.createSpy('onChange');
      var addresses = [{}];
      var component = renderAddressesForm({ addresses: addresses, onChange: onChange });
      var stateSelect = component.find('SelectField[label="State"]');
      stateSelect.simulate('change', { target: { value: 'CA' } });
      expect(onChange).toHaveBeenCalledWith(0, 'state', 'CA');
    });

    it('renders an input for zip with default props and a value', function () {
      var addresses = [{ zip: '55555' }];
      var component = renderAddressesForm({ addresses: addresses });
      var streetInput = component.find('InputField[label="Zip"]');
      expect(streetInput.props().maxLength).toEqual('10');
      expect(streetInput.props().value).toEqual('55555');
      expect(streetInput.props().allowCharacters).toEqual(/[0-9-]/);
    });

    it('calls onChange when the zip is updated', function () {
      var onChange = jasmine.createSpy('onChange');
      var addresses = [{}];
      var component = renderAddressesForm({ addresses: addresses, onChange: onChange });
      var zipInput = component.find('InputField[label="Zip"]');
      zipInput.simulate('change', { target: { value: '55555' } });
      expect(onChange).toHaveBeenCalledWith(0, 'zip', '55555');
    });

    it('renders a type select field with proper value', function () {
      var addresses = [{ type: 'Home' }];
      var component = renderAddressesForm({ addresses: addresses });
      var typeSelect = component.find('SelectField[label="Address Type"]');
      expect(typeSelect.props().value).toEqual('Home');
    });

    it('renders typeOptions for the type select field', function () {
      var addressTypeOptions = [{ value: 'home', label: 'Home' }, { value: 'school', label: 'School' }];
      var addresses = [{}];
      var component = renderAddressesForm({ addressTypeOptions: addressTypeOptions, addresses: addresses });
      var typeSelect = component.find('SelectField[label="Address Type"]');
      var typeSelectOptions = typeSelect.children();
      expect(typeSelectOptions.at(0).text()).toEqual('');
      expect(typeSelectOptions.at(1).props().value).toEqual('home');
      expect(typeSelectOptions.at(1).children().text()).toEqual('Home');
      expect(typeSelectOptions.at(2).props().value).toEqual('school');
      expect(typeSelectOptions.at(2).children().text()).toEqual('School');
    });

    it('calls onChange when the type is updated', function () {
      var onChange = jasmine.createSpy('onChange');
      var addresses = [{}];
      var component = renderAddressesForm({ addresses: addresses, onChange: onChange });
      var typeSelect = component.find('SelectField[label="Address Type"]');
      typeSelect.simulate('change', { target: { value: 'Home' } });
      expect(onChange).toHaveBeenCalledWith(0, 'type', 'Home');
    });
  });
});