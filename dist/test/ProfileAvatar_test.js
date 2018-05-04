(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../ProfileAvatar', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../ProfileAvatar'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ProfileAvatar, global.EnzymeSetup);
    global.ProfileAvatar_test = mod.exports;
  }
})(this, function (_react, _enzyme, _ProfileAvatar) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _ProfileAvatar2 = _interopRequireDefault(_ProfileAvatar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('ProfileAvatar', function () {
    var defaultProfileAvatar = _react2.default.createElement('i', { className: 'fa fa-user' });
    it('Default', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_ProfileAvatar2.default, null)).equals(null)).toBe(true);
    });

    describe('given profileId', function () {
      var profileAvatar = (0, _enzyme.shallow)(_react2.default.createElement(_ProfileAvatar2.default, { profileId: 'profile.id' }));
      it('renders default avatar', function () {
        expect(profileAvatar.contains(defaultProfileAvatar)).toBe(true);
      });

      it('clicking on profile avatar does not render logout button', function () {
        profileAvatar.simulate('click');
        expect(profileAvatar.findWhere(function (n) {
          return n.text() === 'Logout';
        }).exists()).toBe(false);
      });
    });

    describe('given logoutCallback', function () {
      var spyCallback = void 0;
      var profileAvatar = void 0;

      beforeEach(function () {
        spyCallback = jasmine.createSpy('callback');
        profileAvatar = (0, _enzyme.shallow)(_react2.default.createElement(_ProfileAvatar2.default, { logoutCallback: 'callback' }));
      });

      it('renders default avatar', function () {
        expect(profileAvatar.contains(defaultProfileAvatar)).toBe(true);
      });

      it('clicking on profile avatar renders logout button', function () {
        profileAvatar.find('a').simulate('click');
        expect(profileAvatar.findWhere(function (n) {
          return n.text() === 'Logout';
        }).exists()).toBe(true);
      });

      it('clicking on profile avatar hides visible logout button', function () {
        profileAvatar.setState({ isHidden: false });
        profileAvatar.find('a').first().simulate('click');
        expect(profileAvatar.findWhere(function (n) {
          return n.text() === 'Logout';
        }).exists()).toBe(false);
      });

      describe('when the menu is not moused over', function () {
        it('blurs the avatar hides the logout button', function () {
          profileAvatar.setState({ isHidden: false, dropdownFocused: false });
          profileAvatar.find('a').first().simulate('blur', { preventDefault: function preventDefault() {} });
          expect(profileAvatar.findWhere(function (n) {
            return n.text() === 'Logout';
          }).exists()).toBe(false);
        });

        describe('when focusing the logout link', function () {
          it('changes mouse over state', function () {
            profileAvatar.setProps({ logoutCallback: spyCallback });
            profileAvatar.setState({ isHidden: false, dropdownFocused: false });
            profileAvatar.find('a').at(1).simulate('focus');
            expect(profileAvatar.state().dropdownFocused).toBe(true);
          });
        });
      });

      describe('when the menu is moused over', function () {
        it('blurs the avatar does not hide the logout button', function () {
          profileAvatar.setState({ isHidden: false, dropdownFocused: true });
          profileAvatar.find('a').first().simulate('blur', { preventDefault: function preventDefault() {} });
          expect(profileAvatar.findWhere(function (n) {
            return n.text() === 'Logout';
          }).exists()).toBe(true);
        });

        describe('blurring the logout link', function () {
          it('changes mouse over state', function () {
            profileAvatar.setProps({ logoutCallback: spyCallback });
            profileAvatar.setState({ isHidden: false, dropdownFocused: true });
            profileAvatar.find('a').at(1).simulate('blur');
            expect(profileAvatar.state().dropdownFocused).toBe(false);
          });
        });
      });

      describe('when clicking logout', function () {
        it('invokes logoutCallback', function () {
          profileAvatar.setProps({ logoutCallback: spyCallback });
          profileAvatar.setState({ isHidden: false });
          profileAvatar.find('a').at(1).simulate('mouseover');
          profileAvatar.find('a').first().simulate('blur', { preventDefault: function preventDefault() {} });
          profileAvatar.find('a').at(1).simulate('click', { preventDefault: function preventDefault() {} });
          expect(spyCallback).toHaveBeenCalled();
          expect(profileAvatar.html()).not.toContain('logout');
        });

        it('closes the dropdown menu and sets dropdownFocused to false', function () {
          profileAvatar.setProps({ logoutCallback: spyCallback });
          profileAvatar.setState({ isHidden: false, dropdownFocused: true });
          profileAvatar.find('a').at(1).simulate('click', { preventDefault: function preventDefault() {} });
          expect(profileAvatar.html()).not.toContain('Logout');
          expect(profileAvatar.state().dropdownFocused).toBe(false);
        });
      });
    });

    it('renders given profile avatar', function () {
      var avatar = _react2.default.createElement('i', { className: 'fa fa-warning' });
      var profileAvatar = (0, _enzyme.shallow)(_react2.default.createElement(_ProfileAvatar2.default, { profileId: 'profile.id', profileAvatar: avatar }));
      expect(profileAvatar.contains(avatar)).toBe(true);
    });
  });
});