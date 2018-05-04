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
    global.ProfileAvatar = mod.exports;
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

  var ProfileAvatar = function (_React$Component) {
    _inherits(ProfileAvatar, _React$Component);

    function ProfileAvatar(props) {
      _classCallCheck(this, ProfileAvatar);

      var _this = _possibleConstructorReturn(this, (ProfileAvatar.__proto__ || Object.getPrototypeOf(ProfileAvatar)).call(this, props));

      _this.state = {
        dropdownFocused: false,
        isHidden: true
      };
      _this._handleChange = _this._handleChange.bind(_this);
      _this._handleBlur = _this._handleBlur.bind(_this);
      _this._renderToggle = _this._renderToggle.bind(_this);
      return _this;
    }

    _createClass(ProfileAvatar, [{
      key: '_handleChange',
      value: function _handleChange() {
        this.setState({
          isHidden: !this.state.isHidden
        });
      }
    }, {
      key: '_handleBlur',
      value: function _handleBlur(event) {
        event.preventDefault();
        if (!this.state.dropdownFocused) {
          this.setState({
            isHidden: true
          });
        }
      }
    }, {
      key: '_renderToggle',
      value: function _renderToggle() {
        var _this2 = this;

        return _react2.default.createElement(
          'ul',
          { className: 'c_dropdown' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                href: '#/',
                onMouseOver: function onMouseOver() {
                  return _this2.setState({ dropdownFocused: true });
                },
                onFocus: function onFocus() {
                  return _this2.setState({ dropdownFocused: true });
                },
                onMouseOut: function onMouseOut() {
                  return _this2.setState({ dropdownFocused: false });
                },
                onBlur: function onBlur() {
                  return _this2.setState({ dropdownFocused: false });
                },
                onClick: function onClick(event) {
                  event.preventDefault();
                  _this2.props.logoutCallback(_this2.props.profileId, event);
                  _this2.setState({ dropdownFocused: false, isHidden: true });
                }
              },
              'Logout'
            )
          )
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            profileId = _props.profileId,
            profileAvatar = _props.profileAvatar,
            logoutCallback = _props.logoutCallback;

        if (!profileId && !logoutCallback) return null;
        return _react2.default.createElement(
          'div',
          { className: 'profile-avatar' },
          _react2.default.createElement(
            'a',
            {
              href: '#/',
              onClick: this._handleChange,
              tabIndex: '0',
              onBlur: this._handleBlur
            },
            profileAvatar
          ),
          logoutCallback && !this.state.isHidden && this._renderToggle()
        );
      }
    }]);

    return ProfileAvatar;
  }(_react2.default.Component);

  ProfileAvatar.propTypes = {
    /** profile id OR user id if a user is logged in */
    profileId: _propTypes2.default.string,
    /** profile avatar */
    profileAvatar: _propTypes2.default.node,
    /** callback for logout */
    logoutCallback: _propTypes2.default.func
  };

  ProfileAvatar.defaultProps = {
    profileAvatar: _react2.default.createElement('i', { className: 'fa fa-user' })
  };

  exports.default = ProfileAvatar;
});