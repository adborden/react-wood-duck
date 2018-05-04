(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './GlobalHeaderAction', './ProfileAvatar'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./GlobalHeaderAction'), require('./ProfileAvatar'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.GlobalHeaderAction, global.ProfileAvatar);
    global.GlobalHeader = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _GlobalHeaderAction, _ProfileAvatar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _GlobalHeaderAction2 = _interopRequireDefault(_GlobalHeaderAction);

  var _ProfileAvatar2 = _interopRequireDefault(_ProfileAvatar);

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

  var logo = 'CWDS';
  var searchIcon = function searchIcon() {
    return _react2.default.createElement('i', { className: 'fa fa-search' });
  };
  var addIcon = function addIcon() {
    return _react2.default.createElement('i', { className: 'fa fa-plus' });
  };
  var notificationIcon = function notificationIcon() {
    return _react2.default.createElement('i', { className: 'fa fa-bell' });
  };

  var GlobalHeader = function (_React$Component) {
    _inherits(GlobalHeader, _React$Component);

    function GlobalHeader() {
      _classCallCheck(this, GlobalHeader);

      return _possibleConstructorReturn(this, (GlobalHeader.__proto__ || Object.getPrototypeOf(GlobalHeader)).apply(this, arguments));
    }

    _createClass(GlobalHeader, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            logoCallback = _props.logoCallback,
            profileId = _props.profileId,
            profileName = _props.profileName,
            profileAvatar = _props.profileAvatar,
            searchCallback = _props.searchCallback,
            addNewCallback = _props.addNewCallback,
            notificationsCallback = _props.notificationsCallback,
            logoutCallback = _props.logoutCallback;

        return _react2.default.createElement(
          'header',
          { role: 'banner' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'nav',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-1' },
                _react2.default.createElement(
                  'div',
                  { className: 'logo' },
                  _react2.default.createElement(
                    'button',
                    {
                      className: 'btn btn-link',
                      type: 'button',
                      onClick: logoCallback
                    },
                    logo
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-11' },
                _react2.default.createElement(
                  'div',
                  { className: 'pull-right' },
                  _react2.default.createElement(
                    'ul',
                    { className: 'header-actions' },
                    _react2.default.createElement(_GlobalHeaderAction2.default, {
                      icon: searchIcon(),
                      ariaLabel: 'search',
                      callback: searchCallback,
                      profileId: profileId
                    }),
                    _react2.default.createElement(_GlobalHeaderAction2.default, {
                      icon: addIcon(),
                      ariaLabel: 'add new',
                      callback: addNewCallback,
                      profileId: profileId
                    }),
                    _react2.default.createElement(_GlobalHeaderAction2.default, {
                      icon: notificationIcon(),
                      ariaLabel: 'notifications',
                      callback: notificationsCallback,
                      profileId: profileId
                    }),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'p',
                        { className: 'profile' },
                        ' ',
                        _react2.default.createElement(
                          'a',
                          { href: '#/' },
                          profileName
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(_ProfileAvatar2.default, {
                        profileId: profileId,
                        profileAvatar: profileAvatar,
                        logoutCallback: logoutCallback
                      })
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);

    return GlobalHeader;
  }(_react2.default.Component);

  GlobalHeader.propTypes = {
    /** callback for logo (CWDS) */
    logoCallback: _propTypes2.default.func,
    /** profile name / user name */
    profileName: _propTypes2.default.string,
    /** profile avatar */
    profileAvatar: _propTypes2.default.node,
    /** profile id OR user id if a user is logged in */
    profileId: _propTypes2.default.string,
    /** callback to logout user */
    logoutCallback: _propTypes2.default.func,
    /** callback to customize search functionality */
    searchCallback: _propTypes2.default.func,
    /** callback to customize 'Add New' functionality */
    addNewCallback: _propTypes2.default.func,
    /** notification callback to show notifications */
    notificationsCallback: _propTypes2.default.func
  };

  GlobalHeader.defaultProps = {
    profileName: ''
  };

  exports.default = GlobalHeader;
});