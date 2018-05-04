(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../common/FormField', 'prop-types', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../common/FormField'), require('prop-types'), require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.FormField, global.propTypes, global.react);
    global.SelectField = mod.exports;
  }
})(this, function (exports, _FormField, _propTypes, _react) {
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

  var SelectField = function SelectField(_ref) {
    var gridClassName = _ref.gridClassName,
        labelClassName = _ref.labelClassName,
        id = _ref.id,
        label = _ref.label,
        value = _ref.value,
        onChange = _ref.onChange,
        onBlur = _ref.onBlur,
        children = _ref.children,
        required = _ref.required,
        errors = _ref.errors;
    return _react2.default.createElement(
      _FormField2.default,
      {
        htmlFor: id,
        label: label,
        labelClassName: labelClassName,
        gridClassName: gridClassName,
        errors: errors,
        required: required
      },
      _react2.default.createElement(
        'select',
        {
          id: id,
          value: value || '',
          onChange: onChange,
          onBlur: onBlur,
          'aria-required': required,
          required: required
        },
        children
      )
    );
  };

  SelectField.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.object]).isRequired,
    errors: _propTypes2.default.array,
    gridClassName: _propTypes2.default.string,
    id: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    labelClassName: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func.isRequired,
    required: _propTypes2.default.bool,
    value: _propTypes2.default.string
  };
  exports.default = SelectField;
});