(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../../Relationship/EditRelationshipForm', './../EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../../Relationship/EditRelationshipForm'), require('./../EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.EditRelationshipForm, global.EnzymeSetup);
    global.EditRelationshipForm_test = mod.exports;
  }
})(this, function (_react, _enzyme, _EditRelationshipForm) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _EditRelationshipForm2 = _interopRequireDefault(_EditRelationshipForm);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('EditRelationshipForm', function () {
    var props = {
      clientAge: '14',
      clientGenderCode: 'F',
      clientName: 'Aubery Campbell',
      onChange: function onChange() {},
      relatedClientAge: '40',
      relatedClientGenderCode: 'M',
      relatedClientName: 'Tony Campbell',
      relationshipType: {
        value: 271,
        logical_code: 'FR',
        gender_code: 'UU',
        label: 'No Relation/No Relation'
      },
      isAbsentParent: false,
      isSameHomeStatus: true,
      relationshipTypes: [{
        value: 271,
        logical_code: 'FR',
        gender_code: 'UU',
        label: 'No Relation/No Relation'
      }, {
        value: 190,
        logical_code: 'D',
        gender_code: 'fM',
        label: 'Daughter/Father (Birth)'
      }]
    };
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_EditRelationshipForm2.default, props));

    describe('Dropdown field for relationship type', function () {
      it('renders a dropdownfield', function () {
        expect(component.find('DropDownField').length).toBe(1);
      });

      it('renders the prop relationTypeList', function () {
        expect(component.find('DropDownField').prop('options')).toEqual(props.relationshipTypes);
      });
    });

    describe('Live at same Location checkbox', function () {
      it('renders a checkbox', function () {
        expect(component.find('#same_home_status').length).toBe(1);
      });

      it('sets the checked to true', function () {
        expect(component.find('#same_home_status').prop('checked')).toBe(true);
      });

      it('sets the checked to false', function () {
        component.setProps({ isSameHomeStatus: false });
        expect(component.find('#same_home_status').prop('checked')).toBe(false);
      });
    });

    describe('Parents whereabouts checkbox', function () {
      it('renders a checkbox', function () {
        expect(component.find('#absent_parent_indicator').length).toBe(1);
      });

      it('sets the value to false', function () {
        expect(component.find('#absent_parent_indicator').prop('checked')).toBe(false);
      });

      it('sets the checked to true', function () {
        component.setProps({ isAbsentParent: true });
        expect(component.find('#absent_parent_indicator').prop('checked')).toBe(true);
      });
    });

    describe('Date time picker', function () {
      it('renders DateTimePicker', function () {
        expect(component.find('DateTimePicker').length).toBe(2);
      });
    });

    describe('#toggleAbsentParent', function () {
      it('disables the absent parent indicator checkbox', function () {
        expect(component.find('#absent_parent_indicator').prop('disabled')).toBe(true);
      });
      it('enables the absent parent indicator checkbox', function () {
        var relationshipType = {
          value: 190,
          logical_code: 'D',
          gender_code: 'fM',
          label: 'Daughter/Father (Birth)'
        };

        component.setProps({ relationshipType: relationshipType });
        expect(component.find('#absent_parent_indicator').prop('disabled')).toBe(false);
      });
    });
  });
});