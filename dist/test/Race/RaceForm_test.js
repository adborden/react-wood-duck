(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../../Race/RaceForm', './../EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../../Race/RaceForm'), require('./../EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.RaceForm, global.EnzymeSetup);
    global.RaceForm_test = mod.exports;
  }
})(this, function (_react, _enzyme, _RaceForm) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _RaceForm2 = _interopRequireDefault(_RaceForm);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  describe('RaceForm', function () {
    function renderRaceForm(_ref) {
      var onRaceChange = _ref.onRaceChange,
          onRaceDetailChange = _ref.onRaceDetailChange,
          personId = _ref.personId,
          _ref$raceDetails = _ref.raceDetails,
          raceDetails = _ref$raceDetails === undefined ? {} : _ref$raceDetails,
          _ref$raceDetailOption = _ref.raceDetailOptions,
          raceDetailOptions = _ref$raceDetailOption === undefined ? {} : _ref$raceDetailOption,
          races = _ref.races,
          _ref$racesDisabled = _ref.racesDisabled,
          racesDisabled = _ref$racesDisabled === undefined ? false : _ref$racesDisabled;

      var props = {
        onRaceChange: onRaceChange,
        onRaceDetailChange: onRaceDetailChange,
        racesDisabled: racesDisabled,
        personId: personId,
        raceDetailOptions: raceDetailOptions,
        raceDetails: raceDetails,
        races: _extends({
          White: false,
          'Black or African American': false,
          Asian: false,
          'American Indian or Alaska Native': false,
          'Native Hawaiian or Other Pacific Islander': false,
          Unknown: false,
          Abandoned: false,
          'Declined to answer': false
        }, races)
      };
      return (0, _enzyme.shallow)(_react2.default.createElement(_RaceForm2.default, props));
    }

    it('it disables the race fields, except "Unknown" if it is checked', function () {
      var component = renderRaceForm({
        racesDisabled: true,
        races: { Unknown: true }
      });
      expect(component.find('RaceField[race="White"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Black or African American"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Asian"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="American Indian or Alaska Native"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Native Hawaiian or Other Pacific Islander"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Unknown"]').props().disabled).toEqual(false);
      expect(component.find('RaceField[race="Abandoned"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Declined to answer"]').props().disabled).toEqual(true);
    });

    it('it disables the race fields, except "Abandoned" if it is checked', function () {
      var component = renderRaceForm({
        racesDisabled: true,
        races: { Abandoned: true }
      });
      expect(component.find('RaceField[race="White"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Black or African American"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Asian"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="American Indian or Alaska Native"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Native Hawaiian or Other Pacific Islander"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Unknown"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Abandoned"]').props().disabled).toEqual(false);
      expect(component.find('RaceField[race="Declined to answer"]').props().disabled).toEqual(true);
    });

    it('it disables the race fields, except "Declined to answer" if it is checked', function () {
      var component = renderRaceForm({
        racesDisabled: true,
        races: { 'Declined to answer': true }
      });
      expect(component.find('RaceField[race="White"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Black or African American"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Asian"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="American Indian or Alaska Native"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Native Hawaiian or Other Pacific Islander"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Unknown"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Abandoned"]').props().disabled).toEqual(true);
      expect(component.find('RaceField[race="Declined to answer"]').props().disabled).toEqual(false);
    });

    it('renders the white race field', function () {
      var onRaceChange = jasmine.createSpy('onRaceChange');
      var onRaceDetailChange = jasmine.createSpy('onRaceDetailChange');
      var raceDetailOptions = {
        White: [{ label: 'Race Detail 1', value: 'race_detail_1' }, { label: 'Race Detail 2', value: 'race_detail_2' }]
      };
      var raceDetails = { White: 'selected value' };
      var component = renderRaceForm({
        onRaceChange: onRaceChange,
        onRaceDetailChange: onRaceDetailChange,
        personId: 'person-123',
        raceDetailOptions: raceDetailOptions,
        raceDetails: raceDetails
      }).find('RaceField[race="White"]');
      expect(component.exists()).toEqual(true);
      expect(component.props().onRaceChange).toEqual(onRaceChange);
      expect(component.props().onRaceDetailChange).toEqual(onRaceDetailChange);
      expect(component.props().personId).toEqual('person-123');
      expect(component.props().raceDetailOptions).toEqual([{ label: 'Race Detail 1', value: 'race_detail_1' }, { label: 'Race Detail 2', value: 'race_detail_2' }]);
      expect(component.props().raceDetail).toEqual('selected value');
      expect(component.props().checked).toEqual(false);
    });

    it('renders the white race field as checked', function () {
      var component = renderRaceForm({
        races: { White: true }
      }).find('RaceField[race="White"]');
      expect(component.props().checked).toEqual(true);
    });

    it('renders the african american race field', function () {
      var onRaceChange = jasmine.createSpy('onRaceChange');
      var onRaceDetailChange = jasmine.createSpy('onRaceDetailChange');
      var raceDetailOptions = {
        'Black or African American': [{ label: 'Race Detail 1', value: 'race_detail_1' }, { label: 'Race Detail 2', value: 'race_detail_2' }]
      };
      var raceDetails = { 'Black or African American': 'selected value' };
      var component = renderRaceForm({
        onRaceChange: onRaceChange,
        onRaceDetailChange: onRaceDetailChange,
        personId: 'person-123',
        raceDetailOptions: raceDetailOptions,
        raceDetails: raceDetails
      }).find('RaceField[race="Black or African American"]');
      expect(component.exists()).toEqual(true);
      expect(component.props().onRaceDetailChange).toEqual(onRaceDetailChange);
      expect(component.props().personId).toEqual('person-123');
      expect(component.props().raceDetailOptions).toEqual([{ label: 'Race Detail 1', value: 'race_detail_1' }, { label: 'Race Detail 2', value: 'race_detail_2' }]);
      expect(component.props().raceDetail).toEqual('selected value');
      expect(component.props().checked).toEqual(false);
    });

    it('renders the african american field as checked', function () {
      var component = renderRaceForm({
        races: { 'Black or African American': true }
      }).find('RaceField[race="Black or African American"]');
      expect(component.props().checked).toEqual(true);
    });

    it('renders the asian race field', function () {
      var onRaceChange = jasmine.createSpy('onRaceChange');
      var onRaceDetailChange = jasmine.createSpy('onRaceDetailChange');
      var raceDetailOptions = {
        Asian: [{ label: 'Race Detail 1', value: 'race_detail_1' }, { label: 'Race Detail 2', value: 'race_detail_2' }]
      };
      var raceDetails = { Asian: 'selected value' };
      var component = renderRaceForm({
        onRaceChange: onRaceChange,
        onRaceDetailChange: onRaceDetailChange,
        personId: 'person-123',
        raceDetailOptions: raceDetailOptions,
        raceDetails: raceDetails
      }).find('RaceField[race="Asian"]');
      expect(component.exists()).toEqual(true);
      expect(component.props().onRaceChange).toEqual(onRaceChange);
      expect(component.props().onRaceDetailChange).toEqual(onRaceDetailChange);
      expect(component.props().personId).toEqual('person-123');
      expect(component.props().raceDetailOptions).toEqual([{ label: 'Race Detail 1', value: 'race_detail_1' }, { label: 'Race Detail 2', value: 'race_detail_2' }]);
      expect(component.props().raceDetail).toEqual('selected value');
      expect(component.props().checked).toEqual(false);
    });

    it('renders the asian field as checked', function () {
      var component = renderRaceForm({
        races: { Asian: true }
      }).find('RaceField[race="Asian"]');
      expect(component.props().checked).toEqual(true);
    });

    it('renders the American Indian or Alaska Native race field', function () {
      var onRaceChange = jasmine.createSpy('onRaceChange');
      var onRaceDetailChange = jasmine.createSpy('onRaceDetailChange');
      var raceDetailOptions = {
        'American Indian or Alaska Native': [{ label: 'Race Detail 1', value: 'race_detail_1' }, { label: 'Race Detail 2', value: 'race_detail_2' }]
      };
      var raceDetails = {
        'American Indian or Alaska Native': 'selected value'
      };
      var component = renderRaceForm({
        onRaceChange: onRaceChange,
        onRaceDetailChange: onRaceDetailChange,
        personId: 'person-123',
        raceDetailOptions: raceDetailOptions,
        raceDetails: raceDetails
      }).find('RaceField[race="American Indian or Alaska Native"]');
      expect(component.exists()).toEqual(true);
      expect(component.props().onRaceChange).toEqual(onRaceChange);
      expect(component.props().onRaceDetailChange).toEqual(onRaceDetailChange);
      expect(component.props().personId).toEqual('person-123');
      expect(component.props().raceDetailOptions).toEqual([{ label: 'Race Detail 1', value: 'race_detail_1' }, { label: 'Race Detail 2', value: 'race_detail_2' }]);
      expect(component.props().raceDetail).toEqual('selected value');
      expect(component.props().checked).toEqual(false);
    });

    it('renders the American Indian or Alaska Native field as checked', function () {
      var component = renderRaceForm({
        races: { 'American Indian or Alaska Native': true }
      }).find('RaceField[race="American Indian or Alaska Native"]');
      expect(component.props().checked).toEqual(true);
    });

    it('renders the Native Hawaiian or Other Pacific Islander race field', function () {
      var onRaceChange = jasmine.createSpy('onRaceChange');
      var onRaceDetailChange = jasmine.createSpy('onRaceDetailChange');
      var raceDetailOptions = {
        'Native Hawaiian or Other Pacific Islander': [{ label: 'Race Detail 1', value: 'race_detail_1' }, { label: 'Race Detail 2', value: 'race_detail_2' }]
      };
      var raceDetails = {
        'Native Hawaiian or Other Pacific Islander': 'selected value'
      };
      var component = renderRaceForm({
        onRaceChange: onRaceChange,
        onRaceDetailChange: onRaceDetailChange,
        personId: 'person-123',
        raceDetailOptions: raceDetailOptions,
        raceDetails: raceDetails
      }).find('RaceField[race="Native Hawaiian or Other Pacific Islander"]');
      expect(component.exists()).toEqual(true);
      expect(component.props().onRaceChange).toEqual(onRaceChange);
      expect(component.props().onRaceDetailChange).toEqual(onRaceDetailChange);
      expect(component.props().personId).toEqual('person-123');
      expect(component.props().raceDetailOptions).toEqual([{ label: 'Race Detail 1', value: 'race_detail_1' }, { label: 'Race Detail 2', value: 'race_detail_2' }]);
      expect(component.props().raceDetail).toEqual('selected value');
      expect(component.props().checked).toEqual(false);
    });

    it('renders the Native Hawaiian or Other Pacific Islander field as checked', function () {
      var component = renderRaceForm({
        races: { 'Native Hawaiian or Other Pacific Islander': true }
      }).find('RaceField[race="Native Hawaiian or Other Pacific Islander"]');
      expect(component.props().checked).toEqual(true);
    });

    it('renders the unknown race field', function () {
      var onRaceChange = jasmine.createSpy('onRaceChange');
      var component = renderRaceForm({
        onRaceChange: onRaceChange,
        personId: 'person-123'
      }).find('RaceField[race="Unknown"]');
      expect(component.exists()).toEqual(true);
      expect(component.props().personId).toEqual('person-123');
      expect(component.props().onRaceChange).toEqual(onRaceChange);
      expect(component.props().checked).toEqual(false);
    });

    it('renders the unknown field as checked', function () {
      var component = renderRaceForm({
        races: { Unknown: true }
      }).find('RaceField[race="Unknown"]');
      expect(component.props().checked).toEqual(true);
    });

    it('renders the abandoned race field', function () {
      var onRaceChange = jasmine.createSpy('onRaceChange');
      var component = renderRaceForm({
        onRaceChange: onRaceChange,
        personId: 'person-123'
      }).find('RaceField[race="Abandoned"]');
      expect(component.exists()).toEqual(true);
      expect(component.props().onRaceChange).toEqual(onRaceChange);
      expect(component.props().personId).toEqual('person-123');
      expect(component.props().checked).toEqual(false);
    });

    it('renders the abandoned field as checked', function () {
      var component = renderRaceForm({
        races: { Abandoned: true }
      }).find('RaceField[race="Abandoned"]');
      expect(component.props().checked).toEqual(true);
    });

    it('renders the decline to answer race field', function () {
      var onRaceChange = jasmine.createSpy('onRaceChange');
      var component = renderRaceForm({
        onRaceChange: onRaceChange,
        personId: 'person-123'
      }).find('RaceField[race="Declined to answer"]');
      expect(component.exists()).toEqual(true);
      expect(component.props().onRaceChange).toEqual(onRaceChange);
      expect(component.props().personId).toEqual('person-123');
      expect(component.props().checked).toEqual(false);
    });

    it('renders the Declined to answer field as checked', function () {
      var component = renderRaceForm({
        races: { 'Declined to answer': true }
      }).find('RaceField[race="Declined to answer"]');
      expect(component.props().checked).toEqual(true);
    });
  });
});