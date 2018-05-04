(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './InputComponent.js', './DropDownField.js', 'react-autosuggest'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./InputComponent.js'), require('./DropDownField.js'), require('react-autosuggest'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.InputComponent, global.DropDownField, global.reactAutosuggest);
    global.CommonAddressComponent = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _InputComponent, _DropDownField, _reactAutosuggest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _InputComponent2 = _interopRequireDefault(_InputComponent);

  var _DropDownField2 = _interopRequireDefault(_DropDownField);

  var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var getDictionaryId = function getDictionaryId(object) {
    return object && object.value || '';
  };

  var getDictionaryValue = function getDictionaryValue(object) {
    return object !== null ? { id: object.id, value: object.value } : null;
  };

  var CommonAddressFields = function (_React$Component) {
    _inherits(CommonAddressFields, _React$Component);

    function CommonAddressFields(props) {
      _classCallCheck(this, CommonAddressFields);

      var _this = _possibleConstructorReturn(this, (CommonAddressFields.__proto__ || Object.getPrototypeOf(CommonAddressFields)).call(this, props));

      _this.state = {
        suggestions: _this.props.suggestions
      };

      _this.onSuggestionsClearRequested = _this.onSuggestionsClearRequested.bind(_this);
      _this.getSuggestionValue = _this.getSuggestionValue.bind(_this);
      _this.renderSuggestion = _this.renderSuggestion.bind(_this);
      _this.onStreetAddressChange = _this.onStreetAddressChange.bind(_this);
      return _this;
    }

    _createClass(CommonAddressFields, [{
      key: 'getSuggestionValue',
      value: function getSuggestionValue(suggestion) {
        return suggestion.street_address;
      }
    }, {
      key: 'onSuggestionsClearRequested',
      value: function onSuggestionsClearRequested() {
        // No operation
      }
    }, {
      key: 'renderSuggestion',
      value: function renderSuggestion(suggestion) {
        return _react2.default.createElement(
          'div',
          null,
          suggestion.street_address,
          ', ',
          suggestion.city,
          ', ',
          suggestion.state
        );
      }
    }, {
      key: 'onStreetAddressChange',
      value: function onStreetAddressChange(event, _ref) {
        var newValue = _ref.newValue;

        this.props.onChange(this.props.id, newValue);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var addressFields = this.props.addressFields;
        var inputProps = {
          id: this.props.addressType + this.props.id,
          placeholder: this.props.placeholder,
          value: addressFields.street_address,
          onChange: this.onStreetAddressChange
        };
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              'label',
              null,
              this.props.addressTitle
            ),
            _react2.default.createElement(_reactAutosuggest2.default, {
              suggestions: this.props.suggestions,
              inputProps: inputProps,
              renderSuggestion: this.renderSuggestion,
              onSuggestionsClearRequested: this.onSuggestionsClearRequested,
              getSuggestionValue: this.getSuggestionValue,
              onSuggestionsFetchRequested: this.props.onSuggestionsFetchRequested,
              onSuggestionSelected: this.props.onSuggestionSelected
            })
          ),
          _react2.default.createElement(_InputComponent2.default, {
            gridClassName: 'col-md-4',
            id: this.props.addressType + 'zip',
            value: addressFields.zip,
            label: 'Zip' + this.props.label,
            placeholder: '',
            type: 'text',
            onChange: function onChange(event) {
              return _this2.props.onChange('zip', event.target.value);
            },
            maxLength: 5,
            allowCharacters: /[0-9]/
          }),
          _react2.default.createElement(_InputComponent2.default, {
            gridClassName: 'col-md-4',
            id: this.props.addressType + 'city',
            value: addressFields.city,
            label: 'City' + this.props.label,
            placeholder: '',
            type: 'text',
            onChange: function onChange(event) {
              return _this2.props.onChange('city', event.target.value);
            }
          }),
          _react2.default.createElement(_DropDownField2.default, {
            gridClassName: 'col-md-4',
            id: this.props.addressType + 'state_type',
            selectClassName: 'reusable-select',
            name: '',
            selectedOption: getDictionaryId(addressFields.state),
            options: this.props.stateTypes.map(function (type) {
              return {
                label: type.value,
                value: type.value,
                id: type.id
              };
            }),
            label: 'State' + this.props.label,
            onChange: function onChange(event) {
              return _this2.props.onChange('state', getDictionaryValue(event));
            }
          })
        );
      }
    }]);

    return CommonAddressFields;
  }(_react2.default.Component);

  exports.default = CommonAddressFields;

  CommonAddressFields.propTypes = {
    addressType: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    id: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    addressTitle: _propTypes2.default.string.isRequired,
    suggestions: _propTypes2.default.array.isRequired,
    addressFields: _propTypes2.default.object.isRequired,
    stateTypes: _propTypes2.default.array.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    onSelection: _propTypes2.default.func,
    onSuggestionsFetchRequested: _propTypes2.default.func.isRequired,
    onSuggestionSelected: _propTypes2.default.func.isRequired
  };

  CommonAddressFields.defaultProps = {
    id: 'street_address',
    addressType: '',
    placeholder: '',
    suggestions: [],
    label: ''
  };
});