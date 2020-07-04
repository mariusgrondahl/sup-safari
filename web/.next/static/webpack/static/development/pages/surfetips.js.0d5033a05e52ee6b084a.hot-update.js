webpackHotUpdate("static/development/pages/surfetips.js",{

/***/ "./components/ArticleCard.js":
/*!***********************************!*\
  !*** ./components/ArticleCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/components/ArticleCard.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 200px;\\n    padding-top: .6rem;\\n    color: yellow;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-end;\\n    background-size: cover;\\n    background-position: bottom center;\\n    background-image: url(\", \");\\n    padding: 0;\\n    width: 100%;\\n    height: 25vh;\\n    border-top-left-radius: 3px;\\n    border-top-right-radius: 3px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 90vw;\\n    background: #fafafa;\\n    color: #2d2d2d;\\n    font-weight: 600;\\n    border-radius: 3px;\\n    display: flex;\\n    flex-direction: column;\\n    box-sizing: border-box;\\n    margin: 1rem;\\n    pointer: cursor;\\n    text-align: center;\\n    box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.12);\\n\\n    @media (min-width: 900px) {\\n        max-width: 350px;\\n        }\\n\\n    h1{\\n        font-size: 2.5rem;\\n        margin: 0rem 0rem 0rem 0rem;\\n        color: #2d2d2d;\\n        padding: 1rem;\\n\\n        \\n    }\\n\\n    h3 {\\n        font-size: 1.1rem;\\n        margin: 0rem;\\n        font-weight: 300;\\n    }\\n\\n    a{\\n        margin-top: 2rem;\\n    }\\n\\n    .bottom-card{\\n        padding: 1rem;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar Card = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = Card;\nvar Image = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2(), function (props) {\n  return props.bildeURL;\n});\n_c2 = Image;\nvar Label = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].label(_templateObject3());\n\nfunction ArticleCard(props) {\n  return __jsx(Card, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(Image, {\n    bildeURL: props.bildeURL,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"bottom-card\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, props.title, \" \"), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, props.subtitle)));\n}\n\n_c3 = ArticleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleCard);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"Image\");\n$RefreshReg$(_c3, \"ArticleCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FydGljbGVDYXJkLmpzP2M5ZTYiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkltYWdlIiwicHJvcHMiLCJiaWxkZVVSTCIsIkxhYmVsIiwibGFiZWwiLCJBcnRpY2xlQ2FyZCIsInRpdGxlIiwic3VidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsbUJBQVY7S0FBTUYsSTtBQTBDTixJQUFNRyxLQUFLLEdBQUdGLHVEQUFNLENBQUNDLEdBQVYscUJBTWlCLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLFFBQVY7QUFBQSxDQU50QixDQUFYO01BQU1GLEs7QUFjTixJQUFNRyxLQUFLLEdBQUdMLHVEQUFNLENBQUNNLEtBQVYsb0JBQVg7O0FBTUEsU0FBU0MsV0FBVCxDQUFxQkosS0FBckIsRUFBNEI7QUFDeEIsU0FDSSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsS0FBRDtBQUFPLFlBQVEsRUFBRUEsS0FBSyxDQUFDQyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFHQTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtELEtBQUssQ0FBQ0ssS0FBWCxNQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTCxLQUFLLENBQUNNLFFBQVgsQ0FGSixDQUhBLENBREo7QUFVSDs7TUFYUUYsVztBQWFNQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXJ0aWNsZUNhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgY29sb3I6ICMyZDJkMmQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHBvaW50ZXI6IGN1cnNvcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxOXB4IDBweCByZ2JhKDAsMCwwLDAuMTIpO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgIH1cblxuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwcmVtIDByZW0gMHJlbSAwcmVtO1xuICAgICAgICBjb2xvcjogIzJkMmQyZDtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuXG4gICAgYXtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG5cbiAgICAuYm90dG9tLWNhcmR7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuYCAgIFxuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb3BzID0+IHByb3BzLmJpbGRlVVJMfSk7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG5gXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsIGBcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZy10b3A6IC42cmVtO1xuICAgIGNvbG9yOiB5ZWxsb3c7XG5gXG5cbmZ1bmN0aW9uIEFydGljbGVDYXJkKHByb3BzKSB7XG4gICAgcmV0dXJuICggICAgXG4gICAgICAgIDxDYXJkPlxuICAgICAgICA8SW1hZ2UgYmlsZGVVUkw9e3Byb3BzLmJpbGRlVVJMfT5cbiAgICAgICAgPC9JbWFnZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tY2FyZFwiPlxuICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX0gPC9oMT5cbiAgICAgICAgICAgIDxoMz57cHJvcHMuc3VidGl0bGV9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQ2FyZDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ArticleCard.js\n");

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false

})