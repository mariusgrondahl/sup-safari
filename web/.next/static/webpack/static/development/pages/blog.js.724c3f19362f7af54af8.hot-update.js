webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ContactForm */ \"./components/ContactForm.js\");\n/* harmony import */ var _components_CenterWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CenterWrapper */ \"./components/CenterWrapper.js\");\n/* harmony import */ var _components_Fullscreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Fullscreen */ \"./components/Fullscreen.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../client */ \"./client.js\");\n\n\n\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/pages/blog.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    *[_type == \\\"post\\\" && publishedAt < now()]|order(publishedAt desc)\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    p{\\n      text-align: center;\\n      font-size: 1.8rem;\\n      line-height: 1.6;\\n      max-width: 700px;\\n      margin: 3rem 2rem 2rem 2rem;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar Description = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n\nfunction Blog(props) {\n  var _this = this;\n\n  var _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_Fullscreen__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    image: \"/img/supsafari-hvaler.jpg\",\n    text: \"#fff\",\n    height: \"60vh\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 1\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, \"Vannbloggen\")), __jsx(_components_CenterWrapper__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, posts.map(function (_ref) {\n    var _id = _ref._id,\n        _ref$title = _ref.title,\n        title = _ref$title === void 0 ? '' : _ref$title,\n        _ref$slug = _ref.slug,\n        slug = _ref$slug === void 0 ? '' : _ref$slug,\n        _ref$_updatedAt = _ref._updatedAt,\n        _updatedAt = _ref$_updatedAt === void 0 ? '' : _ref$_updatedAt;\n\n    return slug && __jsx(\"li\", {\n      key: _id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 15\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {\n      href: \"/post/[slug]\",\n      as: \"/post/\".concat(slug.current),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }\n    }, __jsx(\"h3\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 19\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 23\n      }\n    }, title))), ' ', \"(\", new Date(_updatedAt).toDateString(), \")\");\n  }))));\n}\n\n_c = Blog;\nBlog.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_11__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzPzYxYjgiXSwibmFtZXMiOlsiRGVzY3JpcHRpb24iLCJzdHlsZWQiLCJkaXYiLCJCbG9nIiwicHJvcHMiLCJwb3N0cyIsIm1hcCIsIl9pZCIsInRpdGxlIiwic2x1ZyIsIl91cGRhdGVkQXQiLCJjdXJyZW50IiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsImdldEluaXRpYWxQcm9wcyIsImNsaWVudCIsImZldGNoIiwiZ3JvcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFdBQVcsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBakI7O0FBWUEsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUEscUJBQ0lBLEtBREosQ0FDWEMsS0FEVztBQUFBLE1BQ1hBLEtBRFcsNkJBQ0gsRUFERztBQUVuQixTQUNGLG1FQUNBLE1BQUMsOERBQUQ7QUFBWSxTQUFLLEVBQUMsMkJBQWxCO0FBQStDLFFBQUksRUFBQyxNQUFwRDtBQUEyRCxVQUFNLEVBQUMsTUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosQ0FEQSxFQUlNLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDQyxHQUFOLENBQ0M7QUFBQSxRQUFHQyxHQUFILFFBQUdBLEdBQUg7QUFBQSwwQkFBUUMsS0FBUjtBQUFBLFFBQVFBLEtBQVIsMkJBQWdCLEVBQWhCO0FBQUEseUJBQW9CQyxJQUFwQjtBQUFBLFFBQW9CQSxJQUFwQiwwQkFBMkIsRUFBM0I7QUFBQSwrQkFBK0JDLFVBQS9CO0FBQUEsUUFBK0JBLFVBQS9CLGdDQUE0QyxFQUE1Qzs7QUFBQSxXQUNFRCxJQUFJLElBQ0Y7QUFBSSxTQUFHLEVBQUVGLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaURBQUQ7QUFBTSxVQUFJLEVBQUMsY0FBWDtBQUEwQixRQUFFLGtCQUFXRSxJQUFJLENBQUNFLE9BQWhCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJSCxLQUFKLENBQUosQ0FERixDQURGLEVBR1UsR0FIVixPQUlJLElBQUlJLElBQUosQ0FBU0YsVUFBVCxFQUFxQkcsWUFBckIsRUFKSixNQUZKO0FBQUEsR0FERCxDQURILENBREEsQ0FKTixDQURFO0FBdUJEOztLQXpCUVYsSTtBQTRCVEEsSUFBSSxDQUFDVyxlQUFMLGlNQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUkMsZ0RBQU0sQ0FBQ0MsS0FBUCxDQUFhQywyQ0FBYixxQkFEUTs7QUFBQTtBQUFBO0FBQUE7QUFDckJaLGlCQURxQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCO0FBUWVGLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncm9xIGZyb20gJ2dyb3EnXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSdcbmltcG9ydCBDZW50ZXJXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2VudGVyV3JhcHBlcidcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbHNjcmVlbidcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnXG5cblxuXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXG4gICAgcHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICBtYXJnaW46IDNyZW0gMnJlbSAycmVtIDJyZW07XG4gICAgfVxuYDtcblxuXG5cbmZ1bmN0aW9uIEJsb2cocHJvcHMpIHtcbiAgY29uc3QgeyBwb3N0cyA9IFtdIH0gPSBwcm9wc1xuICByZXR1cm4oXG48PlxuPEZ1bGxzY3JlZW4gaW1hZ2U9XCIvaW1nL3N1cHNhZmFyaS1odmFsZXIuanBnXCIgIHRleHQ9XCIjZmZmXCIgaGVpZ2h0PVwiNjB2aFwiID5cbiAgICA8aDE+VmFubmJsb2dnZW48L2gxPlxuICAgIDwvRnVsbHNjcmVlbj4gXG4gICAgICA8Q2VudGVyV3JhcHBlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtwb3N0cy5tYXAoXG4gICAgICAgICAgKHsgX2lkLCB0aXRsZSA9ICcnLCBzbHVnID0gJycsIF91cGRhdGVkQXQgPSAnJyB9KSA9PlxuICAgICAgICAgICAgc2x1ZyAmJiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e19pZH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgICAgICA8aDM+PGE+e3RpdGxlfTwvYT48L2gzPlxuICAgICAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgICAgICh7bmV3IERhdGUoX3VwZGF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9KVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgXG4gICAgICA8L0NlbnRlcldyYXBwZXI+XG48Lz5cbiAgKVxufVxuXG5cbkJsb2cuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgcG9zdHM6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgcHVibGlzaGVkQXQgPCBub3coKV18b3JkZXIocHVibGlzaGVkQXQgZGVzYylcbiAgYClcbn0pXG5cblxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})