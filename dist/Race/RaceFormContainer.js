(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './RaceForm', './Races'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./RaceForm'), require('./Races'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.RaceForm, global.Races);
    global.RaceFormContainer = mod.exports;
  }
})(this, function (exports, _react, _RaceForm, _Races) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _RaceForm2 = _interopRequireDefault(_RaceForm);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var raceDetailOptions = Object.keys(_Races.RACE_DETAILS).reduce(function (raceDetails, race) {
    return _extends({}, raceDetails, _defineProperty({}, race, _Races.RACE_DETAILS[race].map(function (value) {
      return { label: value, value: value };
    })));
  }, {});

  var personId = '1';

  var getIsRaceIndeterminateValueSelector = function getIsRaceIndeterminateValueSelector(races) {
    var isUnknown = races.Unknown;
    var isAbandoned = races.Abandoned;
    var isDeclinedToAnswer = races['Declined to answer'];
    return Boolean(isUnknown || isAbandoned || isDeclinedToAnswer);
  };

  var racesStatic = {
    White: false,
    'Black or African American': false,
    Asian: false,
    'American Indian or Alaska Native': false,
    'Native Hawaiian or Other Pacific Islander': false,
    Unknown: false,
    Abandoned: false,
    'Declined to answer': false
  };

  var raceStaticDetails = {
    White: '',
    'Black or African American': '',
    Asian: '',
    'American Indian or Alaska Native': '',
    'Native Hawaiian or Other Pacific Islander': '',
    Unknown: '',
    Abandoned: '',
    'Declined to answer': ''
  };

  var RaceFormContainer = function (_React$Component) {
    _inherits(RaceFormContainer, _React$Component);

    function RaceFormContainer(props) {
      _classCallCheck(this, RaceFormContainer);

      var _this = _possibleConstructorReturn(this, (RaceFormContainer.__proto__ || Object.getPrototypeOf(RaceFormContainer)).call(this, props));

      _this.state = {
        personId: personId,
        raceDetailOptions: raceDetailOptions,
        racesDisabled: getIsRaceIndeterminateValueSelector(racesStatic),
        races: JSON.parse(JSON.stringify(racesStatic)),
        raceDetails: JSON.parse(JSON.stringify(raceStaticDetails))
      };
      _this.onRaceChange = _this.onRaceChange.bind(_this);
      _this.onRaceDetailChange = _this.onRaceDetailChange.bind(_this);
      return _this;
    }

    _createClass(RaceFormContainer, [{
      key: 'onRaceChange',
      value: function onRaceChange(changedRace, value) {
        var races = this.state.races;
        var raceDetails = this.state.raceDetails;
        var racesDisabled = void 0;
        races[changedRace] = value;
        this.setState({ races: races, raceDetails: raceDetails });
        if (changedRace === 'Unknown' || changedRace === 'Abandoned' || changedRace === 'Declined to answer') {
          races = JSON.parse(JSON.stringify(racesStatic));
          races[changedRace] = value;
          raceDetails = JSON.parse(JSON.stringify(raceStaticDetails));
          racesDisabled = getIsRaceIndeterminateValueSelector(races);
        }
        this.setState({
          races: races,
          raceDetails: raceDetails,
          racesDisabled: racesDisabled
        });
      }
    }, {
      key: 'onRaceDetailChange',
      value: function onRaceDetailChange(changedRace, value) {
        var raceDetails = this.state.raceDetails;
        raceDetails[changedRace] = value;
        this.setState({ raceDetails: raceDetails });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_RaceForm2.default, _extends({}, this.state, {
            onRaceChange: this.onRaceChange,
            onRaceDetailChange: this.onRaceDetailChange
          }))
        );
      }
    }]);

    return RaceFormContainer;
  }(_react2.default.Component);

  exports.default = RaceFormContainer;
});