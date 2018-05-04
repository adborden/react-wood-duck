(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '../common/InputField', '../common/SelectField'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('../common/InputField'), require('../common/SelectField'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.InputField, global.SelectField);
    global.AddressesForm = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _InputField, _SelectField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _InputField2 = _interopRequireDefault(_InputField);

  var _SelectField2 = _interopRequireDefault(_SelectField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var AddressesForm = function AddressesForm(_ref) {
    var addAddress = _ref.addAddress,
        addresses = _ref.addresses,
        addressTypeOptions = _ref.addressTypeOptions,
        deleteAddress = _ref.deleteAddress,
        _onChange = _ref.onChange,
        stateOptions = _ref.stateOptions;
    return _react2.default.createElement(
      'div',
      null,
      addresses.map(function (_ref2, index) {
        var city = _ref2.city,
            state = _ref2.state,
            street = _ref2.street,
            type = _ref2.type,
            zip = _ref2.zip;
        return _react2.default.createElement(
          'div',
          { key: index, className: 'row list-item' },
          _react2.default.createElement(_InputField2.default, {
            gridClassName: 'col-md-6',
            id: 'street_address',
            label: 'Address',
            maxLength: '128',
            onChange: function onChange(_ref3) {
              var value = _ref3.target.value;
              return _onChange(index, 'street', value);
            },
            value: street
          }),
          _react2.default.createElement(_InputField2.default, {
            gridClassName: 'col-md-6',
            id: 'city',
            label: 'City',
            maxLength: '64',
            onChange: function onChange(_ref4) {
              var value = _ref4.target.value;
              return _onChange(index, 'city', value);
            },
            value: city
          }),
          _react2.default.createElement(
            _SelectField2.default,
            {
              gridClassName: 'col-md-4',
              id: 'state',
              label: 'State',
              onChange: function onChange(_ref5) {
                var value = _ref5.target.value;
                return _onChange(index, 'state', value);
              },
              value: state
            },
            _react2.default.createElement('option', { key: '', value: '' }),
            stateOptions.map(function (_ref6) {
              var value = _ref6.value,
                  label = _ref6.label;
              return _react2.default.createElement(
                'option',
                { key: value, value: value },
                label
              );
            })
          ),
          _react2.default.createElement(_InputField2.default, {
            allowCharacters: /[0-9-]/,
            gridClassName: 'col-md-2',
            id: 'zip',
            label: 'Zip',
            maxLength: '10',
            onChange: function onChange(_ref7) {
              var value = _ref7.target.value;
              return _onChange(index, 'zip', value);
            },
            value: zip
          }),
          _react2.default.createElement(
            _SelectField2.default,
            {
              gridClassName: 'col-md-6',
              id: 'address_type',
              label: 'Address Type',
              onChange: function onChange(_ref8) {
                var value = _ref8.target.value;
                return _onChange(index, 'type', value);
              },
              value: type
            },
            _react2.default.createElement('option', { key: '', value: '' }),
            addressTypeOptions.map(function (_ref9) {
              var value = _ref9.value,
                  label = _ref9.label;
              return _react2.default.createElement(
                'option',
                { key: value, value: value },
                label
              );
            })
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-default list-item__button',
              'aria-label': 'Delete address',
              onClick: function onClick(event) {
                event.preventDefault();
                deleteAddress(index);
              }
            },
            _react2.default.createElement('i', { className: 'fa fa-times' })
          )
        );
      }),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-12' },
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-default btn-block',
              'aria-label': 'Add address',
              onClick: addAddress
            },
            _react2.default.createElement('i', { className: 'fa fa-plus' }),
            _react2.default.createElement(
              'span',
              null,
              ' Add new address'
            )
          )
        )
      )
    );
  };

  AddressesForm.propTypes = {
    addAddress: _propTypes2.default.func,
    addressTypeOptions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string,
      value: _propTypes2.default.string
    })),
    addresses: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      city: _propTypes2.default.string,
      state: _propTypes2.default.string,
      street: _propTypes2.default.string,
      type: _propTypes2.default.string,
      zip: _propTypes2.default.string
    })),
    deleteAddress: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    stateOptions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string,
      value: _propTypes2.default.string
    }))
  };

  exports.default = AddressesForm;
});