webpackHotUpdate("static/development/pages/post/[slug].js",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _components_CenterWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/CenterWrapper */ \"./components/CenterWrapper.js\");\n/* harmony import */ var _components_Fullscreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Fullscreen */ \"./components/Fullscreen.js\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/pages/post/[slug].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[_type == \\\"post\\\" && slug.current == $slug][0] && _type == {\\n  title,\\n  \\\"name\\\": author->name,\\n  \\\"categories\\\": categories[]->title,\\n  \\\"authorImage\\\": author->image,\\n  body\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_8__[\"default\"]).image(source);\n}\n\nvar Post = function Post(props) {\n  var _props$title = props.title,\n      title = _props$title === void 0 ? 'Missing title' : _props$title,\n      _props$name = props.name,\n      name = _props$name === void 0 ? 'Missing name' : _props$name,\n      categories = props.categories,\n      postImage = props.postImage,\n      authorImage = props.authorImage,\n      _props$body = props.body,\n      body = _props$body === void 0 ? [] : _props$body;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_components_Fullscreen__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    image: urlFor(postImage).width().url(),\n    text: \"#fff\",\n    height: \"60vh\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, title)), __jsx(_components_CenterWrapper__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, \"Av \", name), categories && __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"Posted in\", categories.map(function (category) {\n    return __jsx(\"li\", {\n      key: category,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 39\n      }\n    }, category);\n  })), authorImage && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: urlFor(authorImage).width(50).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  })), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    blocks: body,\n    imageOptions: {\n      w: 320,\n      h: 240,\n      fit: 'max'\n    }\n  }, _client__WEBPACK_IMPORTED_MODULE_8__[\"default\"].config(), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  })))));\n};\n\n_c = Post;\nvar query = groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // It's important to default the slug so that it doesn't return \"undefined\"\n            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? \"\" : _context$query$slug;\n            _context.next = 3;\n            return _client__WEBPACK_IMPORTED_MODULE_8__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz81MzU0Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiUG9zdCIsInByb3BzIiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsInBvc3RJbWFnZSIsImF1dGhvckltYWdlIiwiYm9keSIsIndpZHRoIiwidXJsIiwibWFwIiwiY2F0ZWdvcnkiLCJ3IiwiaCIsImZpdCIsImNvbmZpZyIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQU9DLHdEQUFlLENBQUNDLCtDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUEscUJBUWxCQSxLQVJrQixDQUVwQkMsS0FGb0I7QUFBQSxNQUVwQkEsS0FGb0IsNkJBRVosZUFGWTtBQUFBLG9CQVFsQkQsS0FSa0IsQ0FHcEJFLElBSG9CO0FBQUEsTUFHcEJBLElBSG9CLDRCQUdiLGNBSGE7QUFBQSxNQUlwQkMsVUFKb0IsR0FRbEJILEtBUmtCLENBSXBCRyxVQUpvQjtBQUFBLE1BS3BCQyxTQUxvQixHQVFsQkosS0FSa0IsQ0FLcEJJLFNBTG9CO0FBQUEsTUFNcEJDLFdBTm9CLEdBUWxCTCxLQVJrQixDQU1wQkssV0FOb0I7QUFBQSxvQkFRbEJMLEtBUmtCLENBT3BCTSxJQVBvQjtBQUFBLE1BT3BCQSxJQVBvQiw0QkFPYixFQVBhO0FBU3RCLFNBQ0UsbUVBRUEsTUFBQywrREFBRDtBQUFZLFNBQUssRUFBRVosTUFBTSxDQUFDVSxTQUFELENBQU4sQ0FBa0JHLEtBQWxCLEdBQTBCQyxHQUExQixFQUFuQjtBQUFvRCxRQUFJLEVBQUMsTUFBekQ7QUFBZ0UsVUFBTSxFQUFDLE1BQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtQLEtBQUwsQ0FEQSxDQUZBLEVBS0EsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBVUMsSUFBVixDQURGLEVBRUdDLFVBQVUsSUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUVHQSxVQUFVLENBQUNNLEdBQVgsQ0FBZSxVQUFBQyxRQUFRO0FBQUEsV0FBSTtBQUFJLFNBQUcsRUFBRUEsUUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9CQSxRQUFwQixDQUFKO0FBQUEsR0FBdkIsQ0FGSCxDQUhKLEVBUUdMLFdBQVcsSUFDVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUVYLE1BQU0sQ0FBQ1csV0FBRCxDQUFOLENBQ0ZFLEtBREUsQ0FDSSxFQURKLEVBRUZDLEdBRkUsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FUSixFQWlCRSxNQUFDLHFFQUFEO0FBQ0UsVUFBTSxFQUFFRixJQURWO0FBRUUsZ0JBQVksRUFBRTtBQUFFSyxPQUFDLEVBQUUsR0FBTDtBQUFVQyxPQUFDLEVBQUUsR0FBYjtBQUFrQkMsU0FBRyxFQUFFO0FBQXZCO0FBRmhCLEtBR01oQiwrQ0FBTSxDQUFDaUIsTUFBUCxFQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FqQkYsQ0FEQSxDQUxBLENBREY7QUFpQ0QsQ0ExQ0Q7O0tBQU1mLEk7QUE0Q04sSUFBTWdCLEtBQUssR0FBR0MsMkNBQUgsbUJBQVg7O0FBUUFqQixJQUFJLENBQUNrQixlQUFMO0FBQUEsOExBQXVCLGlCQUFnQkMsT0FBaEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQjtBQURxQixrQ0FFQ0EsT0FBTyxDQUFDSCxLQUZULENBRWJJLElBRmEsRUFFYkEsSUFGYSxvQ0FFTixFQUZNO0FBQUE7QUFBQSxtQkFHUnRCLCtDQUFNLENBQUN1QixLQUFQLENBQWFMLEtBQWIsRUFBb0I7QUFBRUksa0JBQUksRUFBSkE7QUFBRixhQUFwQixDQUhROztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVwQixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50J1xuaW1wb3J0IENlbnRlcldyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DZW50ZXJXcmFwcGVyJ1xuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GdWxsc2NyZWVuJ1xuXG5cblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGUgPSAnTWlzc2luZyB0aXRsZScsXG4gICAgbmFtZSA9ICdNaXNzaW5nIG5hbWUnLFxuICAgIGNhdGVnb3JpZXMsXG4gICAgcG9zdEltYWdlLFxuICAgIGF1dGhvckltYWdlLFxuICAgIGJvZHkgPSBbXVxuICB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgPEZ1bGxzY3JlZW4gaW1hZ2U9e3VybEZvcihwb3N0SW1hZ2UpLndpZHRoKCkudXJsKCl9IHRleHQ9XCIjZmZmXCIgaGVpZ2h0PVwiNjB2aFwiID5cbiAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgPC9GdWxsc2NyZWVuPiBcbiAgICA8Q2VudGVyV3JhcHBlcj5cbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxzcGFuPkF2IHtuYW1lfTwvc3Bhbj5cbiAgICAgIHtjYXRlZ29yaWVzICYmIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgIFBvc3RlZCBpblxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+KX1cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgICB7YXV0aG9ySW1hZ2UgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKVxuICAgICAgICAgICAgICAud2lkdGgoNTApXG4gICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgIGJsb2Nrcz17Ym9keX1cbiAgICAgICAgaW1hZ2VPcHRpb25zPXt7IHc6IDMyMCwgaDogMjQwLCBmaXQ6ICdtYXgnIH19XG4gICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAvPlxuICAgIDwvYXJ0aWNsZT5cbiAgICA8L0NlbnRlcldyYXBwZXI+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXSAmJiBfdHlwZSA9PSB7XG4gIHRpdGxlLFxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxuICBib2R5XG59YFxuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnlcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})