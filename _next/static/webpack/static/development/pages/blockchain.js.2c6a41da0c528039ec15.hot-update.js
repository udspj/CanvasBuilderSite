webpackHotUpdate("static/development/pages/blockchain.js",{

/***/ "./src/pages/BlockchainPage.js":
/*!*************************************!*\
  !*** ./src/pages/BlockchainPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ListTabBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ListTabBar */ "./src/components/ListTabBar.js");
/* harmony import */ var _static_resource_document_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/resource/document.png */ "./static/resource/document.png");
/* harmony import */ var _static_resource_document_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_resource_document_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _document_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./document.css */ "./src/pages/document.css");
/* harmony import */ var _document_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_document_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/saveproj/yanshen/canvasbuildersite/CanvasBuilderSite/cbsite/src/pages/BlockchainPage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    bkdiv: {
      backgroundColor: '#e1e1e1'
    },
    list: {
      backgroundColor: '#fff',
      margin: '20px'
    },
    content: {
      backgroundColor: '#fff',
      margin: '20px',
      minHeight: '80vh',
      padding: '20px'
    },
    bar: {// position: 'absolute',
      // left: 0,
      // right: 0
    },
    grid: {
      backgroundColor: '#ffffff00' // backgroundColor: '#e1e1e1',
      // position: 'absolute',
      // marginLeft: '200px',
      // right: 0,
      // top: 104

    },
    listcontent: {
      // backgroundColor: '#cc00ff',
      marginLeft: '10px',
      width: '100%'
    },
    content1: {
      color: '#666',
      fontSize: '15px',
      marginBottom: '0px'
    },
    content2: {
      color: '#666',
      fontSize: '12px',
      marginTop: '0px'
    },
    downlist: {
      width: '200px',
      position: 'absolute',
      backgroundColor: '#666',
      color: '#fff',
      fontSize: '14px',
      marginTop: '40px'
    },
    nemutexts: {
      textAlign: 'center'
    }
  };
};

var listdata = ["区块链文档1abc", "文档2abc", "文档3abc", "文档4abc", "文档5abc", "文档6abc", "文档7abc", "文档8abc", "文档9abc", "文档10abc"];
var menudata = ["区块链菜单1abc", "菜单2abc", "菜单3abc", "菜单4abc", "菜单1abc", "菜单1abc", "菜单1abc", "菜单1abc", "菜单1abc", "菜单1abc"];

var BlockchainPage =
/*#__PURE__*/
function (_Component) {
  _inherits(BlockchainPage, _Component);

  function BlockchainPage() {
    var _this;

    _classCallCheck(this, BlockchainPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlockchainPage).call(this));
    _this.state = {
      selectedindex: 0,
      menuopen: false
    };
    return _this;
  }

  _createClass(BlockchainPage, [{
    key: "onListitemClick",
    value: function onListitemClick(reactid) {
      this.setState({
        "selectedindex": reactid
      });
    }
  }, {
    key: "downmenuClick",
    value: function downmenuClick() {
      var menuopen = !this.state.menuopen;
      this.setState({
        menuopen: menuopen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var menuopen = this.state.menuopen;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.bkdiv,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.downlist,
        style: {
          display: menuopen ? 'block' : 'none',
          animation: menuopen ? '0.15s open linear' : '0.15s close linear'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), menudata.map(function (tile, reactid) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: reactid,
          className: classes.nemutexts,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, menudata[reactid], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListTabBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.bar,
        downlistClicked: this.downmenuClick.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: classes.grid,
        container: true,
        direction: "row",
        justify: "center",
        alignItems: "flex-start",
        style: {
          marginLeft: menuopen ? '200px' : '0px',
          width: menuopen ? 'calc(100% - 200px)' : '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: classes.list,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, listdata.map(function (tile, reactid) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
          button: true,
          key: reactid,
          onClick: function onClick() {
            return _this2.onListitemClick(reactid);
          },
          disableRipple: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: _static_resource_document_png__WEBPACK_IMPORTED_MODULE_4___default.a,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classes.listcontent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: classes.content1,
          style: {
            color: reactid === _this2.state.selectedindex ? '#3fc2ff' : '#666'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, tile), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: classes.content2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, "Jan 9, 2014")));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        item: true,
        xs: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, listdata[this.state.selectedindex]))));
    }
  }]);

  return BlockchainPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BlockchainPage.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(BlockchainPage));

/***/ })

})
//# sourceMappingURL=blockchain.js.2c6a41da0c528039ec15.hot-update.js.map