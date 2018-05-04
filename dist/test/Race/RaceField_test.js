(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['../../Race/RaceField', 'react', 'enzyme', './../EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('../../Race/RaceField'), require('react'), require('enzyme'), require('./../EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.RaceField, global.react, global.enzyme, global.EnzymeSetup);
    global.RaceField_test = mod.exports;
  }
})(this, function (_RaceField, _react, _enzyme) {
  'use strict';

  var _RaceField2 = _interopRequireDefault(_RaceField);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('RaceField', function () {
    function renderRaceField(_ref) {
      var personId = _ref.personId,
          _ref$checked = _ref.checked,
          checked = _ref$checked === undefined ? false : _ref$checked,
          _ref$disabled = _ref.disabled,
          disabled = _ref$disabled === undefined ? false : _ref$disabled,
          _ref$race = _ref.race,
          race = _ref$race === undefined ? 'Native Alien' : _ref$race,
          raceDetail = _ref.raceDetail,
          _ref$raceDetailOption = _ref.raceDetailOptions,
          raceDetailOptions = _ref$raceDetailOption === undefined ? [] : _ref$raceDetailOption,
          onRaceChange = _ref.onRaceChange,
          onRaceDetailChange = _ref.onRaceDetailChange;

      var props = {
        personId: personId,
        checked: checked,
        disabled: disabled,
        race: race,
        raceDetail: raceDetail,
        raceDetailOptions: raceDetailOptions,
        onRaceChange: onRaceChange,
        onRaceDetailChange: onRaceDetailChange
      };
      return (0, _enzyme.shallow)(_react2.default.createElement(_RaceField2.default, props));
    }

    it('renders the checkbox', function () {
      var race = 'Black or African';
      var component = renderRaceField({
        personId: '123',
        race: race,
        checked: true,
        disabled: true
      });
      var checkbox = component.find('CheckboxField[id="participant-123-race-Black_or_African"]');
      expect(checkbox.exists()).toEqual(true);
      expect(checkbox.props().checked).toEqual(true);
      expect(checkbox.props().disabled).toEqual(true);
      expect(checkbox.props().value).toEqual(race);
      expect(checkbox.props().label).toEqual(race);
    });

    it('fires on race change when race checkbox is changed', function () {
      var onRaceChange = jasmine.createSpy('onRaceChange');
      var race = 'Black or African';
      var component = renderRaceField({ personId: '123', race: race, onRaceChange: onRaceChange });
      component.find('CheckboxField[id="participant-123-race-Black_or_African"]').simulate('change', { target: { checked: true } });
      expect(onRaceChange).toHaveBeenCalledWith(race, true);
    });

    it('renders the select field for race detail when race is checked', function () {
      var raceDetail = 'Ethopian';
      var race = 'Black or African';
      var component = renderRaceField({
        personId: '123',
        race: race,
        raceDetail: raceDetail,
        raceDetailOptions: ['European'],
        checked: true
      });
      var select = component.find('SelectField[id="participant-123-Black_or_African-race-detail"]');
      expect(select.exists()).toEqual(true);
      expect(select.props().label).toEqual('');
      expect(select.props().value).toEqual(raceDetail);
    });

    it('does not render select field for race detail when race is unchecked', function () {
      var component = renderRaceField({ checked: false });
      expect(component.find('SelectField').exists()).toEqual(false);
    });

    it('fires on race deatil change when race detail select is changed', function () {
      var onRaceDetailChange = jasmine.createSpy('onRaceDetailChange');
      var race = 'Black or African';
      var raceDetail = 'Ethopian';
      var component = renderRaceField({
        onRaceDetailChange: onRaceDetailChange,
        personId: '123',
        checked: true,
        race: race,
        raceDetailOptions: ['European']
      });
      component.find('SelectField').simulate('change', { target: { value: raceDetail } });
      expect(onRaceDetailChange).toHaveBeenCalledWith(race, raceDetail);
    });

    it('renders the race detail options', function () {
      var field = renderRaceField({
        checked: true,
        raceDetailOptions: [{ value: '1' }, { value: '2' }, { value: '3' }]
      }).find('SelectField');
      expect(field.childAt(0).props().value).toEqual('');
      expect(field.childAt(1).props().value).toEqual('1');
      expect(field.childAt(2).props().value).toEqual('2');
      expect(field.childAt(3).props().value).toEqual('3');
    });

    it('does not render the race detail select when no options', function () {
      var field = renderRaceField({
        checked: true,
        raceDetailOptions: []
      }).find('SelectField');
      expect(field.exists()).toEqual(false);
    });
  });
});