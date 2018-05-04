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
    global.Alert = mod.exports;
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

  var Alert = function Alert(props) {
    var classField = 'alert-message ' + props.alertClassName + '-message';
    var faIcons = 'fa ' + props.faIcon;
    return _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12' },
        _react2.default.createElement(
          'div',
          { className: classField },
          _react2.default.createElement(
            'div',
            { className: 'alert-icon' },
            _react2.default.createElement('i', { className: faIcons })
          ),
          _react2.default.createElement(
            'div',
            { className: 'alert-text' },
            props.children
          ),
          props.alertCross && _react2.default.createElement(
            'div',
            { className: 'alert-cross' },
            _react2.default.createElement('i', { className: 'fa fa-times' })
          )
        )
      )
    );
  };

  Alert.propTypes = {
    alertClassName: _propTypes2.default.string,
    faIcon: _propTypes2.default.string,
    alertCross: _propTypes2.default.bool,
    children: _propTypes2.default.node
  };

  Alert.defaultProps = {
    alertCross: true
  };
  exports.default = Alert;
});