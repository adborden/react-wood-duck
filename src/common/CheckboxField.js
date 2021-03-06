import ErrorMessages from '../common/ErrorMessages';
import PropTypes from 'prop-types';
import React from 'react';

const CheckboxField = ({
  errors,
  id,
  value,
  checked,
  disabled,
  label,
  onChange,
  onBlur,
  required,
}) => (
  <div>
    <input
      type="checkbox"
      id={id}
      value={value}
      checked={checked}
      disabled={disabled}
      required={required}
      onChange={onChange}
      onBlur={onBlur}
    />
    <label className={required && 'required'} htmlFor={id}>
      {label}
    </label>
    <ErrorMessages ariaDescribedBy={id} errors={errors} />
  </div>
);

CheckboxField.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  errors: PropTypes.array,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default CheckboxField;
