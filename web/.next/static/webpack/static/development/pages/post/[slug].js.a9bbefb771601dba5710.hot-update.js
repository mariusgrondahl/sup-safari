webpackHotUpdate("static/development/pages/post/[slug].js",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _components_CenterWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/CenterWrapper */ \"./components/CenterWrapper.js\");\n/* harmony import */ var _components_Fullscreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Fullscreen */ \"./components/Fullscreen.js\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/pages/post/[slug].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[_type == \\\"post\\\" && slug.current == $slug][0]{\\n  title,\\n  \\\"name\\\": author->name,\\n  \\\"categories\\\": categories[]->title,\\n  \\\"authorImage\\\": author->image,\\n  \\\"imageUrl\\\": image.asset->url\\n  body\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_8__[\"default\"]).image(source);\n}\n\nvar Post = function Post(props) {\n  var _props$title = props.title,\n      title = _props$title === void 0 ? 'Missing title' : _props$title,\n      _props$name = props.name,\n      name = _props$name === void 0 ? 'Missing name' : _props$name,\n      categories = props.categories,\n      authorImage = props.authorImage,\n      _props$body = props.body,\n      body = _props$body === void 0 ? [] : _props$body;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(\"img\", {\n    src: urlFor(person.image).width(200).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 1\n    }\n  }), __jsx(_components_Fullscreen__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    image: urlFor().width().url(),\n    text: \"#fff\",\n    height: \"60vh\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, title)), __jsx(_components_CenterWrapper__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"Av \", name), categories && __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Posted in\", categories.map(function (category) {\n    return __jsx(\"li\", {\n      key: category,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 39\n      }\n    }, category);\n  })), authorImage && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: urlFor(authorImage).width(50).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  })), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    blocks: body,\n    imageOptions: {\n      w: 320,\n      h: 240,\n      fit: 'max'\n    }\n  }, _client__WEBPACK_IMPORTED_MODULE_8__[\"default\"].config(), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  })))));\n};\n\n_c = Post;\nvar query = groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // It's important to default the slug so that it doesn't return \"undefined\"\n            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? \"\" : _context$query$slug;\n            _context.next = 3;\n            return _client__WEBPACK_IMPORTED_MODULE_8__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz81MzU0Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiUG9zdCIsInByb3BzIiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsImF1dGhvckltYWdlIiwiYm9keSIsInBlcnNvbiIsIndpZHRoIiwidXJsIiwibWFwIiwiY2F0ZWdvcnkiLCJ3IiwiaCIsImZpdCIsImNvbmZpZyIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQU9DLHdEQUFlLENBQUNDLCtDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUEscUJBT2xCQSxLQVBrQixDQUVwQkMsS0FGb0I7QUFBQSxNQUVwQkEsS0FGb0IsNkJBRVosZUFGWTtBQUFBLG9CQU9sQkQsS0FQa0IsQ0FHcEJFLElBSG9CO0FBQUEsTUFHcEJBLElBSG9CLDRCQUdiLGNBSGE7QUFBQSxNQUlwQkMsVUFKb0IsR0FPbEJILEtBUGtCLENBSXBCRyxVQUpvQjtBQUFBLE1BS3BCQyxXQUxvQixHQU9sQkosS0FQa0IsQ0FLcEJJLFdBTG9CO0FBQUEsb0JBT2xCSixLQVBrQixDQU1wQkssSUFOb0I7QUFBQSxNQU1wQkEsSUFOb0IsNEJBTWIsRUFOYTtBQVF0QixTQUNFLG1FQUNKO0FBQUssT0FBRyxFQUFFWCxNQUFNLENBQUNZLE1BQU0sQ0FBQ1IsS0FBUixDQUFOLENBQXFCUyxLQUFyQixDQUEyQixHQUEzQixFQUFnQ0MsR0FBaEMsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREksRUFFQSxNQUFDLCtEQUFEO0FBQVksU0FBSyxFQUFFZCxNQUFNLEdBQUdhLEtBQVQsR0FBaUJDLEdBQWpCLEVBQW5CO0FBQTJDLFFBQUksRUFBQyxNQUFoRDtBQUF1RCxVQUFNLEVBQUMsTUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1AsS0FBTCxDQURBLENBRkEsRUFLQSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFVQyxJQUFWLENBREYsRUFFR0MsVUFBVSxJQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRUdBLFVBQVUsQ0FBQ00sR0FBWCxDQUFlLFVBQUFDLFFBQVE7QUFBQSxXQUFJO0FBQUksU0FBRyxFQUFFQSxRQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0JBLFFBQXBCLENBQUo7QUFBQSxHQUF2QixDQUZILENBSEosRUFRR04sV0FBVyxJQUNWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRVYsTUFBTSxDQUFDVSxXQUFELENBQU4sQ0FDRkcsS0FERSxDQUNJLEVBREosRUFFRkMsR0FGRSxFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVRKLEVBaUJFLE1BQUMscUVBQUQ7QUFDRSxVQUFNLEVBQUVILElBRFY7QUFFRSxnQkFBWSxFQUFFO0FBQUVNLE9BQUMsRUFBRSxHQUFMO0FBQVVDLE9BQUMsRUFBRSxHQUFiO0FBQWtCQyxTQUFHLEVBQUU7QUFBdkI7QUFGaEIsS0FHTWhCLCtDQUFNLENBQUNpQixNQUFQLEVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpCRixDQURBLENBTEEsQ0FERjtBQWlDRCxDQXpDRDs7S0FBTWYsSTtBQTJDTixJQUFNZ0IsS0FBSyxHQUFHQywyQ0FBSCxtQkFBWDs7QUFTQWpCLElBQUksQ0FBQ2tCLGVBQUw7QUFBQSw4TEFBdUIsaUJBQWdCQyxPQUFoQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCO0FBRHFCLGtDQUVDQSxPQUFPLENBQUNILEtBRlQsQ0FFYkksSUFGYSxFQUViQSxJQUZhLG9DQUVOLEVBRk07QUFBQTtBQUFBLG1CQUdSdEIsK0NBQU0sQ0FBQ3VCLEtBQVAsQ0FBYUwsS0FBYixFQUFvQjtBQUFFSSxrQkFBSSxFQUFKQTtBQUFGLGFBQXBCLENBSFE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZXBCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdC9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnXG5pbXBvcnQgQ2VudGVyV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NlbnRlcldyYXBwZXInXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Z1bGxzY3JlZW4nXG5cblxuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBQb3N0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSA9ICdNaXNzaW5nIHRpdGxlJyxcbiAgICBuYW1lID0gJ01pc3NpbmcgbmFtZScsXG4gICAgY2F0ZWdvcmllcyxcbiAgICBhdXRob3JJbWFnZSxcbiAgICBib2R5ID0gW11cbiAgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPD5cbjxpbWcgc3JjPXt1cmxGb3IocGVyc29uLmltYWdlKS53aWR0aCgyMDApLnVybCgpfSAvPlxuICAgIDxGdWxsc2NyZWVuIGltYWdlPXt1cmxGb3IoKS53aWR0aCgpLnVybCgpfSB0ZXh0PVwiI2ZmZlwiIGhlaWdodD1cIjYwdmhcIiA+XG4gICAgPGgxPnt0aXRsZX08L2gxPlxuICAgIDwvRnVsbHNjcmVlbj4gXG4gICAgPENlbnRlcldyYXBwZXI+XG4gICAgPGFydGljbGU+XG4gICAgICA8c3Bhbj5BdiB7bmFtZX08L3NwYW4+XG4gICAgICB7Y2F0ZWdvcmllcyAmJiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICBQb3N0ZWQgaW5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gPGxpIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L2xpPil9XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuICAgICAge2F1dGhvckltYWdlICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3VybEZvcihhdXRob3JJbWFnZSlcbiAgICAgICAgICAgICAgLndpZHRoKDUwKVxuICAgICAgICAgICAgICAudXJsKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPEJsb2NrQ29udGVudFxuICAgICAgICBibG9ja3M9e2JvZHl9XG4gICAgICAgIGltYWdlT3B0aW9ucz17eyB3OiAzMjAsIGg6IDI0MCwgZml0OiAnbWF4JyB9fVxuICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxuICAgICAgLz5cbiAgICA8L2FydGljbGU+XG4gICAgPC9DZW50ZXJXcmFwcGVyPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gIHRpdGxlLFxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxuICBcImltYWdlVXJsXCI6IGltYWdlLmFzc2V0LT51cmxcbiAgYm9keVxufWBcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5XG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})