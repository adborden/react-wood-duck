import React from 'react';

import { storiesOf } from '@storybook/react';
import EditRelationshipForm from './../../../src/Relationship/EditRelationshipForm';

const styles = { paddingTop: '20px' };
const CenterDecorator = storyFn => (
  <div className="container" style={styles}>
    {storyFn()}
  </div>
);

const relationshipTypes = [
  {
    value: 271,
    logical_code: 'FR',
    gender_code: 'UU',
    label: 'No Relation/No Relation',
  },
  {
    value: 187,
    logical_code: 'D',
    gender_code: 'FU',
    label: 'Daughter/De Facto Parent',
  },
  {
    value: 190,
    logical_code: 'D',
    gender_code: 'fM',
    label: 'Daughter/Father (Birth)',
  },
  {
    value: 269,
    logical_code: 'NC',
    gender_code: 'FM',
    label: 'Niece/Uncle (Maternal)',
  },
];

export default class EditRelationshipFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {
        common_first_name: 'Aubrey',
        common_last_name: 'Campbell',
        age: '12',
        gender_code: 'F',
      },
      relatedClient: {
        absent_parent_indicator: false,
        client_id: 'DZGcEEgaa1',
        common_first_name: 'Gandalf',
        common_last_name: 'Wizard',
        age: '40',
        gender_code: 'M',
        same_home_status: 'YES',
        relationshipType: {
          value: 271,
          logical_code: 'FR',
          gender_code: 'UU',
          label: 'No Relation/No Relation',
        },
      },
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(field, value) {
    const { relatedClient } = this.state;
    value = parsedSameHome(field, value);

    function parsedSameHome(field, value) {
      if (field === 'same_home_status') {
        return value ? 'YES' : 'NO';
      }
      return value;
    }

    const updateRelatedClient = { ...relatedClient, [field]: value };
    this.setState({ relatedClient: updateRelatedClient });
  }

  render() {
    const { client, relatedClient } = this.state;

    return (
      <EditRelationshipForm
        clientAge={client.age}
        clientGenderCode={client.gender_code}
        clientName={client.common_first_name + ' ' + client.common_last_name}
        isAbsentParent={relatedClient.absent_parent_indicator}
        isSameHomeStatus={relatedClient.same_home_status === 'YES'}
        onChange={this.onChange}
        relatedClientAge={relatedClient.age}
        relatedClientGenderCode={relatedClient.gender_code}
        relatedClientName={
          relatedClient.common_first_name + ' ' + relatedClient.common_last_name
        }
        relationshipType={relatedClient.relationshipType}
        relationshipTypes={relationshipTypes}
      />
    );
  }
}

const EditRelationshipFormStory = () => <EditRelationshipFormContainer />;

storiesOf('Relationship Components', module)
  .addDecorator(CenterDecorator)
  .add('EditRelationshipForm', EditRelationshipFormStory);
