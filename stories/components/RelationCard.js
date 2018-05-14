import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import RelationCard from '../../src/RelationCard';
import Cards from '../../src/Cards';

const RelationCardUsage = `
    #### Usage
      - Use to display the people related to the focus child, thier relationships and their info.
      - The quick filter helps you to filter the data in the table.
       `;

storiesOf('Components', module).add(
  'RelationCard',
  withInfo(`${RelationCardUsage}`)(() => (
    <div className="container">
      <div className="col-md-12">
        <Cards cardHeaderText="Relation Card" cardbgcolor="transparent">
          <RelationCard firstName="Han" lastName="Solo" />
        </Cards>
      </div>
    </div>
  ))
);
