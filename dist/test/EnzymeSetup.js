(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['enzyme', 'enzyme-adapter-react-15'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('enzyme'), require('enzyme-adapter-react-15'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.enzyme, global.enzymeAdapterReact15);
    global.EnzymeSetup = mod.exports;
  }
})(this, function (_enzyme, _enzymeAdapterReact) {
  'use strict';

  var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });
});