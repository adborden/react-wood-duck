(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '../PageHeader.js', 'enzyme', './EnzymeSetup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('../PageHeader.js'), require('enzyme'), require('./EnzymeSetup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.PageHeader, global.enzyme, global.EnzymeSetup);
    global.PageHeader_test = mod.exports;
  }
})(this, function (_react, _PageHeader, _enzyme) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _PageHeader2 = _interopRequireDefault(_PageHeader);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('<PageHeader />', function () {
    var input = {
      pageTitle: 'testPageTitle'
    };
    var pageHeader = void 0;
    var pageHeaderwithProps = void 0;

    beforeEach(function () {
      pageHeader = (0, _enzyme.shallow)(_react2.default.createElement(_PageHeader2.default, null));
      pageHeaderwithProps = (0, _enzyme.shallow)(_react2.default.createElement(_PageHeader2.default, input));
    });

    it('renders the tag', function () {
      expect(pageHeader.type()).toBe('div');
    });

    it('verifies the className', function () {
      expect(pageHeader.find('.page-header-mast').exists()).toBe(true);
    });

    it('finds element with tag', function () {
      expect(pageHeader.find('div').length).toEqual(7);
      expect(pageHeaderwithProps.find('button').length).toEqual(1);
    });

    it('finds element with class and default props', function () {
      expect(pageHeader.find('.row').length).toEqual(1);
      expect(pageHeader.find('.page-title').props().className).toBe('page-title text-left');
    });

    it('checks default props', function () {
      expect(pageHeader.instance().props.pageTitle).toEqual('CaseName');
    });

    it('finds element with class and object passed as props', function () {
      expect(pageHeaderwithProps.find('.page-title').props().className).toBe('page-title text-left');
      expect(pageHeaderwithProps.find('.page-title').props().children).toEqual('testPageTitle');
      expect(pageHeaderwithProps.find('button').length).toBe(1);
    });

    describe('#handleScroll', function () {
      describe('with scrolling', function () {
        it('sets stickyHeader to true', function () {
          var currentWindow = { scrollY: 2 };
          var element = {
            getBoundingClientRect: function getBoundingClientRect() {
              return { bottom: 101 };
            }
          };
          var currentDocument = {
            querySelector: function querySelector() {
              return element;
            }
          };

          pageHeaderwithProps.instance().handleScroll(currentWindow, currentDocument);
          expect(pageHeaderwithProps.instance().state.stickyHeader).toEqual(true);
        });
      });

      describe('not scrolled', function () {
        it('sets stickyHeader to false', function () {
          var currentWindow = { scrollY: 0 };
          var element = {
            getBoundingClientRect: function getBoundingClientRect() {
              return { bottom: 101 };
            }
          };
          var currentDocument = {
            querySelector: function querySelector() {
              return element;
            }
          };
          pageHeaderwithProps.instance().handleScroll(currentWindow, currentDocument);
          expect(pageHeaderwithProps.instance().state.stickyHeader).toEqual(false);
        });
      });

      describe('less than 100 pixels from bottom ', function () {
        it('sets stickyHeader to false', function () {
          var currentWindow = { scrollY: 11 };
          var element = {
            getBoundingClientRect: function getBoundingClientRect() {
              return { bottom: 99 };
            }
          };
          var currentDocument = {
            querySelector: function querySelector() {
              return element;
            }
          };
          pageHeaderwithProps.instance().handleScroll(currentWindow, currentDocument);
          expect(pageHeaderwithProps.instance().state.stickyHeader).toEqual(false);
        });
      });
    });

    describe('#render', function () {
      it('renders passed children', function () {
        var pageHeaderElement = (0, _enzyme.shallow)(_react2.default.createElement(
          _PageHeader2.default,
          null,
          _react2.default.createElement('span', null)
        ));
        expect(pageHeaderElement.find('span').exists()).toBe(true);
      });

      describe('with stickyHeader', function () {
        it('adds "sticky" class name', function () {
          var pageHeaderElement = (0, _enzyme.shallow)(_react2.default.createElement(_PageHeader2.default, null));
          pageHeaderElement.setState({ stickyHeader: true });

          expect(pageHeaderElement.props().className).toEqual('sticky page-header-container');
        });
      });

      describe('without stickyHeader', function () {
        it('does not add "sticky" class name', function () {
          var pageHeaderElement = (0, _enzyme.shallow)(_react2.default.createElement(_PageHeader2.default, null));
          expect(pageHeaderElement.props().className).toEqual('page-header-container');
        });
      });
    });

    describe('#render page header button', function () {
      describe('default button', function () {
        it('displays default button', function () {
          var pageHeader = (0, _enzyme.shallow)(_react2.default.createElement(_PageHeader2.default, null));

          expect(pageHeader.find('button').length).toEqual(1);
        });
      });

      describe('customize button', function () {
        it('displays customize button', function () {
          var buttonCustomize = _react2.default.createElement(
            'button',
            { type: 'button', className: 'primary-btn pull-right' },
            'Save Form'
          );
          var pageHeader = (0, _enzyme.shallow)(_react2.default.createElement(_PageHeader2.default, { button: buttonCustomize }));

          expect(pageHeader.find('button').length).toEqual(1);
          expect(pageHeader.find('button').text()).toEqual('Save Form');
        });
      });

      describe('no button', function () {
        it('displays no button', function () {
          var pageHeader = (0, _enzyme.shallow)(_react2.default.createElement(_PageHeader2.default, { button: null }));

          expect(pageHeader.find('button').length).toEqual(0);
        });
      });
    });
  });
});