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
    global.NavLinks = mod.exports;
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

  var NavLinks = function NavLinks(props) {
    var children = props.children,
        nested = props.nested;

    if (!children || children.length === 0) {
      return null;
    }
    var navLinks = _react2.default.createElement(
      'ul',
      { className: 'nav nav-stacked' },
      children
    );
    if (nested) {
      return navLinks;
    } else {
      return _react2.default.createElement(
        'nav',
        { className: 'row', 'aria-label': 'Main Content Navigation Menu' },
        navLinks
      );
    }
  };

  NavLinks.propTypes = {
    /** Component(s) to be rendered under NavLinks. Usually NavLink component(s) **/
    children: _propTypes2.default.node,
    /** Is this NavLinks component nested inside another NavLinks/NavLink component **/
    nested: _propTypes2.default.bool
  };

  NavLinks.defaultProps = {
    nested: false
  };

  exports.default = NavLinks;
});