(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../GlobalHeader', '../GlobalHeaderAction', '../ProfileAvatar', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../GlobalHeader'), require('../GlobalHeaderAction'), require('../ProfileAvatar'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.GlobalHeader, global.GlobalHeaderAction, global.ProfileAvatar, global.EnzymeSetup);
    global.GlobalHeader_test = mod.exports;
  }
})(this, function (_react, _enzyme, _GlobalHeader, _GlobalHeaderAction, _ProfileAvatar) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

  var _GlobalHeaderAction2 = _interopRequireDefault(_GlobalHeaderAction);

  var _ProfileAvatar2 = _interopRequireDefault(_ProfileAvatar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Global Header', function () {
    var searchIcon = _react2.default.createElement('i', { className: 'fa fa-search' });
    var addNewIcon = _react2.default.createElement('i', { className: 'fa fa-plus' });
    var notificationIcon = _react2.default.createElement('i', { className: 'fa fa-bell' });

    describe('With default properties', function () {
      var globalHeader = (0, _enzyme.shallow)(_react2.default.createElement(_GlobalHeader2.default, null));

      it('renders the tag', function () {
        expect(globalHeader.type()).toBe('header');
      });

      it('has a div wrapper with a container class', function () {
        expect(globalHeader.find('.container').length).toEqual(1);
      });

      it('renders nav element', function () {
        expect(globalHeader.find('nav').length).toEqual(1);
      });

      it('renders logo', function () {
        expect(globalHeader.findWhere(function (n) {
          return n.text() === 'CWDS';
        }).exists()).toBe(true);
      });

      it('contains search action without callback', function () {
        expect(globalHeader.contains(_react2.default.createElement(_GlobalHeaderAction2.default, { icon: searchIcon, ariaLabel: 'search' }))).toBe(true);
      });

      it('contains add action without callback', function () {
        expect(globalHeader.contains(_react2.default.createElement(_GlobalHeaderAction2.default, { icon: addNewIcon, ariaLabel: 'add new' }))).toBe(true);
      });

      it('contains notification action without callback', function () {
        expect(globalHeader.contains(_react2.default.createElement(_GlobalHeaderAction2.default, {
          icon: notificationIcon,
          ariaLabel: 'notifications'
        }))).toBe(true);
      });

      it('renders empty profile name', function () {
        expect(globalHeader.find('.profile a').text()).toBe('');
      });
    });

    describe('With given properties', function () {
      var input = {
        logo: 'testlogo',
        logoCallback: function logoCallback() {},
        profileId: 'user.id',
        profileName: 'testProfileName',
        profileAvatar: 'testProfileAvatar',
        searchCallback: function searchCallback() {},
        addNewCallback: function addNewCallback() {},
        notificationsCallback: function notificationsCallback() {},
        logoutCallback: function logoutCallback() {}
      };
      var globalHeaderWithProps = void 0;
      beforeEach(function () {
        globalHeaderWithProps = (0, _enzyme.shallow)(_react2.default.createElement(_GlobalHeader2.default, input));
      });

      it('click on logo invokes logoCallback', function () {
        spyOn(input, 'logoCallback');
        globalHeaderWithProps.setProps({ logoCallback: input.logoCallback });
        globalHeaderWithProps.find('.logo').find('button').simulate('click');
        expect(input.logoCallback).toHaveBeenCalled();
      });

      it('renders search icon', function () {
        expect(globalHeaderWithProps.contains(_react2.default.createElement(_GlobalHeaderAction2.default, {
          icon: searchIcon,
          ariaLabel: 'search',
          callback: input.searchCallback,
          profileId: input.profileId
        }))).toBe(true);
      });

      it('renders "add new" action with callback', function () {
        expect(globalHeaderWithProps.contains(_react2.default.createElement(_GlobalHeaderAction2.default, {
          icon: addNewIcon,
          ariaLabel: 'add new',
          callback: input.addNewCallback,
          profileId: input.profileId
        }))).toBe(true);
      });

      it('renders notification action with callback', function () {
        expect(globalHeaderWithProps.contains(_react2.default.createElement(_GlobalHeaderAction2.default, {
          icon: notificationIcon,
          ariaLabel: 'notifications',
          callback: input.notificationsCallback,
          profileId: input.profileId
        }))).toBe(true);
      });

      it('renders empty profile name with callback', function () {
        expect(globalHeaderWithProps.find('.profile a').text()).toBe(input.profileName);
      });

      it('renders profile avatar with given profileAvatar property', function () {
        expect(globalHeaderWithProps.contains(_react2.default.createElement(_ProfileAvatar2.default, {
          profileId: input.profileId,
          profileAvatar: input.profileAvatar,
          logoutCallback: input.logoutCallback
        }))).toBe(true);
      });
    });
  });
});