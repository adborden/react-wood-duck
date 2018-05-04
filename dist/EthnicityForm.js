(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './common/CheckboxField', './common/SelectField'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./common/CheckboxField'), require('./common/SelectField'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.CheckboxField, global.SelectField);
    global.EthnicityForm = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _CheckboxField, _SelectField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _CheckboxField2 = _interopRequireDefault(_CheckboxField);

  var _SelectField2 = _interopRequireDefault(_SelectField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var EthnicityForm = function EthnicityForm(_ref) {
    var disableFields = _ref.disableFields,
        ethnicityDetail = _ref.ethnicityDetail,
        ethnicityDetailOptions = _ref.ethnicityDetailOptions,
        latinoOrigin = _ref.latinoOrigin,
        _onChange = _ref.onChange,
        personId = _ref.personId;
    return _react2.default.createElement(
      'div',
      { className: 'gap-top', id: 'ethnicity' },
      _react2.default.createElement(
        'fieldset',
        { className: 'fieldset-inputs' },
        _react2.default.createElement(
          'label',
          null,
          'Hispanic/Latino Origin'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              'ul',
              { className: 'unstyled-list' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'half-gap-bottom' },
                  _react2.default.createElement(_CheckboxField2.default, {
                    id: personId + '-ethnicity-yes',
                    label: 'Yes',
                    value: 'Yes',
                    checked: latinoOrigin === 'Yes',
                    disabled: disableFields && latinoOrigin !== 'Yes',
                    onChange: function onChange(_ref2) {
                      var checked = _ref2.target.checked;

                      if (checked) {
                        _onChange('hispanic_latino_origin', 'Yes');
                      } else {
                        _onChange('hispanic_latino_origin', null);
                        _onChange('ethnicity_detail', []);
                      }
                    }
                  }),
                  latinoOrigin === 'Yes' && _react2.default.createElement(
                    _SelectField2.default,
                    {
                      id: 'participant-' + personId + '-ethnicity-detail',
                      label: '',
                      value: ethnicityDetail || '',
                      onChange: function onChange(_ref3) {
                        var value = _ref3.target.value;
                        return _onChange('ethnicity_detail', [value]);
                      }
                    },
                    _react2.default.createElement('option', { key: '', value: '' }),
                    ethnicityDetailOptions.map(function (_ref4) {
                      var value = _ref4.value,
                          label = _ref4.label;
                      return _react2.default.createElement(
                        'option',
                        { key: value, value: value },
                        label
                      );
                    })
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_CheckboxField2.default, {
                  id: personId + '-ethnicity-no',
                  label: 'No',
                  value: 'No',
                  checked: latinoOrigin === 'No',
                  disabled: disableFields && latinoOrigin !== 'No',
                  onChange: function onChange(_ref5) {
                    var checked = _ref5.target.checked;

                    if (checked) {
                      _onChange('hispanic_latino_origin', 'No');
                    } else {
                      _onChange('hispanic_latino_origin', null);
                    }
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              'ul',
              { className: 'unstyled-list' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_CheckboxField2.default, {
                  id: personId + '-ethnicity-unknown',
                  label: 'Unknown',
                  value: 'Unknown',
                  checked: latinoOrigin === 'Unknown',
                  disabled: disableFields && latinoOrigin !== 'Unknown',
                  onChange: function onChange(_ref6) {
                    var checked = _ref6.target.checked;

                    if (checked) {
                      _onChange('hispanic_latino_origin', 'Unknown');
                    } else {
                      _onChange('hispanic_latino_origin', null);
                    }
                  }
                })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_CheckboxField2.default, {
                  id: personId + '-ethnicity-abandoned',
                  label: 'Abandoned',
                  value: 'Abandoned',
                  checked: latinoOrigin === 'Abandoned',
                  disabled: disableFields && latinoOrigin !== 'Abandoned',
                  onChange: function onChange(_ref7) {
                    var checked = _ref7.target.checked;

                    if (checked) {
                      _onChange('hispanic_latino_origin', 'Abandoned');
                    } else {
                      _onChange('hispanic_latino_origin', null);
                    }
                  }
                })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_CheckboxField2.default, {
                  id: personId + '-ethnicity-declined-to-answer',
                  label: 'Declined to answer',
                  value: 'Declined to answer',
                  checked: latinoOrigin === 'Declined to answer',
                  disabled: disableFields && latinoOrigin !== 'Declined to answer',
                  onChange: function onChange(_ref8) {
                    var checked = _ref8.target.checked;

                    if (checked) {
                      _onChange('hispanic_latino_origin', 'Declined to answer');
                    } else {
                      _onChange('hispanic_latino_origin', null);
                    }
                  }
                })
              )
            )
          )
        )
      )
    );
  };

  EthnicityForm.propTypes = {
    disableFields: _propTypes2.default.bool,
    ethnicityDetail: _propTypes2.default.string,
    ethnicityDetailOptions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string,
      value: _propTypes2.default.string
    })),
    latinoOrigin: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    personId: _propTypes2.default.string
  };

  exports.default = EthnicityForm;
});