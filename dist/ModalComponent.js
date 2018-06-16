(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-bootstrap'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-bootstrap'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactBootstrap);
    global.ModalComponent = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactBootstrap) {
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
    modalBody: _propTypes2.default.any,
    modalFooter: _propTypes2.default.any,
    modalSize: _propTypes2.default.string,
    modalTitle: _propTypes2.default.string,
    showModal: _propTypes2.default.bool,
    closeModal: _propTypes2.default.any
  };
  var ModalComponent = function ModalComponent(_ref) {
    var modalBody = _ref.modalBody,
        closeModal = _ref.closeModal,
        modalFooter = _ref.modalFooter,
        modalSize = _ref.modalSize,
        modalTitle = _ref.modalTitle,
        showModal = _ref.showModal;

    return _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        _reactBootstrap.Modal,
        { show: showModal, onHide: closeModal, bsSize: modalSize },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          { closeButton: true },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            { id: 'contained-modal-title-lg' },
            modalTitle
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          modalBody
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          modalFooter
        )
      )
    );
  };

  ModalComponent.propTypes = propTypes;

  exports.default = ModalComponent;
});