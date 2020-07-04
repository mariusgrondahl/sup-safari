webpackHotUpdate("static/development/pages/surfetips.js",{

/***/ "./pages/surfetips.js":
/*!****************************!*\
  !*** ./pages/surfetips.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ContactForm */ \"./components/ContactForm.js\");\n/* harmony import */ var _components_CenterWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CenterWrapper */ \"./components/CenterWrapper.js\");\n/* harmony import */ var _components_Fullscreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Fullscreen */ \"./components/Fullscreen.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _components_ArticleCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ArticleCard */ \"./components/ArticleCard.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/pages/surfetips.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    *[_type == \\\"post\\\" && publishedAt < now()]|order(publishedAt desc)\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  margin: 0 auto;\\n  max-width: 1280px;\\n  padding: 3rem 1rem 1rem 1rem;\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  justify-content: center;\\n\\n  @media (min-width: 900px) {\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: flex-start;\\n    flex-wrap: wrap;\\n        }\\n\\n        \\n    h2{\\n        padding-bottom: 1rem;\\n        text-align: center;\\n    }\\n    p{\\n      text-align: center;\\n      font-size: 1.8rem;\\n      line-height: 1.6;\\n      max-width: 700px;\\n      margin: 3rem 2rem 2rem 2rem;\\n    }\\n    a:hover{\\n        color: turquoise;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_13___default()(_client__WEBPACK_IMPORTED_MODULE_11__[\"default\"]).image(source);\n}\n\nvar Blogfront = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n_c = Blogfront;\n\nfunction Blog(props) {\n  var _this = this;\n\n  var _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts;\n  console.log({\n    posts: posts\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_Fullscreen__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    image: \"/img/waves.jpg\",\n    text: \"#fff\",\n    height: \"30vh\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 1\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, \"Surfe-tips\")), __jsx(Blogfront, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, posts.map(function (_ref) {\n    var _id = _ref._id,\n        _ref$title = _ref.title,\n        title = _ref$title === void 0 ? '' : _ref$title,\n        _ref$slug = _ref.slug,\n        slug = _ref$slug === void 0 ? '' : _ref$slug,\n        _ref$image = _ref.image,\n        image = _ref$image === void 0 ? '' : _ref$image,\n        _ref$publishedAt = _ref.publishedAt,\n        publishedAt = _ref$publishedAt === void 0 ? '' : _ref$publishedAt,\n        _ref$_updatedAt = _ref._updatedAt,\n        _updatedAt = _ref$_updatedAt === void 0 ? '' : _ref$_updatedAt,\n        _ref$mainImage = _ref.mainImage,\n        mainImage = _ref$mainImage === void 0 ? '' : _ref$mainImage;\n\n    return slug && __jsx(\"div\", {\n      key: _id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }\n    }, __jsx(_components_ArticleCard__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      bildeURL: urlFor(mainImage.asset._ref).width(1000).url(),\n      title: title,\n      url: slug.current,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }\n    }));\n  })));\n}\n\n_c2 = Blog;\nBlog.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_11__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Blogfront\");\n$RefreshReg$(_c2, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdXJmZXRpcHMuanM/NTU4YiJdLCJuYW1lcyI6WyJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIkJsb2dmcm9udCIsInN0eWxlZCIsImRpdiIsIkJsb2ciLCJwcm9wcyIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIl9pZCIsInRpdGxlIiwic2x1ZyIsInB1Ymxpc2hlZEF0IiwiX3VwZGF0ZWRBdCIsIm1haW5JbWFnZSIsImFzc2V0IiwiX3JlZiIsIndpZHRoIiwidXJsIiwiY3VycmVudCIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwiZ3JvcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdkIsU0FBT0MseURBQWUsQ0FBQ0MsZ0RBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDRDs7QUFFRCxJQUFNSSxTQUFTLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsbUJBQWY7S0FBTUYsUzs7QUFtQ04sU0FBU0csSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUEscUJBQ0lBLEtBREosQ0FDWEMsS0FEVztBQUFBLE1BQ1hBLEtBRFcsNkJBQ0gsRUFERztBQUVuQkMsU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ0YsU0FBSyxFQUFMQTtBQUFELEdBQVo7QUFDQSxTQUNGLG1FQUNBLE1BQUMsOERBQUQ7QUFBWSxTQUFLLEVBQUMsZ0JBQWxCO0FBQW9DLFFBQUksRUFBQyxNQUF6QztBQUFnRCxVQUFNLEVBQUMsTUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosQ0FEQSxFQUlJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLEtBQUssQ0FBQ0csR0FBTixDQUNDO0FBQUEsUUFBR0MsR0FBSCxRQUFHQSxHQUFIO0FBQUEsMEJBQVFDLEtBQVI7QUFBQSxRQUFRQSxLQUFSLDJCQUFnQixFQUFoQjtBQUFBLHlCQUFvQkMsSUFBcEI7QUFBQSxRQUFvQkEsSUFBcEIsMEJBQTJCLEVBQTNCO0FBQUEsMEJBQStCWixLQUEvQjtBQUFBLFFBQStCQSxLQUEvQiwyQkFBdUMsRUFBdkM7QUFBQSxnQ0FBMENhLFdBQTFDO0FBQUEsUUFBMENBLFdBQTFDLGlDQUF3RCxFQUF4RDtBQUFBLCtCQUE0REMsVUFBNUQ7QUFBQSxRQUE0REEsVUFBNUQsZ0NBQXlFLEVBQXpFO0FBQUEsOEJBQTZFQyxTQUE3RTtBQUFBLFFBQTZFQSxTQUE3RSwrQkFBeUYsRUFBekY7O0FBQUEsV0FDRUgsSUFBSSxJQUNBO0FBQUssU0FBRyxFQUFFRixHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQSxNQUFDLGdFQUFEO0FBQ0EsY0FBUSxFQUFFZCxNQUFNLENBQUNtQixTQUFTLENBQUNDLEtBQVYsQ0FBZ0JDLElBQWpCLENBQU4sQ0FBNkJDLEtBQTdCLENBQW1DLElBQW5DLEVBQXlDQyxHQUF6QyxFQURWO0FBRUEsV0FBSyxFQUFFUixLQUZQO0FBR0EsU0FBRyxFQUFFQyxJQUFJLENBQUNRLE9BSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLENBRk47QUFBQSxHQURELENBREwsQ0FKSixDQURFO0FBdUJEOztNQTFCUWhCLEk7QUE2QlRBLElBQUksQ0FBQ2lCLGVBQUwsaU1BQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNSdEIsZ0RBQU0sQ0FBQ3VCLEtBQVAsQ0FBYUMsMkNBQWIscUJBRFE7O0FBQUE7QUFBQTtBQUFBO0FBQ3JCakIsaUJBRHFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUFRZUYsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zdXJmZXRpcHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0nXG5pbXBvcnQgQ2VudGVyV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL0NlbnRlcldyYXBwZXInXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxzY3JlZW4nXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50J1xuaW1wb3J0IEFydGljbGVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUNhcmQnXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBCbG9nZnJvbnQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIHBhZGRpbmc6IDNyZW0gMXJlbSAxcmVtIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgaDJ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIHB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgICAgbWFyZ2luOiAzcmVtIDJyZW0gMnJlbSAycmVtO1xuICAgIH1cbiAgICBhOmhvdmVye1xuICAgICAgICBjb2xvcjogdHVycXVvaXNlO1xuICAgIH1cbmA7XG5cblxuXG5mdW5jdGlvbiBCbG9nKHByb3BzKSB7XG4gIGNvbnN0IHsgcG9zdHMgPSBbXSB9ID0gcHJvcHNcbiAgY29uc29sZS5sb2coe3Bvc3RzfSlcbiAgcmV0dXJuKFxuPD5cbjxGdWxsc2NyZWVuIGltYWdlPVwiL2ltZy93YXZlcy5qcGdcIiAgdGV4dD1cIiNmZmZcIiBoZWlnaHQ9XCIzMHZoXCIgPlxuICAgIDxoMT5TdXJmZS10aXBzPC9oMT5cbiAgICA8L0Z1bGxzY3JlZW4+IFxuICAgIDxCbG9nZnJvbnQ+XG4gICAgICAgIHtwb3N0cy5tYXAoXG4gICAgICAgICAgKHsgX2lkLCB0aXRsZSA9ICcnLCBzbHVnID0gJycsIGltYWdlID0gJycscHVibGlzaGVkQXQgPSAnJywgX3VwZGF0ZWRBdCA9ICcnLCBtYWluSW1hZ2UgPSAnJyB9KSA9PlxuICAgICAgICAgICAgc2x1ZyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e19pZH0+XG4gICAgICAgICAgICAgICAgPEFydGljbGVDYXJkIFxuICAgICAgICAgICAgICAgIGJpbGRlVVJMPXt1cmxGb3IobWFpbkltYWdlLmFzc2V0Ll9yZWYpLndpZHRoKDEwMDApLnVybCgpfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICB1cmw9e3NsdWcuY3VycmVudH1cbiAgICAgICAgICAgICAgICAvPiAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC9CbG9nZnJvbnQ+XG48Lz5cbiAgKVxufVxuXG5cbkJsb2cuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgcG9zdHM6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgcHVibGlzaGVkQXQgPCBub3coKV18b3JkZXIocHVibGlzaGVkQXQgZGVzYylcbiAgYClcbn0pXG5cblxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/surfetips.js\n");

/***/ })

})