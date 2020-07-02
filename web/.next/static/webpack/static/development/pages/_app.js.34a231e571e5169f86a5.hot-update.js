webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/components/NavBar.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  width: 100%;\\n  z-index: 9;\\n  background: tomato;\\n  color: #2d2d2d;\\n  background: transparent;\\n  box-sizing: border-box;\\n\\n  .logo {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    text-align: center;\\n    align-items: center;\\n    width: 200px;\\n    color: #fff;\\n    margin: 0rem 1rem 1rem 2rem;\\n\\n    @media (min-width: 700px) {\\n      display: flex;\\n      width: 300px;\\n      justify-content: left;\\n    }\\n  }\\n  nav {\\n    position: relative;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    background: transparent;\\n    box-sizing: border-box;\\n    width: 100%;\\n    padding: .5rem 0rem 0.5rem .5rem;\\n    z-index: 9;\\n\\n    ul {\\n      display: flex;\\n      flex-direction: row;\\n      padding: 0;\\n      justify-content: space-between;\\n      margin: 0;\\n      width: 100%;\\n\\n      @media (min-width: 700px) {\\n        justify-content: flex-end;\\n      }\\n\\n      li {\\n        text-align: center;\\n        margin: 0rem 1rem;\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center;\\n        font-size: 1.3rem;\\n        font-weight: bold;\\n\\n        a {\\n          font-weight: light;\\n          color: #fff;\\n          text-transform: uppercase;\\n          letter-spacing: 1.5px;\\n\\n          :hover {\\n            color: yelow;\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar NavbarWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = NavbarWrapper;\n\nfunction NavBar() {\n  return __jsx(NavbarWrapper, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 10\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/logo.svg\",\n    width: \"160\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }))), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }, \"Hjem\"))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/blog\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }, \"Vannblogggen\"))))));\n}\n\n_c2 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavbarWrapper\");\n$RefreshReg$(_c2, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci5qcz9lYjI0Il0sIm5hbWVzIjpbIk5hdmJhcldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXZCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7S0FBTUYsYTs7QUF5RU4sU0FBU0csTUFBVCxHQUFrQjtBQUNoQixTQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsV0FBVDtBQUFxQixTQUFLLEVBQUMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREQsQ0FESCxFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsQ0FEQSxDQURBLEVBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQSxDQURBLENBUEEsQ0FQSixDQURGLENBREY7QUEwQkQ7O01BM0JRQSxNO0FBNkJNQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2QmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IE5hdmJhcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiB0b21hdG87XG4gIGNvbG9yOiAjMmQyZDJkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAubG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDByZW0gMXJlbSAxcmVtIDJyZW07XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgfVxuICB9XG4gIG5hdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAuNXJlbSAwcmVtIDAuNXJlbSAuNXJlbTtcbiAgICB6LWluZGV4OiA5O1xuXG4gICAgdWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwcmVtIDFyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuXG4gICAgICAgICAgOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB5ZWxvdztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIE5hdkJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyV3JhcHBlcj5cbiAgICAgIDxuYXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5zdmdcIiB3aWR0aD1cIjE2MFwiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHVsPiAgXG4gICAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SGplbTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cblxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cbiAgICAgICAgICA8YT5WYW5uYmxvZ2dnZW48L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9OYXZiYXJXcmFwcGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

})