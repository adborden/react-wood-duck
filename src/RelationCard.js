import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      secondaryRelationship: PropTypes.string,
      ageBirth: PropTypes.string,
      city: PropTypes.string,
    })
  ),
  expandComponent: PropTypes.func,
  expandColumnComponent: PropTypes.any,
  tableActions: PropTypes.func,
  isExpandableRow: PropTypes.func,
};

const RelationCard = ({
  firstName,
  lastName,
  data,
  isExpandableRow,
  expandComponent,
  expandColumnComponent,
  tableActions,
}) => {
  return (
    <div>
      <div className="focusChild">
        <h4>
          <b> Focus Child </b>
        </h4>
      </div>
      <div className="row">
        <div className="childName">
          <b>
            {firstName} {lastName}
          </b>
        </div>
        <div>
          <BootstrapTable
            data={data}
            searchPlaceholder="Quick Filter"
            search={true}
            expandableRow={isExpandableRow}
            expandComponent={expandComponent}
            expandColumnOptions={expandColumnComponent}
            options={{ expandBy: 'column' }}
          >
            <TableHeaderColumn dataField="name" isKey={true}>
              Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField="secondaryRelationship" width="30%">
              Relationship to Focus Child
            </TableHeaderColumn>
            <TableHeaderColumn dataField="ageBirth">Age</TableHeaderColumn>
            <TableHeaderColumn dataField="city">City</TableHeaderColumn>
            <TableHeaderColumn
              dataFormat={tableActions}
              expandable={false}
              width="10%"
            >
              Actions
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    </div>
  );
};

RelationCard.propTypes = propTypes;

export default RelationCard;
