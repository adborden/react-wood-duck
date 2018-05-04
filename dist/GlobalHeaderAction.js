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
    global.GlobalHeaderAction = mod.exports;
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

  var GlobalHeaderIcon = function GlobalHeaderIcon(props) {
    var icon = props.icon,
        ariaLabel = props.ariaLabel,
        callback = props.callback;

    if (!callback) return null;

    return _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        'a',
        { ariaLabel: ariaLabel, href: '#/', onClick: function onClick(event) {
            return callback(event);
          } },
        icon
      )
    );
  };

  GlobalHeaderIcon.propTypes = {
    /** Icon element to render */
    icon: _propTypes2.default.node.isRequired,
    /** aria-label to use */
    ariaLabel: _propTypes2.default.string.isRequired,
    /** callback to invoke onClick */
    callback: _propTypes2.default.func
  };

  exports.default = GlobalHeaderIcon;
});