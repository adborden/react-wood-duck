(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../EthnicityForm', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../EthnicityForm'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.EthnicityForm, global.EnzymeSetup);
    global.EthnicityForm_test = mod.exports;
  }
})(this, function (_react, _enzyme, _EthnicityForm) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _EthnicityForm2 = _interopRequireDefault(_EthnicityForm);

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

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  describe('EthnicityForm', function () {
    var renderPersonEthnicityForm = function renderPersonEthnicityForm(_ref) {
      var _ref$ethnicityDetailO = _ref.ethnicityDetailOptions,
          ethnicityDetailOptions = _ref$ethnicityDetailO === undefined ? [] : _ref$ethnicityDetailO,
          options = _objectWithoutProperties(_ref, ['ethnicityDetailOptions']);

      var props = _extends({ ethnicityDetailOptions: ethnicityDetailOptions }, options);
      return (0, _enzyme.shallow)(_react2.default.createElement(_EthnicityForm2.default, props));
    };

    describe('Yes checkbox', function () {
      it('renders a check box with the proper id for Yes', function () {
        var component = renderPersonEthnicityForm({ personId: '123' });
        var yesBox = component.find('CheckboxField[label="Yes"]');
        expect(yesBox.exists()).toEqual(true);
        expect(yesBox.props().id).toEqual('123-ethnicity-yes');
      });

      it('sets checked to true if latinoOrigin is Yes', function () {
        var component = renderPersonEthnicityForm({ latinoOrigin: 'Yes' });
        var yesBox = component.find('CheckboxField[label="Yes"]');
        expect(yesBox.props().checked).toEqual(true);
      });

      it('sets checked to false if latinoOrigin is not Yes', function () {
        var component = renderPersonEthnicityForm({ latinoOrigin: '' });
        var yesBox = component.find('CheckboxField[label="Yes"]');
        expect(yesBox.props().checked).toEqual(false);
      });

      it('calls onChange with the proper value when checked', function () {
        var onChange = jasmine.createSpy('onChange');
        var component = renderPersonEthnicityForm({ onChange: onChange });
        var yesBox = component.find('CheckboxField[label="Yes"]');
        yesBox.simulate('change', { target: { checked: true } });
        expect(onChange).toHaveBeenCalledWith('hispanic_latino_origin', 'Yes');
      });

      it('calls onChange with the proper value and clears ethnicity detail when unchecked', function () {
        var onChange = jasmine.createSpy('onChange');
        var component = renderPersonEthnicityForm({ onChange: onChange });
        var yesBox = component.find('CheckboxField[label="Yes"]');
        yesBox.simulate('change', { target: { checked: false } });
        expect(onChange).toHaveBeenCalledWith('hispanic_latino_origin', null);
        expect(onChange).toHaveBeenCalledWith('ethnicity_detail', []);
      });

      it('sets disabled to true if disableFields is true and the value is not Yes', function () {
        var component = renderPersonEthnicityForm({
          disableFields: true,
          latinoOrigin: ''
        });
        var yesBox = component.find('CheckboxField[label="Yes"]');
        expect(yesBox.props().disabled).toEqual(true);
      });

      it('sets disabled to false if disableFields is false and the value is Yes', function () {
        var component = renderPersonEthnicityForm({
          disableFields: true,
          latinoOrigin: 'Yes'
        });
        var yesBox = component.find('CheckboxField[label="Yes"]');
        expect(yesBox.props().disabled).toEqual(false);
      });

      describe('ethnicityDetailOptions select field', function () {
        it('does not render if latioOrigin is not set to Yes', function () {
          var component = renderPersonEthnicityForm({ latinoOrigin: '' });
          var detailSelect = component.find('SelectField');
          expect(detailSelect.exists()).toEqual(false);
        });

        it('renders with no label if latinoOrigin is set to Yes', function () {
          var component = renderPersonEthnicityForm({
            latinoOrigin: 'Yes',
            personId: '123'
          });
          var detailSelect = component.find('SelectField');
          expect(detailSelect.exists()).toEqual(true);
          expect(detailSelect.props().label).toEqual('');
          expect(detailSelect.props().value).toEqual('');
          expect(detailSelect.props().id).toEqual('participant-123-ethnicity-detail');
        });

        it('sets the value of the select to the current ethnicityDetail', function () {
          var component = renderPersonEthnicityForm({
            latinoOrigin: 'Yes',
            ethnicityDetail: 'Hispanic'
          });
          var detailSelect = component.find('SelectField');
          expect(detailSelect.exists()).toEqual(true);
          expect(detailSelect.props().value).toEqual('Hispanic');
        });

        it('calls onChange when an item is selected', function () {
          var onChange = jasmine.createSpy('onChange');
          var component = renderPersonEthnicityForm({
            latinoOrigin: 'Yes',
            onChange: onChange
          });
          var detailSelect = component.find('SelectField');
          detailSelect.simulate('change', { target: { value: 'Hispanic' } });
          expect(onChange).toHaveBeenCalledWith('ethnicity_detail', ['Hispanic']);
        });

        it('renders ethnicityDetailOptions as options for the select', function () {
          var ethnicityDetailOptions = [{ value: 'hispanic', label: 'Hispanic' }, { value: 'mexican', label: 'Mexican' }];
          var component = renderPersonEthnicityForm({
            latinoOrigin: 'Yes',
            ethnicityDetailOptions: ethnicityDetailOptions
          });
          var detailSelect = component.find('SelectField');
          var detailSelectOptions = detailSelect.children();
          expect(detailSelectOptions.at(0).props().value).toEqual('');
          expect(detailSelectOptions.at(1).props().value).toEqual('hispanic');
          expect(detailSelectOptions.at(1).children().text()).toEqual('Hispanic');
          expect(detailSelectOptions.at(2).props().value).toEqual('mexican');
          expect(detailSelectOptions.at(2).children().text()).toEqual('Mexican');
        });
      });
    });

    describe('No checkbox', function () {
      it('renders a check box with the proper id for No', function () {
        var component = renderPersonEthnicityForm({ personId: '123' });
        var noBox = component.find('CheckboxField[label="No"]');
        expect(noBox.exists()).toEqual(true);
        expect(noBox.props().id).toEqual('123-ethnicity-no');
      });

      it('sets checked to true if latinoOrigin is No', function () {
        var component = renderPersonEthnicityForm({ latinoOrigin: 'No' });
        var noBox = component.find('CheckboxField[label="No"]');
        expect(noBox.props().checked).toEqual(true);
      });

      it('sets checked to false if latinoOrigin is not No', function () {
        var component = renderPersonEthnicityForm({ latinoOrigin: '' });
        var noBox = component.find('CheckboxField[label="No"]');
        expect(noBox.props().checked).toEqual(false);
      });

      it('calls onChange with the proper value when checked', function () {
        var onChange = jasmine.createSpy('onChange');
        var component = renderPersonEthnicityForm({ onChange: onChange });
        var noBox = component.find('CheckboxField[label="No"]');
        noBox.simulate('change', { target: { checked: true } });
        expect(onChange).toHaveBeenCalledWith('hispanic_latino_origin', 'No');
      });

      it('calls onChange with the proper value when unchecked', function () {
        var onChange = jasmine.createSpy('onChange');
        var component = renderPersonEthnicityForm({ onChange: onChange });
        var noBox = component.find('CheckboxField[label="No"]');
        noBox.simulate('change', { target: { checked: false } });
        expect(onChange).toHaveBeenCalledWith('hispanic_latino_origin', null);
      });

      it('sets disabled to true if disableFields is true and the value is not No', function () {
        var component = renderPersonEthnicityForm({
          disableFields: true,
          latinoOrigin: ''
        });
        var noBox = component.find('CheckboxField[label="No"]');
        expect(noBox.props().disabled).toEqual(true);
      });

      it('sets disabled to false if disableFields is false and the value is No', function () {
        var component = renderPersonEthnicityForm({
          disableFields: true,
          latinoOrigin: 'No'
        });
        var noBox = component.find('CheckboxField[label="No"]');
        expect(noBox.props().disabled).toEqual(false);
      });
    });

    describe('Unknown checkbox', function () {
      it('renders a check box with the proper id for Unknown', function () {
        var component = renderPersonEthnicityForm({ personId: '123' });
        var unknownBox = component.find('CheckboxField[label="Unknown"]');
        expect(unknownBox.exists()).toEqual(true);
        expect(unknownBox.props().id).toEqual('123-ethnicity-unknown');
      });

      it('sets checked to true if latinoOrigin is Unknown', function () {
        var component = renderPersonEthnicityForm({ latinoOrigin: 'Unknown' });
        var unknownBox = component.find('CheckboxField[label="Unknown"]');
        expect(unknownBox.props().checked).toEqual(true);
      });

      it('sets checked to false if latinoOrigin is not Unknown', function () {
        var component = renderPersonEthnicityForm({ latinoOrigin: '' });
        var unknownBox = component.find('CheckboxField[label="Unknown"]');
        expect(unknownBox.props().checked).toEqual(false);
      });

      it('calls onChange with the proper value when checked', function () {
        var onChange = jasmine.createSpy('onChange');
        var component = renderPersonEthnicityForm({ onChange: onChange });
        var unknownBox = component.find('CheckboxField[label="Unknown"]');
        unknownBox.simulate('change', { target: { checked: true } });
        expect(onChange).toHaveBeenCalledWith('hispanic_latino_origin', 'Unknown');
      });

      it('calls onChange with the proper value when unchecked', function () {
        var onChange = jasmine.createSpy('onChange');
        var component = renderPersonEthnicityForm({ onChange: onChange });
        var unknownBox = component.find('CheckboxField[label="Unknown"]');
        unknownBox.simulate('change', { target: { checked: false } });
        expect(onChange).toHaveBeenCalledWith('hispanic_latino_origin', null);
      });

      it('sets disabled to true if disableFields is true and the value is not Unknown', function () {
        var component = renderPersonEthnicityForm({
          disableFields: true,
          latinoOrigin: ''
        });
        var unknownBox = component.find('CheckboxField[label="Unknown"]');
        expect(unknownBox.props().disabled).toEqual(true);
      });

      it('sets disabled to false if disableFields is false and the value is Unknown', function () {
        var component = renderPersonEthnicityForm({
          disableFields: true,
          latinoOrigin: 'Unknown'
        });
        var unknownBox = component.find('CheckboxField[label="Unknown"]');
        expect(unknownBox.props().disabled).toEqual(false);
      });
    });

    describe('Abandoned checkbox', function () {
      it('renders a check box whith the proper id for Abandoned', function () {
        var component = renderPersonEthnicityForm({ personId: '123' });
        var abandonedBox = component.find('CheckboxField[label="Abandoned"]');
        expect(abandonedBox.exists()).toEqual(true);
        expect(abandonedBox.props().id).toEqual('123-ethnicity-abandoned');
      });

      it('sets checked to true if latinoOrigin is Abandoned', function () {
        var component = renderPersonEthnicityForm({
          latinoOrigin: 'Abandoned'
        });
        var abandonedBox = component.find('CheckboxField[label="Abandoned"]');
        expect(abandonedBox.props().checked).toEqual(true);
      });

      it('sets checked to false if latinoOrigin is not Abandoned', function () {
        var component = renderPersonEthnicityForm({ latinoOrigin: '' });
        var abandonedBox = component.find('CheckboxField[label="Abandoned"]');
        expect(abandonedBox.props().checked).toEqual(false);
      });

      it('calls onChange with the proper value when checked', function () {
        var onChange = jasmine.createSpy('onChange');
        var component = renderPersonEthnicityForm({ onChange: onChange });
        var abandonedBox = component.find('CheckboxField[label="Abandoned"]');
        abandonedBox.simulate('change', { target: { checked: true } });
        expect(onChange).toHaveBeenCalledWith('hispanic_latino_origin', 'Abandoned');
      });

      it('calls onChange with the proper value when unchecked', function () {
        var onChange = jasmine.createSpy('onChange');
        var component = renderPersonEthnicityForm({ onChange: onChange });
        var abandonedBox = component.find('CheckboxField[label="Abandoned"]');
        abandonedBox.simulate('change', { target: { checked: false } });
        expect(onChange).toHaveBeenCalledWith('hispanic_latino_origin', null);
      });

      it('sets disabled to true if disableFields is true and the value is not Abandoned', function () {
        var component = renderPersonEthnicityForm({
          disableFields: true,
          latinoOrigin: ''
        });
        var abandonedBox = component.find('CheckboxField[label="Abandoned"]');
        expect(abandonedBox.props().disabled).toEqual(true);
      });

      it('sets disabled to false if disableFields is false and the value is Abandoned', function () {
        var component = renderPersonEthnicityForm({
          disableFields: true,
          latinoOrigin: 'Abandoned'
        });
        var abandonedBox = component.find('CheckboxField[label="Abandoned"]');
        expect(abandonedBox.props().disabled).toEqual(false);
      });
    });

    describe('Declined to answer checkbox', function () {
      it('renders a check box for Declined to answer', function () {
        var component = renderPersonEthnicityForm({ personId: '123' });
        var declinedBox = component.find('CheckboxField[label="Declined to answer"]');
        expect(declinedBox.exists()).toEqual(true);
        expect(declinedBox.props().id).toEqual('123-ethnicity-declined-to-answer');
      });

      it('sets checked to true if latinoOrigin is Declined to answer', function () {
        var component = renderPersonEthnicityForm({
          latinoOrigin: 'Declined to answer'
        });
        var declinedBox = component.find('CheckboxField[label="Declined to answer"]');
        expect(declinedBox.props().checked).toEqual(true);
      });

      it('sets checked to false if latinoOrigin is not Declined to answer', function () {
        var component = renderPersonEthnicityForm({ latinoOrigin: '' });
        var declinedBox = component.find('CheckboxField[label="Declined to answer"]');
        expect(declinedBox.props().checked).toEqual(false);
      });

      it('calls onChange with the proper value when checked', function () {
        var onChange = jasmine.createSpy('onChange');
        var component = renderPersonEthnicityForm({ onChange: onChange });
        var declinedBox = component.find('CheckboxField[label="Declined to answer"]');
        declinedBox.simulate('change', { target: { checked: true } });
        expect(onChange).toHaveBeenCalledWith('hispanic_latino_origin', 'Declined to answer');
      });

      it('calls onChange with the proper value when unchecked', function () {
        var onChange = jasmine.createSpy('onChange');
        var component = renderPersonEthnicityForm({ onChange: onChange });
        var declinedBox = component.find('CheckboxField[label="Declined to answer"]');
        declinedBox.simulate('change', { target: { checked: false } });
        expect(onChange).toHaveBeenCalledWith('hispanic_latino_origin', null);
      });

      it('sets disabled to true if disableFields is true and the value is not Declined to answer', function () {
        var component = renderPersonEthnicityForm({
          disableFields: true,
          latinoOrigin: ''
        });
        var declinedBox = component.find('CheckboxField[label="Declined to answer"]');
        expect(declinedBox.props().disabled).toEqual(true);
      });

      it('sets disabled to false if disableFields is false and the value is Declined to answer', function () {
        var component = renderPersonEthnicityForm({
          disableFields: true,
          latinoOrigin: 'Declined to answer'
        });
        var declinedBox = component.find('CheckboxField[label="Declined to answer"]');
        expect(declinedBox.props().disabled).toEqual(false);
      });
    });
  });
});