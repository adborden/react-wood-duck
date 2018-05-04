(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Table = mod.exports;
  }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Table = function Table(props) {
    return _react2.default.createElement(
      "table",
      { className: "table table-hover table-striped" },
      _react2.default.createElement(
        "caption",
        null,
        "Optional table caption."
      ),
      _react2.default.createElement(
        "thead",
        null,
        _react2.default.createElement(
          "tr",
          null,
          _react2.default.createElement(
            "th",
            null,
            "#"
          ),
          _react2.default.createElement(
            "th",
            null,
            "First Name"
          ),
          _react2.default.createElement(
            "th",
            null,
            "Last Name"
          ),
          _react2.default.createElement(
            "th",
            null,
            "Username"
          )
        )
      ),
      _react2.default.createElement(
        "tbody",
        null,
        _react2.default.createElement(
          "tr",
          null,
          _react2.default.createElement(
            "th",
            { scope: "row" },
            "1"
          ),
          _react2.default.createElement(
            "td",
            null,
            "Mark"
          ),
          _react2.default.createElement(
            "td",
            null,
            "Otto"
          ),
          _react2.default.createElement(
            "td",
            null,
            "@mdo"
          )
        ),
        _react2.default.createElement(
          "tr",
          null,
          _react2.default.createElement(
            "th",
            { scope: "row" },
            "2"
          ),
          _react2.default.createElement(
            "td",
            null,
            "Jacob"
          ),
          _react2.default.createElement(
            "td",
            null,
            "Thornton"
          ),
          _react2.default.createElement(
            "td",
            null,
            "@fat"
          )
        ),
        _react2.default.createElement(
          "tr",
          null,
          _react2.default.createElement(
            "th",
            { scope: "row" },
            "3"
          ),
          _react2.default.createElement(
            "td",
            null,
            "Larry"
          ),
          _react2.default.createElement(
            "td",
            null,
            "the Bird"
          ),
          _react2.default.createElement(
            "td",
            null,
            "@twitter"
          )
        )
      )
    );
  };

  exports.default = Table;
});