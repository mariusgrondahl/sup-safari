webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/components/NavBar.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  top: 0;\\n  width: 100%;\\n  z-index: 9;\\n  background: tomato;\\n  color: #2d2d2d;\\n  box-sizing: border-box;\\n\\n  .logo {\\n    display: flex;\\n    flex-direction: row;\\n    text-align: center;\\n    color: #fff;\\n    width: 150px;\\n    margin: .5rem .5rem .5rem .5rem;\\n\\n    @media (min-width: 700px) {\\n      display: flex;\\n      width: 210px;\\n      justify-content: left;\\n    }\\n  }\\n  nav {\\n    position: relative;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    background: transparent;\\n    box-sizing: border-box;\\n    width: 100%;\\n    height: 5rem;\\n    padding: .5rem .5rem 0.5rem .5rem;\\n    z-index: 9;\\n\\n    ul {\\n      display: flex;\\n      flex-direction: row;\\n      padding: 0;\\n      justify-content: flex-end;\\n      margin: 0;\\n      width: 100%;\\n\\n      @media (min-width: 700px) {\\n        justify-content: flex-end;\\n      }\\n\\n      li {\\n        text-align: center;\\n        margin: 0rem 1rem;\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center;\\n        font-size: 1.4rem;\\n        font-weight: bold;\\n\\n        @media (min-width: 700px) {\\n          font-size: 1.8rem;\\n      }\\n\\n        a {\\n          font-weight: light;\\n          color: #fff;\\n          text-transform: uppercase;\\n          letter-spacing: 1.2px;\\n\\n          :hover {\\n            color: yelow;\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar NavbarWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = NavbarWrapper;\n\nfunction NavBar() {\n  return __jsx(NavbarWrapper, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    className: \"logo\",\n    loading: \"lazy\",\n    width: \"120px\",\n    src: \"/logo-transparent-white.svg\",\n    alt: \"sup safari logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }))), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/blog\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, \"SUP-blogggen\"))))));\n}\n\n_c2 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavbarWrapper\");\n$RefreshReg$(_c2, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci5qcz9lYjI0Il0sIm5hbWVzIjpbIk5hdmJhcldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXZCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7S0FBTUYsYTs7QUE0RU4sU0FBU0csTUFBVCxHQUFrQjtBQUNoQixTQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFzQixXQUFPLEVBQUMsTUFBOUI7QUFBcUMsU0FBSyxFQUFDLE9BQTNDO0FBQW1ELE9BQUcsRUFBQyw2QkFBdkQ7QUFBc0YsT0FBRyxFQUFDLGlCQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FEQSxDQURBLENBTkosQ0FERixDQURGO0FBbUJEOztNQXBCUUEsTTtBQXNCTUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBOYXZiYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiB0b21hdG87XG4gIGNvbG9yOiAjMmQyZDJkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC5sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIH1cbiAgfVxuICBuYXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIDAuNXJlbSAuNXJlbTtcbiAgICB6LWluZGV4OiA5O1xuXG4gICAgdWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMHJlbSAxcmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcblxuICAgICAgICAgIDpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogeWVsb3c7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5mdW5jdGlvbiBOYXZCYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPE5hdmJhcldyYXBwZXI+XG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgbG9hZGluZz1cImxhenlcIiB3aWR0aD1cIjEyMHB4XCIgc3JjPVwiL2xvZ28tdHJhbnNwYXJlbnQtd2hpdGUuc3ZnXCIgIGFsdD1cInN1cCBzYWZhcmkgbG9nb1wiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bD4gIFxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cbiAgICAgICAgICAgIDxhPlNVUC1ibG9nZ2dlbjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cblxuICAgICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L05hdmJhcldyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

})