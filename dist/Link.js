(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'classnames'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('classnames'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.classnames);
    global.Link = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _classnames) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Link = function Link(props) {
    var text = props.text,
        href = props.href,
        active = props.active,
        clickHandler = props.clickHandler;

    var classes = (0, _classnames2.default)({ link: true, active: active });
    return _react2.default.createElement(
      'a',
      {
        href: href,
        className: classes,
        onClick: function onClick(event) {
          return clickHandler(props.href, event);
        }
      },
      text
    );
  };

  Link.propTypes = {
    /** NavLink Text  */
    text: _propTypes2.default.string.isRequired,
    /** NavLink url/href */
    href: _propTypes2.default.string.isRequired,
    /** Indicates if current NavLink is actively selected */
    active: _propTypes2.default.bool,
    /** Hyperlink On Click Handler. This can be used to indicate actively selected NavLink. */
    clickHandler: _propTypes2.default.func
  };

  Link.defaultProps = {
    active: false
  };

  exports.default = Link;
});