(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-select'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-select'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactSelect);
    global.DropDownField = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactSelect2 = _interopRequireDefault(_reactSelect);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var DropDownField = function DropDownField(props) {
    return _react2.default.createElement(
      'div',
      { className: 'form-group' },
      _react2.default.createElement(
        'div',
        { className: props.gridClassName },
        _react2.default.createElement(
          'label',
          null,
          props.label
        ),
        _react2.default.createElement(_reactSelect2.default, {
          value: props.selectedOption,
          id: props.id,
          onChange: props.onChange,
          placeholder: '',
          className: props.selectClassName,
          options: props.options
        })
      )
    );
  };

  DropDownField.propTypes = {
    options: _propTypes2.default.array,
    id: _propTypes2.default.string,
    selectedOption: _propTypes2.default.any,
    onChange: _propTypes2.default.func,
    placeholder: _propTypes2.default.string,
    gridClassName: _propTypes2.default.string,
    label: _propTypes2.default.string,
    selectClassName: _propTypes2.default.string
  };

  DropDownField.defaultpropTypes = {
    label: 'Select DropDown',
    selectClassName: 'reusable-select'
  };

  exports.default = DropDownField;
});