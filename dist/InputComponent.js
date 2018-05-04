(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './common/FieldUtils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./common/FieldUtils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.FieldUtils);
    global.InputComponent = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _FieldUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var extractErrorMessage = function extractErrorMessage(props) {
    var errorMessage = '';
    if (props.required || props.validationError) {
      errorMessage = props.validationErrorMessage;
    }

    if (props.serverError) {
      errorMessage = props.serverErrorMessage;
    }
    return errorMessage;
  };

  var onChangeWrapper = function onChangeWrapper(event, props) {
    if (event.target.value && props.allowCharacters) {
      event.target.value = (0, _FieldUtils.sanitizeValue)(event.target.value, props.allowCharacters);
    }
    props.onChange(event);
  };

  var InputComponent = function InputComponent(props) {
    var errorMessage = extractErrorMessage(props);
    return _react2.default.createElement(
      'div',
      { className: 'form-group' },
      _react2.default.createElement(
        'div',
        {
          className: '' + props.gridClassName + (errorMessage !== '' ? ' has-error' : '')
        },
        _react2.default.createElement(
          'label',
          { className: props.labelClassName, htmlFor: props.id },
          props.label,
          _react2.default.createElement('input', {
            className: props.fieldClassName,
            id: props.id,
            type: props.type,
            placeholder: props.placeholder,
            value: props.value,
            onChange: function onChange(event) {
              return onChangeWrapper(event, props);
            },
            disabled: props.disabled,
            maxLength: props.maxLength
          })
        ),
        errorMessage !== '' ? _react2.default.createElement(
          'span',
          { className: 'error text-danger' },
          _react2.default.createElement('i', { className: 'fa fa-exclamation-triangle' }),
          errorMessage
        ) : ''
      )
    );
  };

  InputComponent.propTypes = {
    id: _propTypes2.default.string,
    labelClassName: _propTypes2.default.string,
    required: _propTypes2.default.bool,
    validationError: _propTypes2.default.bool,
    validationErrorMessage: _propTypes2.default.string,
    gridClassName: _propTypes2.default.string,
    fieldClassName: _propTypes2.default.string,
    serverError: _propTypes2.default.bool,
    serverErrorMessage: _propTypes2.default.string,
    label: _propTypes2.default.string,
    type: _propTypes2.default.any,
    placeholder: _propTypes2.default.string,
    value: _propTypes2.default.any,
    onChange: _propTypes2.default.func,
    disabled: _propTypes2.default.bool,
    maxLength: _propTypes2.default.number,
    allowCharacters: _propTypes2.default.instanceOf(RegExp)
  };
  exports.default = InputComponent;
});