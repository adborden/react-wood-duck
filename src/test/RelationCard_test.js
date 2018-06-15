import React from 'react';
import RelationCard from '../RelationCard.js';
import { mount, shallow } from 'enzyme';
import './EnzymeSetup';

describe('RelationCard', () => {
  const wrapper = shallow(<RelationCard />);
  const RelationCardProps = {
    firstName: 'Han',
    lastName: 'Solo',
  };
  const component = mount(<RelationCard />);
  component.setProps(RelationCardProps);

  it('has a BootstrapTable', () => {
    expect(wrapper.find('BootstrapTable').length).toBe(1);
  });
  it('has a TableHeaderColumn', () => {
    expect(wrapper.find('TableHeaderColumn').length).toBe(3);
  });
  it('has props', () => {
    expect(component.prop('firstName')).toEqual('Han');
    expect(component.prop('lastName')).toEqual('Solo');
    expect(
      component
        .find('div')
        .at(1)
        .props().className
    ).toEqual('childName');
  });
});
