webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Layout/GlobalCss.js":
/*!*****************************!*\
  !*** ./Layout/GlobalCss.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/Layout/GlobalCss.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n          * {\\n            box-sizing: border-box;\\n            font-size: 18px;\\n            }\\n\\n    body{\\n        padding: 0;\\n        margin: 0;\\n        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,\\n        Helvetica, sans-serif;\\n        background: #E9F0EF;\\n        color: #2d2d2d;\\n      }\\n\\n      html {\\n        font-size: 62.5%;\\n        padding: 0;\\n        margin: 0;\\n        overflow-x: hidden;\\n        scroll-behavior: smooth;\\n\\n    }\\n\\n    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@1,700&family=Noto+Sans+JP&display=swap');     \\n\\n      \\n    a {\\n        color: yellow;\\n    }\\n\\n      \\n    li {\\n        list-style: none;\\n    }\\n\\n      label{\\n        color: #2d2d2d;\\n        font-weight: normal;\\n        font-size: 1.2rem;\\n      }\\n\\n      input{\\n        border-radius: 3px;\\n        width: 100%;\\n        max-width: 450px;\\n        padding: .5rem;\\n        color: #2d2d2d;\\n        margin: .2rem 0rem;\\n        outline: none;\\n        border: none;\\n        box-sizing: border-box;\\n      }\\n\\n      textarea {\\n        border-radius: 3px;\\n        max-width: 450px;\\n        width: 100%;\\n        padding: .5rem;\\n        color: #2d2d2d;\\n        margin: .2rem 0rem;\\n        outline: none;\\n        border: none;\\n        box-sizing: border-box;\\n      }\\n\\n      button{\\n        background: #2d2d2d;\\n        outline: none;\\n        border-radius: 3px;\\n        width: 100%;\\n        padding: .7rem;\\n        margin: 0 auto;\\n        color: #fff;\\n        border: none;\\n        text-transform: uppercase;\\n        font-style: italic;\\n        box-sizing: border-box;\\n      }\\n      \\n      a{\\n        color: yellow;\\n      }\\n\\n      .logo{\\n        max-width: 550px;\\n        margin-bottom: 2.5rem;\\n      }\\n\\n      .description {\\n        text-align: center;\\n        font-size: 1.2rem;\\n        line-height: 1.4;\\n        max-width: 700px;\\n        margin: 1rem 1rem 1rem 1rem;\\n      }\\n      \\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nfunction GlobalCss(props) {\n  return __jsx(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"Global\"], {\n    styles: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject()),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  });\n}\n\n_c = GlobalCss;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalCss);\n\nvar _c;\n\n$RefreshReg$(_c, \"GlobalCss\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXQvR2xvYmFsQ3NzLmpzP2EyNGIiXSwibmFtZXMiOlsiR2xvYmFsQ3NzIiwicHJvcHMiLCJjc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3RCLFNBQ0ksTUFBQyxvREFBRDtBQUNFLFVBQU0sRUFBRUMseURBQUYsbUJBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKO0FBc0dIOztLQXZHUUYsUztBQXlHTUEsd0VBQWYiLCJmaWxlIjoiLi9MYXlvdXQvR2xvYmFsQ3NzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5mdW5jdGlvbiBHbG9iYWxDc3MocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8R2xvYmFsXG4gICAgICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgYm9keXtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogJ05vdG8gU2FucyBKUCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRTlGMEVGO1xuICAgICAgICBjb2xvcjogIzJkMmQyZDtcbiAgICAgIH1cblxuICAgICAgaHRtbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcblxuICAgIH1cblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdzppdGFsLHdnaHRAMSw3MDAmZmFtaWx5PU5vdG8rU2FucytKUCZkaXNwbGF5PXN3YXAnKTsgICAgIFxuXG4gICAgICBcbiAgICBhIHtcbiAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICB9XG5cbiAgICAgIFxuICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAgIGxhYmVse1xuICAgICAgICBjb2xvcjogIzJkMmQyZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICB9XG5cbiAgICAgIGlucHV0e1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgY29sb3I6ICMyZDJkMmQ7XG4gICAgICAgIG1hcmdpbjogLjJyZW0gMHJlbTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICBjb2xvcjogIzJkMmQyZDtcbiAgICAgICAgbWFyZ2luOiAuMnJlbSAwcmVtO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZDogIzJkMmQyZDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogLjdyZW07XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGF7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICB9XG5cbiAgICAgIC5sb2dve1xuICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgIG1hcmdpbjogMXJlbSAxcmVtIDFyZW0gMXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgIGB9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsQ3NzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Layout/GlobalCss.js\n");

/***/ })

})