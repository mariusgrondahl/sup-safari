webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/Layout */ \"./Layout/Layout.js\");\n/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContactForm */ \"./components/ContactForm.js\");\n/* harmony import */ var _components_CenterWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CenterWrapper */ \"./components/CenterWrapper.js\");\n/* harmony import */ var _components_Fullscreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Fullscreen */ \"./components/Fullscreen.js\");\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction App(_ref) {\n  var data = _ref.data;\n  return __jsx(_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 3\n    }\n  }, __jsx(_components_Fullscreen__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    image: \"/img/supsafari.jpg\",\n    text: \"#fff\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: \"logo\",\n    loading: \"lazy\",\n    width: \"250px\",\n    src: \"/logo-red.svg\",\n    alt: \"sup safari logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, \"SUP-utleie i Fredrikstad og Hvaler\")), __jsx(\"div\", {\n    className: \"hero\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    className: \"description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"Opplev elver, innsj\\xF8er og skj\\xE6rg\\xE5rden st\\xE5ende! Vi tilbyr utleie av SUPbrett til \", __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 40\n    }\n  }, \"paddleturer i Fredrikstad og Hvaler-regionen.\"), \"Vi tar gjerne en prat. Legg igjen navn og epost og n\\xE5r du \\xF8nsker \\xE5 leie. Vi prek\\xE6s \\uD83D\\uDE0E\"), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  })));\n}\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkFwcCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsR0FBVCxPQUF1QjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUVyQixTQUNBLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsOERBQUQ7QUFBWSxTQUFLLEVBQUMsb0JBQWxCO0FBQXdDLFFBQUksRUFBQyxNQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFzQixXQUFPLEVBQUMsTUFBOUI7QUFBcUMsU0FBSyxFQUFDLE9BQTNDO0FBQW1ELE9BQUcsRUFBQyxlQUF2RDtBQUF3RSxPQUFHLEVBQUMsaUJBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBSEEsQ0FGRixFQVFFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxR0FFaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFGakMsZ0hBRkYsRUFPRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQVJGLENBREE7QUF1QkQ7O0tBekJRRCxHO0FBMkJNQSxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vTGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0nXG5pbXBvcnQgQ2VudGVyV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL0NlbnRlcldyYXBwZXInXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxzY3JlZW4nXG5cblxuZnVuY3Rpb24gQXBwKHsgZGF0YSB9KSB7XG5cbiAgcmV0dXJuKFxuICA8TGF5b3V0PlxuXG4gICAgPEZ1bGxzY3JlZW4gaW1hZ2U9XCIvaW1nL3N1cHNhZmFyaS5qcGdcIiAgdGV4dD1cIiNmZmZcIj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBsb2FkaW5nPVwibGF6eVwiIHdpZHRoPVwiMjUwcHhcIiBzcmM9XCIvbG9nby1yZWQuc3ZnXCIgIGFsdD1cInN1cCBzYWZhcmkgbG9nb1wiIC8+XG5cbiAgICA8aDE+U1VQLXV0bGVpZSBpIEZyZWRyaWtzdGFkIG9nIEh2YWxlcjwvaDE+XG4gICAgPC9GdWxsc2NyZWVuPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9J2hlcm8nPlxuICAgICAgXG4gICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cbiAgICAgIE9wcGxldiBlbHZlciwgaW5uc2rDuGVyIG9nIHNrasOmcmfDpXJkZW4gc3TDpWVuZGUhXG4gICAgICBWaSB0aWxieXIgdXRsZWllIGF2IFNVUGJyZXR0IHRpbCA8c3Ryb25nPnBhZGRsZXR1cmVyIGkgRnJlZHJpa3N0YWQgb2cgSHZhbGVyLXJlZ2lvbmVuLjwvc3Ryb25nPlxuICAgICAgVmkgdGFyIGdqZXJuZSBlbiBwcmF0LiBMZWdnIGlnamVuIG5hdm4gb2cgZXBvc3Qgb2cgbsOlciBkdSDDuG5za2VyIMOlIGxlaWUuIFZpIHByZWvDpnMgJiMxMjg1MjY7IFxuICAgICAgPC9wPlxuICAgICAgPENvbnRhY3RGb3JtIC8+XG4gICAgPC9kaXY+XG5cbiBcbjwvTGF5b3V0PlxuKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})