(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-datetime'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-datetime'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactDatetime);
    global.DateTimePicker = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactDatetime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

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

  var DateTimePicker = function (_React$Component) {
    _inherits(DateTimePicker, _React$Component);

    function DateTimePicker(props) {
      _classCallCheck(this, DateTimePicker);

      var _this = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, props));

      _this.state = {
        startDate: ''
      };
      _this._handleChange = _this._handleChange.bind(_this);
      _this._renderDatePicker = _this._renderDatePicker.bind(_this);
      return _this;
    }

    _createClass(DateTimePicker, [{
      key: '_handleChange',
      value: function _handleChange(e) {
        this.setState({
          startDate: e._d
        });
      }
    }, {
      key: '_renderDatePicker',
      value: function _renderDatePicker() {
        var _this2 = this;

        return _react2.default.createElement(_reactDatetime2.default, {
          value: this.state.startDate,
          onChange: function onChange(e) {
            return _this2._handleChange(e);
          },
          timeFormat: this.props.timeFormat
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          this._renderDatePicker()
        );
      }
    }]);

    return DateTimePicker;
  }(_react2.default.Component);

  DateTimePicker.propTypes = {
    timeFormat: _propTypes2.default.bool
  };

  DateTimePicker.defaultProps = {
    timeFormat: true
  };

  exports.default = DateTimePicker;
});