(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './RaceField'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./RaceField'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.RaceField);
    global.RaceForm = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _RaceField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _RaceField2 = _interopRequireDefault(_RaceField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var RaceForm = function RaceForm(_ref) {
    var onRaceChange = _ref.onRaceChange,
        onRaceDetailChange = _ref.onRaceDetailChange,
        racesDisabled = _ref.racesDisabled,
        personId = _ref.personId,
        raceDetailOptions = _ref.raceDetailOptions,
        raceDetails = _ref.raceDetails,
        races = _ref.races;
    return _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-md-12 gap-top' },
        _react2.default.createElement(
          'div',
          { className: 'gap-top', id: 'race' },
          _react2.default.createElement(
            'fieldset',
            { className: 'fieldset-inputs' },
            _react2.default.createElement(
              'label',
              null,
              'Race'
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
                    _react2.default.createElement(_RaceField2.default, {
                      disabled: racesDisabled,
                      personId: personId,
                      race: 'White',
                      raceDetailOptions: raceDetailOptions.White,
                      raceDetail: raceDetails.White,
                      checked: races.White,
                      onRaceChange: onRaceChange,
                      onRaceDetailChange: onRaceDetailChange
                    })
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_RaceField2.default, {
                      disabled: racesDisabled,
                      personId: personId,
                      race: 'Black or African American',
                      raceDetailOptions: raceDetailOptions['Black or African American'],
                      raceDetail: raceDetails['Black or African American'],
                      checked: races['Black or African American'],
                      onRaceChange: onRaceChange,
                      onRaceDetailChange: onRaceDetailChange
                    })
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_RaceField2.default, {
                      disabled: racesDisabled,
                      personId: personId,
                      race: 'Asian',
                      raceDetailOptions: raceDetailOptions.Asian,
                      raceDetail: raceDetails.Asian,
                      checked: races.Asian,
                      onRaceChange: onRaceChange,
                      onRaceDetailChange: onRaceDetailChange
                    })
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_RaceField2.default, {
                      disabled: racesDisabled,
                      personId: personId,
                      race: 'American Indian or Alaska Native',
                      raceDetailOptions: raceDetailOptions['American Indian or Alaska Native'],
                      raceDetail: raceDetails['American Indian or Alaska Native'],
                      checked: races['American Indian or Alaska Native'],
                      onRaceChange: onRaceChange,
                      onRaceDetailChange: onRaceDetailChange
                    })
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_RaceField2.default, {
                      disabled: racesDisabled,
                      personId: personId,
                      race: 'Native Hawaiian or Other Pacific Islander',
                      raceDetailOptions: raceDetailOptions['Native Hawaiian or Other Pacific Islander'],
                      raceDetail: raceDetails['Native Hawaiian or Other Pacific Islander'],
                      checked: races['Native Hawaiian or Other Pacific Islander'],
                      onRaceChange: onRaceChange,
                      onRaceDetailChange: onRaceDetailChange
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
                    _react2.default.createElement(_RaceField2.default, {
                      disabled: !races.Unknown && racesDisabled,
                      personId: personId,
                      race: 'Unknown',
                      raceDetailOptions: raceDetailOptions.Unknown,
                      checked: races.Unknown,
                      onRaceChange: onRaceChange
                    })
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_RaceField2.default, {
                      disabled: !races.Abandoned && racesDisabled,
                      personId: personId,
                      race: 'Abandoned',
                      raceDetailOptions: raceDetailOptions.Abandoned,
                      checked: races.Abandoned,
                      onRaceChange: onRaceChange
                    })
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_RaceField2.default, {
                      disabled: !races['Declined to answer'] && racesDisabled,
                      personId: personId,
                      race: 'Declined to answer',
                      raceDetailOptions: raceDetailOptions['Declined to answer'],
                      checked: races['Declined to answer'],
                      onRaceChange: onRaceChange
                    })
                  )
                )
              )
            )
          )
        )
      )
    );
  };

  RaceForm.propTypes = {
    onRaceChange: _propTypes2.default.func,
    onRaceDetailChange: _propTypes2.default.func,
    personId: _propTypes2.default.string,
    raceDetailOptions: _propTypes2.default.object,
    raceDetails: _propTypes2.default.object,
    races: _propTypes2.default.object,
    racesDisabled: _propTypes2.default.bool
  };

  exports.default = RaceForm;
});