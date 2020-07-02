module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CenterWrapper.js":
/*!*************************************!*\
  !*** ./components/CenterWrapper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CenterWrapper; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/components/CenterWrapper.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Style = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  margin: 0 auto;\n  max-width: 1280px;\n  padding: 3rem 1rem 1rem 1rem;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n`;\nfunction CenterWrapper(props) {\n  return __jsx(Style, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 10\n    }\n  }, props.children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NlbnRlcldyYXBwZXIuanM/ZDMwOCJdLCJuYW1lcyI6WyJTdHlsZSIsInN0eWxlZCIsImRpdiIsIkNlbnRlcldyYXBwZXIiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLHNEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7O0NBQXpCO0FBVWUsU0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDM0MsU0FBTyxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQSxLQUFLLENBQUNDLFFBQWQsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DZW50ZXJXcmFwcGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IFN0eWxlID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBwYWRkaW5nOiAzcmVtIDFyZW0gMXJlbSAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbnRlcldyYXBwZXIocHJvcHMpIHtcbiAgcmV0dXJuIDxTdHlsZT57cHJvcHMuY2hpbGRyZW59PC9TdHlsZT47XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CenterWrapper.js\n");

/***/ }),

/***/ "./components/ContactForm.js":
/*!***********************************!*\
  !*** ./components/ContactForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/components/ContactForm.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ContactForm() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"form\", {\n    name: \"interesse\",\n    action: \"?=success\",\n    method: \"POST\",\n    \"data-netlify\": \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"interesse\",\n    value: \"interesse\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, \"Navn:\", __jsx(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    \"data-netlify\": \"true\",\n    placeholder: \"Raymond Etternavn\",\n    required: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }))), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, \"Epost:\", __jsx(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    \"data-netlify\": \"true\",\n    placeholder: \"dittnavn@eksempel.no\",\n    required: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }))), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, \"Merknader:\", __jsx(\"textarea\", {\n    type: \"textarea\",\n    name: \"text\",\n    \"data-netlify\": \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }))), __jsx(\"button\", {\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, \"Send foresp\\xF8rsel\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzP2FlMTEiXSwibmFtZXMiOlsiQ29udGFjdEZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBSWlCLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsU0FDRSxtRUFDRTtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQXVCLFVBQU0sRUFBQyxXQUE5QjtBQUEwQyxVQUFNLEVBQUMsTUFBakQ7QUFBd0Qsb0JBQWEsTUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBSSxFQUFDLFdBQTFCO0FBQXNDLFNBQUssRUFBQyxXQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNBO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLE1BQXhCO0FBQStCLG9CQUFhLE1BQTVDO0FBQW1ELGVBQVcsRUFBQyxtQkFBL0Q7QUFBbUYsWUFBUSxNQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FERixDQUZBLEVBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDQTtBQUFPLFFBQUksRUFBQyxPQUFaO0FBQW9CLFFBQUksRUFBQyxPQUF6QjtBQUFpQyxvQkFBYSxNQUE5QztBQUFxRCxlQUFXLEVBQUMsc0JBQWpFO0FBQXdGLFlBQVEsTUFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREYsQ0FQQSxFQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNFO0FBQVUsUUFBSSxFQUFDLFVBQWY7QUFBMEIsUUFBSSxFQUFDLE1BQS9CO0FBQXNDLG9CQUFhLE1BQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBWkEsRUFtQkE7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQW5CQSxDQURGLENBREY7QUE0QkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cblxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcbiAgICByZXR1cm4oXG4gICAgICA8PlxuICAgICAgICA8Zm9ybSBuYW1lPVwiaW50ZXJlc3NlXCIgYWN0aW9uPVwiPz1zdWNjZXNzXCIgbWV0aG9kPVwiUE9TVFwiIGRhdGEtbmV0bGlmeT1cInRydWVcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaW50ZXJlc3NlXCIgdmFsdWU9XCJpbnRlcmVzc2VcIiAvPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8bGFiZWw+TmF2bjogXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBkYXRhLW5ldGxpZnk9XCJ0cnVlXCIgcGxhY2Vob2xkZXI9XCJSYXltb25kIEV0dGVybmF2blwiIHJlcXVpcmVkLz5cbiAgICAgICAgICA8L2xhYmVsPiAgXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGxhYmVsPkVwb3N0OlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBkYXRhLW5ldGxpZnk9XCJ0cnVlXCIgcGxhY2Vob2xkZXI9XCJkaXR0bmF2bkBla3NlbXBlbC5ub1wiIHJlcXVpcmVkLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxsYWJlbD5NZXJrbmFkZXI6XG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cInRleHRcIiBkYXRhLW5ldGxpZnk9XCJ0cnVlXCI+XG4gICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2xhYmVsPiBcbiAgICAgICAgPC9wPlxuICAgICAgXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgZm9yZXNww7hyc2VsPC9idXR0b24+XG5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPC8+XG4gICAgKSAgXG4gICAgXG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContactForm.js\n");

/***/ }),

