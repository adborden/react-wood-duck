import React from 'react';
import CheckboxField from '../common/CheckboxField';
import DropDownField from '../DropDownField';
import DateTimePicker from '../DateTimePicker';
import PropTypes from 'prop-types';

const propTypes = {
  clientAge: PropTypes.string,
  clientGenderCode: PropTypes.string,
  clientName: PropTypes.string,
  isAbsentParent: PropTypes.bool,
  isSameHomeStatus: PropTypes.bool,
  onChange: PropTypes.func,
  relatedClientAge: PropTypes.string,
  relatedClientGenderCode: PropTypes.string,
  relatedClientName: PropTypes.string,
  relationshipType: PropTypes.object.isRequired,
  relationshipTypes: PropTypes.array,
};
const EditRelationshipForm = ({
  clientAge,
  clientGenderCode,
  clientName,
  isAbsentParent,
  isSameHomeStatus,
  onChange,
  relatedClientAge,
  relatedClientGenderCode,
  relatedClientName,
  relationshipType,
  relationshipTypes,
}) => {
  const primaryRelationship = ({ label }) => label.split('/')[0];
  const secondaryRelationship = ({ label }) => label.split('/')[1];
  const toggleAbsentParent = ({ label }) => {
    return !label
      .split('/')[1]
      .toLowerCase()
      .match(/\bfather\b|\bmother\b|\bparent\b/);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          Primary Person
          <div className="details">
            <p>
              <b>{clientName}</b>
            </p>
            <p>Age: {clientAge} Years</p>
            <p> Gender: {clientGenderCode} </p>
          </div>
        </div>
        <div className="col-md-6">
          <DropDownField
            name="Relationship Types"
            label="Primary Person Relationship / Related Person*"
            options={relationshipTypes}
            selectedOption={relationshipType.value}
            onChange={event => onChange('relationshipType', event)}
          />
        </div>
        <div className="col-md-3">
          Related Person
          <div className="details">
            <p>
              <b>{relatedClientName}</b>
            </p>
            <p> Age : {relatedClientAge} Years</p>
            <p> Gender: {relatedClientGenderCode} </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 description">
          <b>{clientName} </b>
          is the {primaryRelationship(relationshipType)} of{' '}
          {secondaryRelationship(relationshipType)}
          <b> {relatedClientName}</b>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 form-group edit-relation-checkbox">
          <div className="col-md-6">
            <CheckboxField
              label="Live At Same Location"
              type="checkbox"
              id="same_home_status"
              checked={isSameHomeStatus}
              value={isSameHomeStatus.toString()}
              onChange={({ target: { checked } }) =>
                onChange('same_home_status', checked)
              }
            />
          </div>
          <div className="col-md-6">
            <CheckboxField
              type="checkbox"
              label="Parents Whereabouts Unknown"
              id="absent_parent_indicator"
              checked={isAbsentParent}
              value={isAbsentParent.toString()}
              onChange={({ target: { checked } }) =>
                onChange('absent_parent_indicator', checked)
              }
              disabled={toggleAbsentParent(relationshipType)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="START DATE">START DATE</label>
          <DateTimePicker />
        </div>
        <div className="col-md-4">
          <label htmlFor="END DATE">END DATE</label>
          <DateTimePicker />
        </div>
      </div>
    </div>
  );
};

EditRelationshipForm.propTypes = propTypes;

export default EditRelationshipForm;
