import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const DropDownField = props => {
  return (
    <div className="form-group">
      <div className={props.gridClassName}>
        <label>{props.label}</label>
        <Select
          value={props.selectedOption}
          id={props.id}
          onChange={props.onChange}
          placeholder=""
          className={props.selectClassName}
          options={props.options}
        />
      </div>
    </div>
  );
};

DropDownField.propTypes = {
  options: PropTypes.array,
  id: PropTypes.string,
  selectedOption: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  gridClassName: PropTypes.string,
  label: PropTypes.string,
  selectClassName: PropTypes.string,
};

DropDownField.defaultpropTypes = {
  label: 'Select DropDown',
  selectClassName: 'reusable-select',
};

export default DropDownField;