/***/ "./components/Fullscreen.js":
/*!**********************************!*\
  !*** ./components/Fullscreen.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/components/Fullscreen.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst FullscreenWrap = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  background: url(${props => props.image});\n  background-position: bottom center;\n  background-size: cover;\n  color: ${props => props.text};\n  padding-bottom: 0rem;\n  width: 100%;\n  box-sizing: border-box;\n  height: ${props => props.height};\n\n\n  .emphazize{\n      color: PALETURQUOISE;\n  }\n\n  .yellow{\n      color: yellow;\n  }\n\n  h1{\n        font-size: 5.5rem;\n        line-height: 6rem;\n        text-align: center;\n        margin: 0rem 2rem;\n        font-family: 'Barlow', BlinkMacSystemFont, Avenir Next, Avenir;\n        color: white;\n        text-shadow: 1px 1px 1px #000;\n\n        @media (min-width: 700px) {\n          font-size: 10rem;\n          line-height: 10rem;\n        }\n      }\n\n`;\n\nfunction Fullscreen(props) {\n  return __jsx(FullscreenWrap, {\n    image: props.image,\n    height: props.height,\n    text: props.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, props.children);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fullscreen);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Z1bGxzY3JlZW4uanM/ZGJkYyJdLCJuYW1lcyI6WyJGdWxsc2NyZWVuV3JhcCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaW1hZ2UiLCJ0ZXh0IiwiaGVpZ2h0IiwiRnVsbHNjcmVlbiIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0Msc0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7O29CQU1kQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTTs7O1dBRzlCRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsSUFBSzs7OztZQUluQkYsS0FBSyxJQUFJQSxLQUFLLENBQUNHLE1BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBYmxDOztBQTJDQSxTQUFTQyxVQUFULENBQW9CSixLQUFwQixFQUEyQjtBQUN6QixTQUNFLE1BQUMsY0FBRDtBQUFnQixTQUFLLEVBQUVBLEtBQUssQ0FBQ0MsS0FBN0I7QUFBb0MsVUFBTSxFQUFFRCxLQUFLLENBQUNHLE1BQWxEO0FBQTBELFFBQUksRUFBRUgsS0FBSyxDQUFDRSxJQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLEtBQUssQ0FBQ0ssUUFEVCxDQURGO0FBS0Q7O0FBRWNELHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GdWxsc2NyZWVuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IEZ1bGxzY3JlZW5XcmFwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCR7cHJvcHMgPT4gcHJvcHMuaW1hZ2V9KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGV4dH07XG4gIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH07XG5cblxuICAuZW1waGF6aXple1xuICAgICAgY29sb3I6IFBBTEVUVVJRVU9JU0U7XG4gIH1cblxuICAueWVsbG93e1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgfVxuXG4gIGgxe1xuICAgICAgICBmb250LXNpemU6IDUuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDZyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwcmVtIDJyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFybG93JywgQmxpbmtNYWNTeXN0ZW1Gb250LCBBdmVuaXIgTmV4dCwgQXZlbmlyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwO1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTByZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbmA7XG5cblxuXG5mdW5jdGlvbiBGdWxsc2NyZWVuKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEZ1bGxzY3JlZW5XcmFwIGltYWdlPXtwcm9wcy5pbWFnZX0gaGVpZ2h0PXtwcm9wcy5oZWlnaHR9IHRleHQ9e3Byb3BzLnRleHR9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvRnVsbHNjcmVlbldyYXA+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW47XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Fullscreen.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ContactForm */ \"./components/ContactForm.js\");\n/* harmony import */ var _components_CenterWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CenterWrapper */ \"./components/CenterWrapper.js\");\n/* harmony import */ var _components_Fullscreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Fullscreen */ \"./components/Fullscreen.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/web/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Description = _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default.a.div`\n    p{\n      text-align: center;\n      font-size: 1.8rem;\n      line-height: 1.6;\n      max-width: 700px;\n      margin: 3rem 2rem 2rem 2rem;\n    }\n`;\n\nfunction Home(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Fullscreen__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    image: \"/img/supsafari.jpg\",\n    text: \"#fff\",\n    height: \"60vh\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"yellow\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"SUP-utleie\"), \"  i Fredrikstad og Hvaler\")), __jsx(_components_CenterWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(Description, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"Opplev elver, innsj\\xF8er og skj\\xE6rg\\xE5rden st\\xE5ende! Vi tilbyr utleie av SUPbrett til \", __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 40\n    }\n  }, \"paddleturer i Fredrikstad og Hvaler-regionen.\"), \" Vi tar gjerne en prat. Legg igjen navn, epost og n\\xE5r du \\xF8nsker \\xE5 leie. Vi prek\\xE6s \\uD83D\\uDE0E \\uD83E\\uDD19 \\uD83C\\uDFC4\")), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkRlc2NyaXB0aW9uIiwic3R5bGVkIiwiZGl2IiwiSG9tZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyxzREFBTSxDQUFDQyxHQUFJOzs7Ozs7OztDQUEvQjs7QUFZQSxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDbkIsU0FDRixtRUFDSSxNQUFDLDhEQUFEO0FBQVksU0FBSyxFQUFDLG9CQUFsQjtBQUF3QyxRQUFJLEVBQUMsTUFBN0M7QUFBb0QsVUFBTSxFQUFDLE1BQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBTSxhQUFTLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSiw4QkFEQSxDQURKLEVBSU0sTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFHQUVpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUZqQyx5SUFEQSxDQURBLEVBT0EsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEEsQ0FKTixDQURFO0FBaUJEOztBQUtjRCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0nXG5pbXBvcnQgQ2VudGVyV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL0NlbnRlcldyYXBwZXInXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxzY3JlZW4nXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxuICAgIHB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgICAgbWFyZ2luOiAzcmVtIDJyZW0gMnJlbSAycmVtO1xuICAgIH1cbmA7XG5cblxuXG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIHJldHVybihcbjw+XG4gICAgPEZ1bGxzY3JlZW4gaW1hZ2U9XCIvaW1nL3N1cHNhZmFyaS5qcGdcIiAgdGV4dD1cIiNmZmZcIiBoZWlnaHQ9XCI2MHZoXCIgPlxuICAgIDxoMT48c3BhbiBjbGFzc05hbWU9XCJ5ZWxsb3dcIj5TVVAtdXRsZWllPC9zcGFuPiAgaSBGcmVkcmlrc3RhZCBvZyBIdmFsZXI8L2gxPlxuICAgIDwvRnVsbHNjcmVlbj4gICAgXG4gICAgICA8Q2VudGVyV3JhcHBlcj5cbiAgICAgIDxEZXNjcmlwdGlvbj5cbiAgICAgIDxwPlxuICAgICAgT3BwbGV2IGVsdmVyLCBpbm5zasO4ZXIgb2cgc2tqw6ZyZ8OlcmRlbiBzdMOlZW5kZSFcbiAgICAgIFZpIHRpbGJ5ciB1dGxlaWUgYXYgU1VQYnJldHQgdGlsIDxzdHJvbmc+cGFkZGxldHVyZXIgaSBGcmVkcmlrc3RhZCBvZyBIdmFsZXItcmVnaW9uZW4uPC9zdHJvbmc+IFZpIHRhciBnamVybmUgZW4gcHJhdC4gTGVnZyBpZ2plbiBuYXZuLCBlcG9zdCBvZyBuw6VyIGR1IMO4bnNrZXIgw6UgbGVpZS4gVmkgcHJla8OmcyAmIzEyODUyNjsgJiMxMjkzMDU7ICYjeDFGM0M0OyBcbiAgICAgIDwvcD5cbiAgICAgIDwvRGVzY3JpcHRpb24+XG4gICAgICA8Q29udGFjdEZvcm0gLz5cbiAgICBcbiAgICAgIDwvQ2VudGVyV3JhcHBlcj5cbjwvPlxuICApXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mariusgrondahl/Documents/GitHub/sup-safari/web/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIj9hYjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });