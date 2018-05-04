(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../common/ErrorMessages', 'prop-types', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../common/ErrorMessages'), require('prop-types'), require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ErrorMessages, global.propTypes, global.react);
    global.CheckboxField = mod.exports;
  }
})(this, function (exports, _ErrorMessages, _propTypes, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _ErrorMessages2 = _interopRequireDefault(_ErrorMessages);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var CheckboxField = function CheckboxField(_ref) {
    var errors = _ref.errors,
        id = _ref.id,
        value = _ref.value,
        checked = _ref.checked,
        disabled = _ref.disabled,
        label = _ref.label,
        onChange = _ref.onChange,
        onBlur = _ref.onBlur,
        required = _ref.required;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('input', {
        type: 'checkbox',
        id: id,
        value: value,
        checked: checked,
        disabled: disabled,
        required: required,
        onChange: onChange,
        onBlur: onBlur
      }),
      _react2.default.createElement(
        'label',
        { className: required && 'required', htmlFor: id },
        label
      ),
      _react2.default.createElement(_ErrorMessages2.default, { ariaDescribedBy: id, errors: errors })
    );
  };

  CheckboxField.propTypes = {
    checked: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    errors: _propTypes2.default.array,
    id: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func.isRequired,
    required: _propTypes2.default.bool,
    value: _propTypes2.default.string.isRequired
  };

  exports.default = CheckboxField;
});