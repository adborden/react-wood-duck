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
    global.TextArea = mod.exports;
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

  var TextArea = function TextArea(props) {
    return _react2.default.createElement(
      'div',
      { className: 'form-group' },
      _react2.default.createElement(
        'div',
        { className: props.gridClassName },
        _react2.default.createElement(
          'label',
          { className: 'form-label', htmlFor: props.name },
          props.label,
          _react2.default.createElement('textarea', {
            id: props.id,
            className: props.labelClassName,
            style: props.resize ? null : { resize: 'none' },
            name: props.name,
            rows: props.rows,
            value: props.value,
            onChange: props.handleOnChange,
            placeholder: props.placeholder
          })
        )
      )
    );
  };

  TextArea.propTypes = {
    id: _propTypes2.default.string,
    label: _propTypes2.default.string.isRequired,
    rows: _propTypes2.default.number.isRequired,
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired,
    labelClassName: _propTypes2.default.string,
    gridClassName: _propTypes2.default.string,
    resize: _propTypes2.default.bool,
    placeholder: _propTypes2.default.string,
    handleOnChange: _propTypes2.default.func
  };

  exports.default = TextArea;
});