(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './GlobalHeader.js', './PageHeader.js', './SideBar.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./GlobalHeader.js'), require('./PageHeader.js'), require('./SideBar.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.GlobalHeader, global.PageHeader, global.SideBar);
    global.Layout03 = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _GlobalHeader, _PageHeader, _SideBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

  var _PageHeader2 = _interopRequireDefault(_PageHeader);

  var _SideBar2 = _interopRequireDefault(_SideBar);

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

  var Layout03 = function (_React$Component) {
    _inherits(Layout03, _React$Component);

    function Layout03() {
      _classCallCheck(this, Layout03);

      return _possibleConstructorReturn(this, (Layout03.__proto__ || Object.getPrototypeOf(Layout03)).apply(this, arguments));
    }

    _createClass(Layout03, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            globalHeaderProps = _props.globalHeaderProps,
            sideBarContent = _props.sideBarContent;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_GlobalHeader2.default, globalHeaderProps),
          _react2.default.createElement(_PageHeader2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-lg-3' },
                _react2.default.createElement(
                  _SideBar2.default,
                  null,
                  sideBarContent
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-lg-9' },
                _react2.default.createElement(
                  'div',
                  null,
                  this.props.children
                )
              )
            )
          )
        );
      }
    }]);

    return Layout03;
  }(_react2.default.Component);

  Layout03.propTypes = {
    globalHeaderProps: _propTypes2.default.object,
    children: _propTypes2.default.any,
    sideBarContent: _propTypes2.default.node
  };

  exports.default = Layout03;
});