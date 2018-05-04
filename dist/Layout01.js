(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './GlobalHeader.js', './PageHeader.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./GlobalHeader.js'), require('./PageHeader.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.GlobalHeader, global.PageHeader);
    global.Layout01 = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _GlobalHeader, _PageHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

  var _PageHeader2 = _interopRequireDefault(_PageHeader);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Layout01 = function (_React$Component) {
    _inherits(Layout01, _React$Component);

    function Layout01() {
      _classCallCheck(this, Layout01);

      return _possibleConstructorReturn(this, (Layout01.__proto__ || Object.getPrototypeOf(Layout01)).apply(this, arguments));
    }

    _createClass(Layout01, [{
      key: 'render',
      value: function render() {
        var globalHeaderProps = this.props.globalHeaderProps;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_GlobalHeader2.default, globalHeaderProps),
          _react2.default.createElement(_PageHeader2.default, null),
          _react2.default.createElement(
            'div',
            null,
            this.props.children
          )
        );
      }
    }]);

    return Layout01;
  }(_react2.default.Component);

  Layout01.propTypes = {
    globalHeaderProps: _propTypes2.default.object,
    children: _propTypes2.default.any
  };
  Layout01.defaultProps = {};

  exports.default = Layout01;
});