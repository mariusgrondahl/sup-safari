webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Fullscreen.js":
/*!**********************************!*\
  !*** ./components/Fullscreen.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/components/Fullscreen.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-end;\\n  text-align: center;\\n  align-items: center;\\n  background: url(\", \");\\n  background-position: bottom center;\\n  background-size: cover;\\n  color: \", \";\\n  padding-bottom: 4rem;\\n  width: 100%;\\n  box-sizing: border-box;\\n  height: 85vh;\\n\\n  h1{\\n        font-size: 4rem;\\n        line-height: 3rem;\\n        text-align: center;\\n        margin: 0rem 2rem;\\n        font-family: 'Barlow', BlinkMacSystemFont, Avenir Next, Avenir;\\n        color: white;\\n        text-shadow: 1px 1px 1px #000;\\n      }\\n\\n  a {\\n    color: #fff;\\n    text-decoration: none;\\n    &:active {\\n      color: yellow;\\n    }\\n  }\\n\\n  ul {\\n    padding: 0rem 2rem;\\n    font-size: 2rem;\\n    line-height: 2.4rem;\\n    li {\\n    }\\n  }\\n\\n  @media only screen and (min-width: 700px) {\\n    background-position: center center;\\n    height: 70vh;\\n\\n    ul {\\n      display: flex;\\n      li {\\n        margin: 2rem;\\n      }\\n    }\\n\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar FullscreenWrap = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject(), function (props) {\n  return props.image;\n}, function (props) {\n  return props.text;\n}); // setting deafult image\n\n_c = FullscreenWrap;\nFullscreen.defaultProps = {\n  image: \"/img/supsafari-hvaler.jpg\"\n};\n\nfunction Fullscreen(props) {\n  return __jsx(FullscreenWrap, {\n    image: props.image,\n    height: props.height,\n    text: props.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }\n  }, props.children);\n}\n\n_c2 = Fullscreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fullscreen);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"FullscreenWrap\");\n$RefreshReg$(_c2, \"Fullscreen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Z1bGxzY3JlZW4uanM/ZGJkYyJdLCJuYW1lcyI6WyJGdWxsc2NyZWVuV3JhcCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaW1hZ2UiLCJ0ZXh0IiwiRnVsbHNjcmVlbiIsImRlZmF1bHRQcm9wcyIsImhlaWdodCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixvQkFNQSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFWO0FBQUEsQ0FOTCxFQVNULFVBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLElBQVY7QUFBQSxDQVRJLENBQXBCLEMsQ0F1REE7O0tBdkRNTCxjO0FBd0ROTSxVQUFVLENBQUNDLFlBQVgsR0FBMEI7QUFDeEJILE9BQUssRUFBRTtBQURpQixDQUExQjs7QUFJQSxTQUFTRSxVQUFULENBQW9CSCxLQUFwQixFQUEyQjtBQUN6QixTQUNFLE1BQUMsY0FBRDtBQUFnQixTQUFLLEVBQUVBLEtBQUssQ0FBQ0MsS0FBN0I7QUFBb0MsVUFBTSxFQUFFRCxLQUFLLENBQUNLLE1BQWxEO0FBQTBELFFBQUksRUFBRUwsS0FBSyxDQUFDRSxJQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLEtBQUssQ0FBQ00sUUFEVCxDQURGO0FBS0Q7O01BTlFILFU7QUFRTUEseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Z1bGxzY3JlZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgRnVsbHNjcmVlbldyYXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCgke3Byb3BzID0+IHByb3BzLmltYWdlfSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRleHR9O1xuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogODV2aDtcblxuICBoMXtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDByZW0gMnJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBCbGlua01hY1N5c3RlbUZvbnQsIEF2ZW5pciBOZXh0LCBBdmVuaXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDA7XG4gICAgICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICY6YWN0aXZlIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuICB9XG5cbiAgdWwge1xuICAgIHBhZGRpbmc6IDByZW0gMnJlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbiAgICBsaSB7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgaGVpZ2h0OiA3MHZoO1xuXG4gICAgdWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5gO1xuXG4vLyBzZXR0aW5nIGRlYWZ1bHQgaW1hZ2VcbkZ1bGxzY3JlZW4uZGVmYXVsdFByb3BzID0ge1xuICBpbWFnZTogXCIvaW1nL3N1cHNhZmFyaS1odmFsZXIuanBnXCJcbn07XG5cbmZ1bmN0aW9uIEZ1bGxzY3JlZW4ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8RnVsbHNjcmVlbldyYXAgaW1hZ2U9e3Byb3BzLmltYWdlfSBoZWlnaHQ9e3Byb3BzLmhlaWdodH0gdGV4dD17cHJvcHMudGV4dH0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9GdWxsc2NyZWVuV3JhcD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbHNjcmVlbjtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Fullscreen.js\n");

/***/ })

})