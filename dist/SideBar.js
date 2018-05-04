(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react-overlays/lib/AutoAffix', 'classnames', 'prop-types', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react-overlays/lib/AutoAffix'), require('classnames'), require('prop-types'), require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.AutoAffix, global.classnames, global.propTypes, global.react);
    global.SideBar = mod.exports;
  }
})(this, function (exports, _AutoAffix, _classnames, _propTypes, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _AutoAffix2 = _interopRequireDefault(_AutoAffix);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var SideBar = function SideBar(props) {
    var children = props.children;

    var classField = (0, _classnames2.default)('side-bar');
    if (!children || children.length === 0) {
      return null;
    } else {
      return _react2.default.createElement(
        _AutoAffix2.default,
        { viewportOffsetTop: 85 },
        _react2.default.createElement(
          'div',
          { className: classField, 'aria-label': 'Side Bar' },
          children
        )
      );
    }
  };

  SideBar.propTypes = {
    children: _propTypes2.default.node
  };

  exports.default = SideBar;
});