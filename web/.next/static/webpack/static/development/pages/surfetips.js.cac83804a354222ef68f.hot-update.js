webpackHotUpdate("static/development/pages/surfetips.js",{

/***/ "./components/ArticleCard.js":
/*!***********************************!*\
  !*** ./components/ArticleCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/components/ArticleCard.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 200px;\\n    padding-top: .6rem;\\n    color: yellow;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-end;\\n    background-size: cover;\\n    background-position: bottom center;\\n    background-image: url(\", \");\\n    padding: 0;\\n    width: 100%;\\n    height: 25vh;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 90vw;\\n    background: tomato;\\n    color: #fff;\\n    font-weight: bold;\\n    border-radius: 3px;\\n    display: flex;\\n    flex-direction: column;\\n    box-sizing: border-box;\\n    margin: 1rem;\\n    pointer: cursor;\\n    text-align: center;\\n\\n    @media (min-width: 900px) {\\n        max-width: 350px;\\n        }\\n\\n    h1{\\n        font-size: 2rem;\\n        margin: 0rem 0rem 0rem 0rem;\\n        color: yellow,\\n        \\n    }\\n\\n    h3 {\\n        font-size: 1.1rem;\\n        margin: 0rem;\\n        font-weight: 300;\\n    }\\n\\n    .bottom-card{\\n        padding: 1rem;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar Card = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = Card;\nvar Image = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2(), function (props) {\n  return props.bildeURL;\n});\n_c2 = Image;\nvar Label = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].label(_templateObject3());\n\nfunction ArticleCard(props) {\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: props.url,\n    as: \"/post/\".concat(props.url),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(Card, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(Image, {\n    bildeURL: props.bildeURL,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"bottom-card\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, props.title, \" \"), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, props.subtitle), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: props.url,\n    as: \"/post/\".concat(props.url),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }))));\n}\n\n_c3 = ArticleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleCard);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"Image\");\n$RefreshReg$(_c3, \"ArticleCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FydGljbGVDYXJkLmpzP2M5ZTYiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkltYWdlIiwicHJvcHMiLCJiaWxkZVVSTCIsIkxhYmVsIiwibGFiZWwiLCJBcnRpY2xlQ2FyZCIsInVybCIsInRpdGxlIiwic3VidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx1REFBTSxDQUFDQyxHQUFWLG1CQUFWO0tBQU1GLEk7QUFtQ04sSUFBTUcsS0FBSyxHQUFHRix1REFBTSxDQUFDQyxHQUFWLHFCQU1pQixVQUFBRSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxRQUFWO0FBQUEsQ0FOdEIsQ0FBWDtNQUFNRixLO0FBWU4sSUFBTUcsS0FBSyxHQUFHTCx1REFBTSxDQUFDTSxLQUFWLG9CQUFYOztBQU1BLFNBQVNDLFdBQVQsQ0FBcUJKLEtBQXJCLEVBQTRCO0FBQ3hCLFNBRUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUEsS0FBSyxDQUFDSyxHQUFsQjtBQUF1QixNQUFFLGtCQUFXTCxLQUFLLENBQUNLLEdBQWpCLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsS0FBRDtBQUFPLFlBQVEsRUFBRUwsS0FBSyxDQUFDQyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFHQTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtELEtBQUssQ0FBQ00sS0FBWCxNQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTixLQUFLLENBQUNPLFFBQVgsQ0FGSixFQUdJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVQLEtBQUssQ0FBQ0ssR0FBbEI7QUFBdUIsTUFBRSxrQkFBV0wsS0FBSyxDQUFDSyxHQUFqQixDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FIQSxDQURBLENBRko7QUFnQkg7O01BakJRRCxXO0FBbUJNQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXJ0aWNsZUNhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogOTB2dztcbiAgICBiYWNrZ3JvdW5kOiB0b21hdG87XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBwb2ludGVyOiBjdXJzb3I7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgIH1cblxuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIG1hcmdpbjogMHJlbSAwcmVtIDByZW0gMHJlbTtcbiAgICAgICAgY29sb3I6IHllbGxvdyxcbiAgICAgICAgXG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cblxuICAgIC5ib3R0b20tY2FyZHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5gICAgXG5cbmNvbnN0IEltYWdlID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvcHMgPT4gcHJvcHMuYmlsZGVVUkx9KTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjV2aDtcbmBcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWwgYFxuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nLXRvcDogLjZyZW07XG4gICAgY29sb3I6IHllbGxvdztcbmBcblxuZnVuY3Rpb24gQXJ0aWNsZUNhcmQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgIFxuICAgICAgICA8TGluayBocmVmPXtwcm9wcy51cmx9IGFzPXtgL3Bvc3QvJHtwcm9wcy51cmx9YH0+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICA8SW1hZ2UgYmlsZGVVUkw9e3Byb3BzLmJpbGRlVVJMfT5cbiAgICAgICAgPC9JbWFnZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tY2FyZFwiPlxuICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX0gPC9oMT5cbiAgICAgICAgICAgIDxoMz57cHJvcHMuc3VidGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLnVybH0gYXM9e2AvcG9zdC8ke3Byb3BzLnVybH1gfT48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUNhcmQ7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ArticleCard.js\n");

/***/ })

})