(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-select'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-select'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactSelect);
    global.MultiSelect = mod.exports;
  }
})(this, function (exports, _react, _reactSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactSelect2 = _interopRequireDefault(_reactSelect);

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

  var MultiSelect = function (_React$Component) {
    _inherits(MultiSelect, _React$Component);

    function MultiSelect(props) {
      _classCallCheck(this, MultiSelect);

      var _this = _possibleConstructorReturn(this, (MultiSelect.__proto__ || Object.getPrototypeOf(MultiSelect)).call(this, props));

      _this.state = {
        value: 'green'
      };
      _this.logChange = _this.logChange.bind(_this);
      return _this;
    }

    _createClass(MultiSelect, [{
      key: 'logChange',
      value: function logChange(val) {
        console.log('Selected: ' + JSON.stringify(val));
        this.setState({ value: val });
      }
    }, {
      key: 'render',
      value: function render() {
        var options = [{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }, { value: 'three', label: 'three' }, { value: 'four', label: 'four' }, { value: 'five', label: 'five' }];
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactSelect2.default, {
            multi: true,
            simpleValue: true,
            name: 'form-field-name',
            value: this.state.value,
            options: options,
            onChange: this.logChange
          })
        );
      }
    }]);

    return MultiSelect;
  }(_react2.default.Component);

  exports.default = MultiSelect;
});