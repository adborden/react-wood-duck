(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'prop-types', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('prop-types'), require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react);
    global.ErrorMessages = mod.exports;
  }
})(this, function (exports, _propTypes, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var ErrorMessages = function ErrorMessages(_ref) {
    var ariaDescribedBy = _ref.ariaDescribedBy,
        errors = _ref.errors;
    return _react2.default.createElement(
      'div',
      null,
      errors && errors.map(function (error, index) {
        return _react2.default.createElement(
          'span',
          {
            key: 'error-' + index,
            className: 'input-error-message',
            role: 'alert',
            'aria-describedby': ariaDescribedBy
          },
          error
        );
      })
    );
  };

  ErrorMessages.propTypes = {
    ariaDescribedBy: _propTypes2.default.string,
    errors: _propTypes2.default.array
  };
  exports.default = ErrorMessages;
});