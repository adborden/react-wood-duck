(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'classnames', './Button'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('classnames'), require('./Button'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.classnames, global.Button);
    global.Cards = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _classnames, _Button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _Button2 = _interopRequireDefault(_Button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Cards = function Cards(props) {
    var children = props.children,
        cardbgcolor = props.cardbgcolor,
        wrapContainer = props.wrapContainer,
        columnXsmallWidth = props.columnXsmallWidth,
        offsetMediumValue = props.offsetMediumValue,
        columnMediumWidth = props.columnMediumWidth,
        columnLargeWidth = props.columnLargeWidth;

    var classField = (0, _classnames2.default)(cardbgcolor, wrapContainer, 'col-lg-' + columnLargeWidth, 'col-md-' + columnMediumWidth, 'col-md-offset-' + offsetMediumValue, 'col-xs-' + columnXsmallWidth);
    var editClass = '';
    props.cardActionButtons ? editClass = 'edit' : editClass = '';
    return _react2.default.createElement(
      'div',
      { className: classField, id: props.id },
      _react2.default.createElement(
        'div',
        { className: 'card ' + editClass + ' double-gap-top' },
        _react2.default.createElement(
          'div',
          { className: 'card-header' },
          _react2.default.createElement(
            'span',
            null,
            props.cardHeaderText
          ),
          props.cardHeaderButton && !props.cardActionButtons ? _react2.default.createElement(_Button2.default, { btnClassName: 'default pull-right', btnName: 'Edit' }) : ''
        ),
        _react2.default.createElement(
          'div',
          { className: 'card-body' },
          children,
          props.cardActionButtons && !props.cardHeaderButton ? _react2.default.createElement(
            'div',
            { className: 'pull-right' },
            _react2.default.createElement(_Button2.default, { btnClassName: 'default', btnName: 'cancel' }),
            _react2.default.createElement(_Button2.default, { btnClassName: 'primary', btnName: 'save' })
          ) : '',
          _react2.default.createElement('div', { className: 'clearfix' })
        )
      )
    );
  };

  Cards.propTypes = {
    cardHeaderText: _propTypes2.default.string,
    children: _propTypes2.default.any,
    cardbgcolor: _propTypes2.default.string,
    columnLargeWidth: _propTypes2.default.number,
    columnMediumWidth: _propTypes2.default.number,
    offsetMediumValue: _propTypes2.default.number,
    columnXsmallWidth: _propTypes2.default.number,
    wrapContainer: _propTypes2.default.string,
    cardHeaderButton: _propTypes2.default.bool,
    cardActionButtons: _propTypes2.default.bool,
    style: _propTypes2.default.string,
    id: _propTypes2.default.any
  };

  Cards.defaultProps = {
    cardbgcolor: 'transparent',
    columnLargeWidth: 12,
    columnMediumWidth: 12,
    offsetMediumValue: 0,
    columnXsmallWidth: 12,
    wrapContainer: 'container-fluid',
    cardActionButtons: false,
    cardHeaderButton: false
  };

  exports.default = Cards;
});