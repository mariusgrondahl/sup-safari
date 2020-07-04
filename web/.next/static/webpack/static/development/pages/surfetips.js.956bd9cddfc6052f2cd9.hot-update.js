webpackHotUpdate("static/development/pages/surfetips.js",{

/***/ "./components/ArticleCard.js":
/*!***********************************!*\
  !*** ./components/ArticleCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/components/ArticleCard.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 200px;\\n    padding-top: .6rem;\\n    color: yellow;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-end;\\n    background-size: cover;\\n    background-position: center center;\\n    background-image: url(\", \");\\n    padding: 0;\\n    width: 100%;\\n    height: 10vh;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 90vw;\\n\\n    background: #1d1d1d;\\n    color: #fff;\\n    border-radius: 3px;\\n    display: flex;\\n    flex-direction: column;\\n    box-sizing: border-box;\\n    margin: 1rem;\\n    padding: 2rem;\\n    pointer: cursor;\\n\\n    @media (min-width: 900px) {\\n        max-width: 350px;\\n        }\\n\\n    h1{\\n        font-size: 2rem;\\n        margin: 0rem 0rem 0rem 0rem;\\n        color: yellow,\\n        \\n    }\\n\\n    h3 {\\n        font-size: 1.1rem;\\n        margin: 0rem;\\n        font-weight: 300;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar Card = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = Card;\nvar Image = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2(), function (props) {\n  return props.bildeURL;\n});\n_c2 = Image;\nvar Label = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].label(_templateObject3());\n_c3 = Label;\n\nfunction ArticleCard(props) {\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: props.url,\n    as: \"/post/\".concat(props.url),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(Card, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(Image, {\n    bildeURL: props.bildeURL,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, props.title, \" \"), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, props.subtitle), __jsx(Label, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, props.category)));\n}\n\n_c4 = ArticleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleCard);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"Image\");\n$RefreshReg$(_c3, \"Label\");\n$RefreshReg$(_c4, \"ArticleCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FydGljbGVDYXJkLmpzP2M5ZTYiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkltYWdlIiwicHJvcHMiLCJiaWxkZVVSTCIsIkxhYmVsIiwibGFiZWwiLCJBcnRpY2xlQ2FyZCIsInVybCIsInRpdGxlIiwic3VidGl0bGUiLCJjYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsbUJBQVY7S0FBTUYsSTtBQStCTixJQUFNRyxLQUFLLEdBQUdGLHVEQUFNLENBQUNDLEdBQVYscUJBTWlCLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLFFBQVY7QUFBQSxDQU50QixDQUFYO01BQU1GLEs7QUFZTixJQUFNRyxLQUFLLEdBQUdMLHVEQUFNLENBQUNNLEtBQVYsb0JBQVg7TUFBTUQsSzs7QUFNTixTQUFTRSxXQUFULENBQXFCSixLQUFyQixFQUE0QjtBQUN4QixTQUVJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVBLEtBQUssQ0FBQ0ssR0FBbEI7QUFBdUIsTUFBRSxrQkFBV0wsS0FBSyxDQUFDSyxHQUFqQixDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLEtBQUQ7QUFBTyxZQUFRLEVBQUVMLEtBQUssQ0FBQ0MsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRCxLQUFLLENBQUNNLEtBQVgsTUFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS04sS0FBSyxDQUFDTyxRQUFYLENBSkosRUFLSSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRUCxLQUFLLENBQUNRLFFBQWQsQ0FMSixDQURBLENBRko7QUFjSDs7TUFmUUosVztBQWlCTUEsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGVDYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDkwdnc7XG5cbiAgICBiYWNrZ3JvdW5kOiAjMWQxZDFkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBwb2ludGVyOiBjdXJzb3I7XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICAgICAgfVxuXG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgbWFyZ2luOiAwcmVtIDByZW0gMHJlbSAwcmVtO1xuICAgICAgICBjb2xvcjogeWVsbG93LFxuICAgICAgICBcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuYCAgIFxuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb3BzID0+IHByb3BzLmJpbGRlVVJMfSk7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwdmg7XG5gXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsIGBcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZy10b3A6IC42cmVtO1xuICAgIGNvbG9yOiB5ZWxsb3c7XG5gXG5cbmZ1bmN0aW9uIEFydGljbGVDYXJkKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICBcbiAgICAgICAgPExpbmsgaHJlZj17cHJvcHMudXJsfSBhcz17YC9wb3N0LyR7cHJvcHMudXJsfWB9PlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgPEltYWdlIGJpbGRlVVJMPXtwcm9wcy5iaWxkZVVSTH0+XG4gICAgICAgIDwvSW1hZ2U+XG4gICAgICAgICAgICA8aDE+e3Byb3BzLnRpdGxlfSA8L2gxPlxuICAgICAgICAgICAgPGgzPntwcm9wcy5zdWJ0aXRsZX08L2gzPlxuICAgICAgICAgICAgPExhYmVsPntwcm9wcy5jYXRlZ29yeX08L0xhYmVsPlxuICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUNhcmQ7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ArticleCard.js\n");

/***/ })

})