webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/lib/router */ "./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./src/components/HeaderBar.js":
/*!*************************************!*\
  !*** ./src/components/HeaderBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_resource_logonav_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/resource/logonav.png */ "./static/resource/logonav.png");
/* harmony import */ var _static_resource_logonav_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_resource_logonav_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/Grow/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/Popper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/MenuList/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/Tab/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "/saveproj/yanshen/canvasbuildersite/CanvasBuilderSite/cbsite/src/components/HeaderBar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




















var styles = function styles(theme) {
  return {
    tabRoot: {
      minWidth: 100
    },
    indicator: {
      backgroundColor: '#3fc2ff'
    },
    appBar: {
      backgroundColor: '#000',
      textColor: '#fff'
    },
    menuButtonGroup: {
      indicatorColor: '#cc00ff',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    menuText: {
      color: "#fff"
    }
  };
};

var HeaderBar =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderBar, _Component);

  function HeaderBar() {
    var _this;

    _classCallCheck(this, HeaderBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderBar).call(this));
    _this.state = {
      open: false,
      anchorEl: null,
      value: 0
    };
    return _this;
  }

  _createClass(HeaderBar, [{
    key: "handleChange",
    value: function handleChange(event, value) {
      this.setState({
        value: value
      });

      if (value == 0) {
        next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/home");
      }

      if (value == 1) {
        next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/videolist");
      }

      if (value == 2) {
        next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/document");
      }

      if (value == 3) {
        next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/blockchain");
      }

      if (value == 4) {
        next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/about");
      }
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(event) {
      this.setState({
        open: !this.state.open
      });
      this.setState({
        anchorEl: event.currentTarget
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose(index) {
      // if (this.anchorEl.contains(event.target)) {
      //   return;
      // }
      console.log(index);
      this.setState({
        open: false
      });
      this.setState({
        anchorEl: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var anchorEl = this.state.anchorEl;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        position: "static",
        color: "default",
        className: classes.appBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _static_resource_logonav_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "iconimg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_15___default.a, {
        className: classes.menuButtonGroup,
        classes: {
          indicator: classes.indicator
        },
        value: this.state.value,
        onChange: this.handleChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_16___default.a, {
        className: classes.menuText,
        classes: {
          root: classes.tabRoot
        },
        label: "\u9996\u9875",
        disableRipple: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_16___default.a, {
        className: classes.menuText,
        classes: {
          root: classes.tabRoot
        },
        label: "\u89C6\u9891\u6559\u5B66",
        disableRipple: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_16___default.a, {
        className: classes.menuText,
        classes: {
          root: classes.tabRoot
        },
        label: "\u6587\u6863",
        disableRipple: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_16___default.a, {
        className: classes.menuText,
        classes: {
          root: classes.tabRoot
        },
        label: "\u533A\u5757\u94FE",
        disableRipple: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_16___default.a, {
        className: classes.menuText,
        classes: {
          root: classes.tabRoot
        },
        label: "\u5173\u4E8E\u6211\u4EEC",
        disableRipple: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClickAway: this.handleClose.bind(this, 0),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        buttonRef: function buttonRef(node) {
          _this2.anchorEl = node;
        },
        "aria-owns": this.state.open ? 'menu-list-grow' : null,
        "aria-haspopup": "true",
        onClick: this.handleToggle.bind(this),
        className: classes.menuText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "\u8BED\u8A00\u9009\u62E9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12___default.a, {
        open: this.state.open,
        anchorEl: this.anchorEl,
        transition: true,
        disablePortal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, function (_ref) {
        var TransitionProps = _ref.TransitionProps,
            placement = _ref.placement;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_10___default.a, _extends({}, TransitionProps, {
          style: {
            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_14___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
          onClick: _this2.handleClose.bind(_this2, 1),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, "\u4E2D\u6587"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
          onClick: _this2.handleClose.bind(_this2, 2),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "English"))));
      }))))));
    }
  }]);

  return HeaderBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // <div className={classes.menuButtonGroup}>
// <Button className={classes.menuText} component={Link} to="/home">Features</Button>
// <Button className={classes.menuText} component={Link} to="/videolist">Enterprise</Button>
// <Button className={classes.menuText} component={Link} to="/document">Support</Button>
// <Button className={classes.menuText} component={Link} to="/cb">Support</Button>
// <Button className={classes.menuText} component={Link} to="/about">Support</Button>
// </div>


HeaderBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(HeaderBar));

/***/ })

})
//# sourceMappingURL=_app.js.e6226d535ea913e77f82.hot-update.js.map