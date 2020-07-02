webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/Layout */ \"./Layout/Layout.js\");\n/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ContactForm */ \"./components/ContactForm.js\");\n/* harmony import */ var _components_CenterWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CenterWrapper */ \"./components/CenterWrapper.js\");\n/* harmony import */ var _components_Fullscreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Fullscreen */ \"./components/Fullscreen.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client */ \"./client.js\");\n\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    p{\\n      text-align: center;\\n      font-size: 1.8rem;\\n      line-height: 1.6;\\n      max-width: 700px;\\n      margin: 3rem 2rem 2rem 2rem;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar Description = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c = Description;\n\nfunction Home(props) {\n  __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Fullscreen__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    image: \"/img/supsafari.jpg\",\n    text: \"#fff\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: \"logo\",\n    loading: \"lazy\",\n    width: \"160px\",\n    src: \"/logo-red.svg\",\n    alt: \"sup safari logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"yellow\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"SUP-utleie\"), \"  i Fredrikstad og Hvaler\")), __jsx(_components_CenterWrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(Description, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \"Opplev elver, innsj\\xF8er og skj\\xE6rg\\xE5rden st\\xE5ende! Vi tilbyr utleie av SUPbrett til \", __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 40\n    }\n  }, \"paddleturer i Fredrikstad og Hvaler-regionen.\"), \" Vi tar gjerne en prat. Legg igjen navn, epost og n\\xE5r du \\xF8nsker \\xE5 leie. Vi prek\\xE6s \\uD83D\\uDE0E \\uD83E\\uDD19 \\uD83C\\uDFC4\")), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  })));\n}\n\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Description\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkRlc2NyaXB0aW9uIiwic3R5bGVkIiwiZGl2IiwiSG9tZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFdBQVcsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBakI7S0FBTUYsVzs7QUFZTixTQUFTRyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFFckIscUVBQ0ksTUFBQyw4REFBRDtBQUFZLFNBQUssRUFBQyxvQkFBbEI7QUFBd0MsUUFBSSxFQUFDLE1BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQXNCLFdBQU8sRUFBQyxNQUE5QjtBQUFxQyxTQUFLLEVBQUMsT0FBM0M7QUFBbUQsT0FBRyxFQUFDLGVBQXZEO0FBQXdFLE9BQUcsRUFBQyxpQkFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQU0sYUFBUyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUosOEJBRkEsQ0FESixFQUtNLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxR0FFaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFGakMseUlBREEsQ0FEQSxFQU9BLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBBLENBTE47QUFpQkM7O01BbkJRRCxJO0FBd0JNQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL0xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtJ1xuaW1wb3J0IENlbnRlcldyYXBwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DZW50ZXJXcmFwcGVyJ1xuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsc2NyZWVuJ1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCdcblxuXG5cbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcbiAgICBwe1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgIG1hcmdpbjogM3JlbSAycmVtIDJyZW0gMnJlbTtcbiAgICB9XG5gO1xuXG5cblxuZnVuY3Rpb24gSG9tZShwcm9wcykge1xuXG48PlxuICAgIDxGdWxsc2NyZWVuIGltYWdlPVwiL2ltZy9zdXBzYWZhcmkuanBnXCIgIHRleHQ9XCIjZmZmXCI+XG4gICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgbG9hZGluZz1cImxhenlcIiB3aWR0aD1cIjE2MHB4XCIgc3JjPVwiL2xvZ28tcmVkLnN2Z1wiICBhbHQ9XCJzdXAgc2FmYXJpIGxvZ29cIiAvPlxuICAgIDxoMT48c3BhbiBjbGFzc05hbWU9XCJ5ZWxsb3dcIj5TVVAtdXRsZWllPC9zcGFuPiAgaSBGcmVkcmlrc3RhZCBvZyBIdmFsZXI8L2gxPlxuICAgIDwvRnVsbHNjcmVlbj4gICAgXG4gICAgICA8Q2VudGVyV3JhcHBlcj5cbiAgICAgIDxEZXNjcmlwdGlvbj5cbiAgICAgIDxwPlxuICAgICAgT3BwbGV2IGVsdmVyLCBpbm5zasO4ZXIgb2cgc2tqw6ZyZ8OlcmRlbiBzdMOlZW5kZSFcbiAgICAgIFZpIHRpbGJ5ciB1dGxlaWUgYXYgU1VQYnJldHQgdGlsIDxzdHJvbmc+cGFkZGxldHVyZXIgaSBGcmVkcmlrc3RhZCBvZyBIdmFsZXItcmVnaW9uZW4uPC9zdHJvbmc+IFZpIHRhciBnamVybmUgZW4gcHJhdC4gTGVnZyBpZ2plbiBuYXZuLCBlcG9zdCBvZyBuw6VyIGR1IMO4bnNrZXIgw6UgbGVpZS4gVmkgcHJla8OmcyAmIzEyODUyNjsgJiMxMjkzMDU7ICYjeDFGM0M0OyBcbiAgICAgIDwvcD5cbiAgICAgIDwvRGVzY3JpcHRpb24+XG4gICAgICA8Q29udGFjdEZvcm0gLz5cbiAgICBcbiAgICAgIDwvQ2VudGVyV3JhcHBlcj5cbjwvPlxuXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})