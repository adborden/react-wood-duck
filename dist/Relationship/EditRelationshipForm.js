(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../common/CheckboxField', '../DropDownField', '../DateTimePicker', 'prop-types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../common/CheckboxField'), require('../DropDownField'), require('../DateTimePicker'), require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.CheckboxField, global.DropDownField, global.DateTimePicker, global.propTypes);
    global.EditRelationshipForm = mod.exports;
  }
})(this, function (exports, _react, _CheckboxField, _DropDownField, _DateTimePicker, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _CheckboxField2 = _interopRequireDefault(_CheckboxField);

  var _DropDownField2 = _interopRequireDefault(_DropDownField);

  var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var propTypes = {
    clientAge: _propTypes2.default.string,
    clientGenderCode: _propTypes2.default.string,
    clientName: _propTypes2.default.string,
    isAbsentParent: _propTypes2.default.bool,
    isSameHomeStatus: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    relatedClientAge: _propTypes2.default.string,
    relatedClientGenderCode: _propTypes2.default.string,
    relatedClientName: _propTypes2.default.string,
    relationshipType: _propTypes2.default.object.isRequired,
    relationshipTypes: _propTypes2.default.array
  };
  var EditRelationshipForm = function EditRelationshipForm(_ref) {
    var clientAge = _ref.clientAge,
        clientGenderCode = _ref.clientGenderCode,
        clientName = _ref.clientName,
        isAbsentParent = _ref.isAbsentParent,
        isSameHomeStatus = _ref.isSameHomeStatus,
        _onChange = _ref.onChange,
        relatedClientAge = _ref.relatedClientAge,
        relatedClientGenderCode = _ref.relatedClientGenderCode,
        relatedClientName = _ref.relatedClientName,
        relationshipType = _ref.relationshipType,
        relationshipTypes = _ref.relationshipTypes;

    var primaryRelationship = function primaryRelationship(_ref2) {
      var label = _ref2.label;
      return label.split('/')[0];
    };
    var secondaryRelationship = function secondaryRelationship(_ref3) {
      var label = _ref3.label;
      return label.split('/')[1];
    };
    var toggleAbsentParent = function toggleAbsentParent(_ref4) {
      var label = _ref4.label;

      return !label.split('/')[1].toLowerCase().match(/\bfather\b|\bmother\b|\bparent\b/);
    };

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-3' },
          'Primary Person',
          _react2.default.createElement(
            'div',
            { className: 'details' },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'b',
                null,
                clientName
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Age: ',
              clientAge,
              ' Years'
            ),
            _react2.default.createElement(
              'p',
              null,
              ' Gender: ',
              clientGenderCode,
              ' '
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-6' },
          _react2.default.createElement(_DropDownField2.default, {
            name: 'Relationship Types',
            label: 'Primary Person Relationship / Related Person*',
            options: relationshipTypes,
            selectedOption: relationshipType.value,
            onChange: function onChange(event) {
              return _onChange('relationshipType', event);
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-3' },
          'Related Person',
          _react2.default.createElement(
            'div',
            { className: 'details' },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'b',
                null,
                relatedClientName
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              ' Age : ',
              relatedClientAge,
              ' Years'
            ),
            _react2.default.createElement(
              'p',
              null,
              ' Gender: ',
              relatedClientGenderCode,
              ' '
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-12 description' },
          _react2.default.createElement(
            'b',
            null,
            clientName,
            ' '
          ),
          'is the ',
          primaryRelationship(relationshipType),
          ' of',
          ' ',
          secondaryRelationship(relationshipType),
          _react2.default.createElement(
            'b',
            null,
            ' ',
            relatedClientName
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-12 form-group edit-relation-checkbox' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(_CheckboxField2.default, {
              label: 'Live At Same Location',
              type: 'checkbox',
              id: 'same_home_status',
              checked: isSameHomeStatus,
              value: isSameHomeStatus.toString(),
              onChange: function onChange(_ref5) {
                var checked = _ref5.target.checked;
                return _onChange('same_home_status', checked);
              }
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(_CheckboxField2.default, {
              type: 'checkbox',
              label: 'Parents Whereabouts Unknown',
              id: 'absent_parent_indicator',
              checked: isAbsentParent,
              value: isAbsentParent.toString(),
              onChange: function onChange(_ref6) {
                var checked = _ref6.target.checked;
                return _onChange('absent_parent_indicator', checked);
              },
              disabled: toggleAbsentParent(relationshipType)
            })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'START DATE' },
            'START DATE'
          ),
          _react2.default.createElement(_DateTimePicker2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'END DATE' },
            'END DATE'
          ),
          _react2.default.createElement(_DateTimePicker2.default, null)
        )
      )
    );
  };

  EditRelationshipForm.propTypes = propTypes;

  exports.default = EditRelationshipForm;
});