(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../common/FormField', 'prop-types', 'react', './FieldUtils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../common/FormField'), require('prop-types'), require('react'), require('./FieldUtils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.FormField, global.propTypes, global.react, global.FieldUtils);
    global.InputField = mod.exports;
  }
})(this, function (exports, _FormField, _propTypes, _react, _FieldUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _FormField2 = _interopRequireDefault(_FormField);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var InputField = function InputField(_ref) {
    var errors = _ref.errors,
        gridClassName = _ref.gridClassName,
        id = _ref.id,
        label = _ref.label,
        labelClassName = _ref.labelClassName,
        maxLength = _ref.maxLength,
        onBlur = _ref.onBlur,
        onChange = _ref.onChange,
        allowCharacters = _ref.allowCharacters,
        placeholder = _ref.placeholder,
        required = _ref.required,
        type = _ref.type,
        value = _ref.value,
        disabled = _ref.disabled;

    var formFieldProps = {
      disabled: disabled,
      errors: errors,
      gridClassName: gridClassName,
      htmlFor: id,
      label: label,
      labelClassName: labelClassName,
      required: required
    };

    var onChangeWrapper = function onChangeWrapper(event) {
      if (event.target.value && allowCharacters) {
        event.target.value = (0, _FieldUtils.sanitizeValue)(event.target.value, allowCharacters);
      }
      onChange(event);
    };

    return _react2.default.createElement(
      _FormField2.default,
      formFieldProps,
      _react2.default.createElement('input', {
        id: id,
        type: type,
        placeholder: placeholder,
        value: value,
        onChange: onChangeWrapper,
        maxLength: maxLength,
        onBlur: onBlur,
        'aria-required': required,
        required: required,
        disabled: disabled
      })
    );
  };

  InputField.defaultProps = {
    type: 'text',
    mask: ''
  };

  InputField.propTypes = {
    allowCharacters: _propTypes2.default.instanceOf(RegExp),
    disabled: _propTypes2.default.bool,
    errors: _propTypes2.default.array,
    gridClassName: _propTypes2.default.string,
    id: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    labelClassName: _propTypes2.default.string,
    maxLength: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func.isRequired,
    placeholder: _propTypes2.default.string,
    required: _propTypes2.default.bool,
    type: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  };

  exports.default = InputField;
});