(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'classnames', './PreIcon', './PostIcon', './Link'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('classnames'), require('./PreIcon'), require('./PostIcon'), require('./Link'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.classnames, global.PreIcon, global.PostIcon, global.Link);
    global.NavLink = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _classnames, _PreIcon, _PostIcon, _Link) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _PreIcon2 = _interopRequireDefault(_PreIcon);

  var _PostIcon2 = _interopRequireDefault(_PostIcon);

  var _Link2 = _interopRequireDefault(_Link);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var NavLink = function NavLink(props) {
    var activeNavLinkClassName = props.active ? 'active-navlink' : 'inactive-navlink';
    var indentationClassName = 'indent-level' + props.indentationLevel;
    return _react2.default.createElement(
      'li',
      { className: 'navlink', key: props.text },
      _react2.default.createElement('span', {
        className: (0, _classnames2.default)(activeNavLinkClassName, indentationClassName)
      }),
      _react2.default.createElement(_PreIcon2.default, { icon: props.preIcon }),
      _react2.default.createElement(_Link2.default, {
        href: props.href,
        text: props.text,
        active: props.active,
        clickHandler: props.clickHandler
      }),
      _react2.default.createElement(_PostIcon2.default, { icon: props.postIcon }),
      props.children
    );
  };

  NavLink.propTypes = {
    /** NavLink Text  */
    text: _propTypes2.default.string.isRequired,
    /** NavLink url/href */
    href: _propTypes2.default.string.isRequired,
    /** Pre Icon css class name(s) */
    preIcon: _propTypes2.default.string,
    /** Post Icon css class name(s) */
    postIcon: _propTypes2.default.string,
    /** Indicates if current NavLink is actively selected */
    active: _propTypes2.default.bool,
    /** Hyperlink On Click Handler. This can be used to indicate actively selected NavLink. */
    clickHandler: _propTypes2.default.func,
    /** It is used to align nested Navigation links */
    indentationLevel: _propTypes2.default.number,
    /** This property is used to display nested elements under NavLink  */
    children: _propTypes2.default.node
  };

  NavLink.defaultProps = {
    active: false,
    indentationLevel: 0
  };

  exports.default = NavLink;
});