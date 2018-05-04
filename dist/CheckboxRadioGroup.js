(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.CheckboxRadioGroup = mod.exports;
  }
})(this, function (exports, _react, _propTypes) {
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

  var CheckboxRadioGroup = function CheckboxRadioGroup(props) {
    return _react2.default.createElement(
      'fieldset',
      { className: 'fieldset-inputs sans' },
      _react2.default.createElement(
        'legend',
        { className: 'sr-only' },
        props.label
      ),
      props.options.map(function (opt) {
        return _react2.default.createElement(
          'label',
          { key: opt },
          _react2.default.createElement('input', {
            id: props.id,
            className: props.fieldClassName,
            name: props.name,
            onChange: props.handleOnChange,
            value: opt,
            checked: props.selectedOptions.indexOf(opt) > -1,
            type: props.type
          }),
          _react2.default.createElement(
            'span',
            null,
            opt
          )
        );
      })
    );
  };

  CheckboxRadioGroup.propTypes = {
    heading: _propTypes2.default.string,
    id: _propTypes2.default.string,
    label: _propTypes2.default.string,
    fieldClassName: _propTypes2.default.string,
    type: _propTypes2.default.oneOf(['checkbox', 'radio']),
    name: _propTypes2.default.string,
    options: _propTypes2.default.array,
    selectedOptions: _propTypes2.default.array,
    handleOnChange: _propTypes2.default.func
  };

  exports.default = CheckboxRadioGroup;
});