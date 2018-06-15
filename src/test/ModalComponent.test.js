import React from 'react';
import ModalComponent from '../ModalComponent.js';
import { shallow } from 'enzyme';
import './EnzymeSetup';

describe('ModalComponent', () => {
  const wrapper = shallow(<ModalComponent />);

  it('has a Modal', () => {
    expect(wrapper.find('Modal').length).toBe(1);
  });
  it('has a ModalHeader', () => {
    expect(wrapper.find('ModalHeader').length).toBe(1);
  });
  it('has a ModalTitle', () => {
    expect(wrapper.find('ModalTitle').length).toBe(1);
  });
  it('has a ModalBody', () => {
    expect(wrapper.find('ModalBody').length).toBe(1);
  });
  it('has a ModalFooter', () => {
    expect(wrapper.find('ModalFooter').length).toBe(1);
  });
});
