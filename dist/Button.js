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
    global.Button = mod.exports;
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

  var Button = function Button(props) {
    var btnClass = 'btn btn-' + props.btnClassName;
    return _react2.default.createElement(
      'button',
      {
        className: btnClass,
        disabled: props.disabled,
        onClick: props.onClick,
        id: props.id
      },
      props.btnName
    );
  };

  Button.propTypes = {
    btnClassName: _propTypes2.default.string,
    btnName: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    id: _propTypes2.default.bool,
    onClick: _propTypes2.default.func
  };

  exports.default = Button;
});