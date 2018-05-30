import React from 'react';
import { shallow } from 'enzyme';
import EditRelationshipForm from '../../Relationship/EditRelationshipForm';
import './../EnzymeSetup';

describe('EditRelationshipForm', () => {
  const props = {
    clientAge: '14',
    clientGenderCode: 'F',
    clientName: 'Aubery Campbell',
    onChange: () => {},
    relatedClientAge: '40',
    relatedClientGenderCode: 'M',
    relatedClientName: 'Tony Campbell',
    relationshipType: {
      value: 271,
      logical_code: 'FR',
      gender_code: 'UU',
      label: 'No Relation/No Relation',
    },
    isAbsentParent: false,
    isSameHomeStatus: true,
    relationshipTypes: [
      {
        value: 271,
        logical_code: 'FR',
        gender_code: 'UU',
        label: 'No Relation/No Relation',
      },
      {
        value: 190,
        logical_code: 'D',
        gender_code: 'fM',
        label: 'Daughter/Father (Birth)',
      },
    ],
  };
  const component = shallow(<EditRelationshipForm {...props} />);

  describe('Dropdown field for relationship type', () => {
    it('renders a dropdownfield', () => {
      expect(component.find('DropDownField').length).toBe(1);
    });

    it('renders the prop relationTypeList', () => {
      expect(component.find('DropDownField').prop('options')).toEqual(
        props.relationshipTypes
      );
    });
  });

  describe('Live at same Location checkbox', () => {
    it('renders a checkbox', () => {
      expect(component.find('#same_home_status').length).toBe(1);
    });

    it('sets the checked to true', () => {
      expect(component.find('#same_home_status').prop('checked')).toBe(true);
    });

    it('sets the checked to false', () => {
      component.setProps({ isSameHomeStatus: false });
      expect(component.find('#same_home_status').prop('checked')).toBe(false);
    });
  });

  describe('Parents whereabouts checkbox', () => {
    it('renders a checkbox', () => {
      expect(component.find('#absent_parent_indicator').length).toBe(1);
    });

    it('sets the value to false', () => {
      expect(component.find('#absent_parent_indicator').prop('checked')).toBe(
        false
      );
    });

    it('sets the checked to true', () => {
      component.setProps({ isAbsentParent: true });
      expect(component.find('#absent_parent_indicator').prop('checked')).toBe(
        true
      );
    });
  });

  describe('Date time picker', () => {
    it('renders DateTimePicker', () => {
      expect(component.find('DateTimePicker').length).toBe(2);
    });
  });

  describe('#toggleAbsentParent', () => {
    it('disables the absent parent indicator checkbox', () => {
      expect(component.find('#absent_parent_indicator').prop('disabled')).toBe(
        true
      );
    });
    it('enables the absent parent indicator checkbox', () => {
      const relationshipType = {
        value: 190,
        logical_code: 'D',
        gender_code: 'fM',
        label: 'Daughter/Father (Birth)',
      };

      component.setProps({ relationshipType });
      expect(component.find('#absent_parent_indicator').prop('disabled')).toBe(
        false
      );
    });
  });
});
