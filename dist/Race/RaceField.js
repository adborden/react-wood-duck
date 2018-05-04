(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'prop-types', 'react', '../common/CheckboxField', '../common/SelectField'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('prop-types'), require('react'), require('../common/CheckboxField'), require('../common/SelectField'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.CheckboxField, global.SelectField);
    global.RaceField = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _CheckboxField, _SelectField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _CheckboxField2 = _interopRequireDefault(_CheckboxField);

  var _SelectField2 = _interopRequireDefault(_SelectField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var RaceField = function RaceField(_ref) {
    var personId = _ref.personId,
        onRaceChange = _ref.onRaceChange,
        onRaceDetailChange = _ref.onRaceDetailChange,
        race = _ref.race,
        raceDetail = _ref.raceDetail,
        raceDetailOptions = _ref.raceDetailOptions,
        checked = _ref.checked,
        disabled = _ref.disabled;
    return _react2.default.createElement(
      'div',
      { className: 'half-gap-bottom' },
      _react2.default.createElement(_CheckboxField2.default, {
        checked: checked,
        disabled: disabled,
        id: 'participant-' + personId + '-race-' + race.replace(/ /gi, '_'),
        label: race,
        onChange: function onChange(_ref2) {
          var checked = _ref2.target.checked;
          return onRaceChange(race, checked);
        },
        value: race
      }),
      checked && Boolean(raceDetailOptions.length) && _react2.default.createElement(
        _SelectField2.default,
        {
          id: 'participant-' + personId + '-' + race.replace(/ /gi, '_') + '-race-detail',
          label: '',
          value: raceDetail,
          onChange: function onChange(_ref3) {
            var value = _ref3.target.value;
            return onRaceDetailChange(race, value);
          }
        },
        _react2.default.createElement('option', { key: '', value: '' }),
        raceDetailOptions.map(function (_ref4) {
          var label = _ref4.label,
              value = _ref4.value;
          return _react2.default.createElement(
            'option',
            { key: value, value: value },
            label
          );
        })
      )
    );
  };
  RaceField.propTypes = {
    checked: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    onRaceChange: _propTypes2.default.func,
    onRaceDetailChange: _propTypes2.default.func,
    personId: _propTypes2.default.string,
    race: _propTypes2.default.string,
    raceDetail: _propTypes2.default.string,
    raceDetailOptions: _propTypes2.default.array
  };

  exports.default = RaceField;
});