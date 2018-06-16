(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-bootstrap-table'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-bootstrap-table'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactBootstrapTable);
    global.RelationCard = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactBootstrapTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var propTypes = {
    expandComponent: _propTypes2.default.func,
    expandColumnComponent: _propTypes2.default.any,
    firstName: _propTypes2.default.string,
    isExpandableRow: _propTypes2.default.func,
    lastName: _propTypes2.default.string,
    tableActions: _propTypes2.default.func,
    data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      name: _propTypes2.default.string,
      secondaryRelationship: _propTypes2.default.string
    }))
  };

  var RelationCard = function RelationCard(_ref) {
    var firstName = _ref.firstName,
        lastName = _ref.lastName,
        data = _ref.data,
        isExpandableRow = _ref.isExpandableRow,
        expandComponent = _ref.expandComponent,
        expandColumnComponent = _ref.expandColumnComponent,
        tableActions = _ref.tableActions;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'childName' },
        _react2.default.createElement(
          'b',
          null,
          firstName,
          ' ',
          lastName
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrapTable.BootstrapTable,
          {
            data: data,
            searchPlaceholder: 'Quick Filter',
            search: true,
            expandableRow: isExpandableRow,
            expandComponent: expandComponent,
            expandColumnOptions: expandColumnComponent,
            options: { expandBy: 'column' }
          },
          _react2.default.createElement(
            _reactBootstrapTable.TableHeaderColumn,
            { dataField: 'name', isKey: true },
            'Name'
          ),
          _react2.default.createElement(
            _reactBootstrapTable.TableHeaderColumn,
            { dataField: 'secondaryRelationship' },
            'Relationship to Focus Person'
          ),
          _react2.default.createElement(
            _reactBootstrapTable.TableHeaderColumn,
            {
              dataFormat: tableActions,
              expandable: false,
              width: '20%'
            },
            'Actions'
          )
        )
      )
    );
  };

  RelationCard.propTypes = propTypes;

  exports.default = RelationCard;
});