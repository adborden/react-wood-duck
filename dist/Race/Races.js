(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.Races = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RACE_DETAILS = exports.RACE_DETAILS = {
    White: ['Armenian', 'Central American', 'European', 'Middle Eastern', 'Romanian'],
    'Black or African American': ['Black', 'Ethiopian', 'Caribbean'],
    Asian: ['Asian Indian', 'Cambodian', 'Chinese', 'Filipino', 'Hmong', 'Japanese', 'Korean', 'Laotian', 'Other Asian', 'Vietnamese'],
    'American Indian or Alaska Native': ['American Indian', 'Alaska Native'],
    'Native Hawaiian or Other Pacific Islander': ['Guamanian', 'Hawaiian', 'Other Asian/Pacific Islander', 'Other Pacific Islander', 'Polynesian', 'Samoan'],
    Unknown: [],
    Abandoned: [],
    'Declined to answer': []
  };
});