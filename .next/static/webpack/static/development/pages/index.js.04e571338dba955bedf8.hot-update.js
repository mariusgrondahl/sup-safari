webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Layout/GlobalCss.js":
/*!*****************************!*\
  !*** ./Layout/GlobalCss.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/Layout/GlobalCss.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n          * {\\n            box-sizing: border-box;\\n            }\\n\\n    body{\\n        padding: 0;\\n        margin: 0;\\n        font-size: 16px;\\n        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,\\n        Helvetica, sans-serif;\\n        background: tomato;\\n        color: #fff;\\n      }\\n\\n      html {\\n        font-size: 62.5%;\\n        padding: 0;\\n        margin: 0;\\n        overflow-x: hidden;\\n        scroll-behavior: smooth;\\n\\n    }\\n\\n    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@1,700&family=Noto+Sans+JP&display=swap');     \\n\\n      \\n    a {\\n        color: yellow;\\n    }\\n\\n      \\n    li {\\n        list-style: none;\\n    }\\n\\n      label{\\n        color: #2d2d2d;\\n        font-weight: bold;\\n        font-size: 1.4rem;\\n      }\\n\\n      input{\\n        border-radius: 3px;\\n        width: 100%;\\n        max-width: 450px;\\n        padding: .8rem;\\n        color: #2d2d2d;\\n        margin: .2rem 0rem;\\n        outline: none;\\n        border: none;\\n        box-sizing: border-box;\\n      }\\n\\n      textarea {\\n        border-radius: 3px;\\n        max-width: 450px;\\n        width: 100%;\\n        padding: .5rem;\\n        color: #2d2d2d;\\n        margin: .2rem 0rem;\\n        outline: none;\\n        border: none;\\n        box-sizing: border-box;\\n      }\\n\\n      button{\\n        background: #2d2d2d;\\n        outline: none;\\n        border-radius: 3px;\\n        width: 100%;\\n        padding: .7rem;\\n        margin: 0 auto;\\n        color: #fff;\\n        border: none;\\n        text-transform: uppercase;\\n        font-style: italic;\\n        box-sizing: border-box;\\n      }\\n      \\n      a{\\n        color: yellow;\\n      }\\n\\n      .logo{\\n        max-width: 550px;\\n        margin-bottom: 2.5rem;\\n      }\\n      \\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nfunction GlobalCss(props) {\n  return __jsx(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"Global\"], {\n    styles: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject()),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  });\n}\n\n_c = GlobalCss;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalCss);\n\nvar _c;\n\n$RefreshReg$(_c, \"GlobalCss\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXQvR2xvYmFsQ3NzLmpzP2EyNGIiXSwibmFtZXMiOlsiR2xvYmFsQ3NzIiwicHJvcHMiLCJjc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3RCLFNBQ0ksTUFBQyxvREFBRDtBQUNFLFVBQU0sRUFBRUMseURBQUYsbUJBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKO0FBOEZIOztLQS9GUUYsUztBQWlHTUEsd0VBQWYiLCJmaWxlIjoiLi9MYXlvdXQvR2xvYmFsQ3NzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5mdW5jdGlvbiBHbG9iYWxDc3MocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8R2xvYmFsXG4gICAgICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuXG4gICAgYm9keXtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEpQJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxuICAgICAgICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgIGJhY2tncm91bmQ6IHRvbWF0bztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIGh0bWwge1xuICAgICAgICBmb250LXNpemU6IDYyLjUlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG5cbiAgICB9XG5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3c6aXRhbCx3Z2h0QDEsNzAwJmZhbWlseT1Ob3RvK1NhbnMrSlAmZGlzcGxheT1zd2FwJyk7ICAgICBcblxuICAgICAgXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuXG4gICAgICBcbiAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgICBsYWJlbHtcbiAgICAgICAgY29sb3I6ICMyZDJkMmQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIH1cblxuICAgICAgaW5wdXR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgICAgIHBhZGRpbmc6IC44cmVtO1xuICAgICAgICBjb2xvcjogIzJkMmQyZDtcbiAgICAgICAgbWFyZ2luOiAuMnJlbSAwcmVtO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIGNvbG9yOiAjMmQyZDJkO1xuICAgICAgICBtYXJnaW46IC4ycmVtIDByZW07XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgICAgYnV0dG9ue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAuN3JlbTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgYXtcbiAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgIH1cblxuICAgICAgLmxvZ297XG4gICAgICAgIG1heC13aWR0aDogNTUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgIGB9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsQ3NzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Layout/GlobalCss.js\n");

/***/ })

})