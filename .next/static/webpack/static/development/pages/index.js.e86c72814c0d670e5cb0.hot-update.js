webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContactForm */ \"./components/ContactForm.js\");\n/* harmony import */ var _components_Fullscreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Fullscreen */ \"./components/Fullscreen.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction App(_ref) {\n  var data = _ref.data;\n  return __jsx(Layout, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }\n  }, __jsx(_components_Fullscreen__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    image: \"/img/supsafari.jpg\",\n    text: \"#fff\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: \"logo\",\n    loading: \"lazy\",\n    width: \"250px\",\n    src: \"/logo-red.svg\",\n    alt: \"sup safari logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, \"SUP-utleie i Fredrikstad og Hvaler\")), __jsx(\"div\", {\n    className: \"hero\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    className: \"description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"Opplev elver, innsj\\xF8er og skj\\xE6rg\\xE5rden st\\xE5ende! Vi tilbyr utleie av SUPbrett til \", __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 40\n    }\n  }, \"paddleturer i Fredrikstad og Hvaler-regionen.\"), \"Vi tar gjerne en prat. Legg igjen navn og epost og n\\xE5r du \\xF8nsker \\xE5 leie. Vi prek\\xE6s \\uD83D\\uDE0E\"), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }));\n}\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkFwcCIsImRhdGEiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxHQUFULE9BQXVCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBRXJCLFNBQ0EsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDhEQUFEO0FBQVksU0FBSyxFQUFDLG9CQUFsQjtBQUF3QyxRQUFJLEVBQUMsTUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBc0IsV0FBTyxFQUFDLE1BQTlCO0FBQXFDLFNBQUssRUFBQyxPQUEzQztBQUFtRCxPQUFHLEVBQUMsZUFBdkQ7QUFBd0UsT0FBRyxFQUFDLGlCQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUhBLENBRkYsRUFRRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUdBRWlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBRmpDLGdIQURGLEVBTUUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FSRixFQWdCRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FEQTtBQXVCRDs7S0F6QlFELEc7QUEyQk1FLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSdcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbHNjcmVlbidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5cbmZ1bmN0aW9uIEFwcCh7IGRhdGEgfSkge1xuXG4gIHJldHVybihcbiAgPExheW91dD5cblxuICAgIDxGdWxsc2NyZWVuIGltYWdlPVwiL2ltZy9zdXBzYWZhcmkuanBnXCIgIHRleHQ9XCIjZmZmXCI+XG4gICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgbG9hZGluZz1cImxhenlcIiB3aWR0aD1cIjI1MHB4XCIgc3JjPVwiL2xvZ28tcmVkLnN2Z1wiICBhbHQ9XCJzdXAgc2FmYXJpIGxvZ29cIiAvPlxuXG4gICAgPGgxPlNVUC11dGxlaWUgaSBGcmVkcmlrc3RhZCBvZyBIdmFsZXI8L2gxPlxuICAgIDwvRnVsbHNjcmVlbj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPSdoZXJvJz5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxuICAgICAgT3BwbGV2IGVsdmVyLCBpbm5zasO4ZXIgb2cgc2tqw6ZyZ8OlcmRlbiBzdMOlZW5kZSFcbiAgICAgIFZpIHRpbGJ5ciB1dGxlaWUgYXYgU1VQYnJldHQgdGlsIDxzdHJvbmc+cGFkZGxldHVyZXIgaSBGcmVkcmlrc3RhZCBvZyBIdmFsZXItcmVnaW9uZW4uPC9zdHJvbmc+XG4gICAgICBWaSB0YXIgZ2plcm5lIGVuIHByYXQuIExlZ2cgaWdqZW4gbmF2biBvZyBlcG9zdCBvZyBuw6VyIGR1IMO4bnNrZXIgw6UgbGVpZS4gVmkgcHJla8OmcyAmIzEyODUyNjsgXG4gICAgICA8L3A+XG4gICAgICA8Q29udGFjdEZvcm0gLz5cbiAgICA8L2Rpdj5cbiAgICA8Rm9vdGVyIC8+XG5cbiBcbjwvTGF5b3V0PlxuKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})