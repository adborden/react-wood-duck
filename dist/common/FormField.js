(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'classnames', '../common/ErrorMessages', 'prop-types', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('classnames'), require('../common/ErrorMessages'), require('prop-types'), require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classnames, global.ErrorMessages, global.propTypes, global.react);
    global.FormField = mod.exports;
  }
})(this, function (exports, _classnames, _ErrorMessages, _propTypes, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _classnames2 = _interopRequireDefault(_classnames);

  var _ErrorMessages2 = _interopRequireDefault(_ErrorMessages);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var FormField = function FormField(_ref) {
    var children = _ref.children,
        errors = _ref.errors,
        gridClassName = _ref.gridClassName,
        labelClassName = _ref.labelClassName,
        htmlFor = _ref.htmlFor,
        label = _ref.label,
        required = _ref.required;

    var emptyArrayLength = 0;
    var hasErrors = errors && errors.length > emptyArrayLength;
    var gridClassNames = (0, _classnames2.default)(gridClassName, {
      'input-error': hasErrors
    });
    var labelClassNames = (0, _classnames2.default)(labelClassName, { 'input-error-label': hasErrors }, { required: required });
    return _react2.default.createElement(
      'div',
      { className: gridClassNames },
      _react2.default.createElement(
        'label',
        { htmlFor: htmlFor, className: labelClassNames },
        label
      ),
      children,
      _react2.default.createElement(_ErrorMessages2.default, { ariaDescribedBy: htmlFor, errors: errors })
    );
  };

  FormField.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
    errors: _propTypes2.default.array,
    gridClassName: _propTypes2.default.string,
    htmlFor: _propTypes2.default.string,
    label: _propTypes2.default.string.isRequired,
    labelClassName: _propTypes2.default.string,
    required: _propTypes2.default.bool
  };
  exports.default = FormField;
});