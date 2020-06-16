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

/***/ "./components/ContactForm.js":
/*!***********************************!*\
  !*** ./components/ContactForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactForm; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/components/ContactForm.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ContactForm() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"form\", {\n    name: \"interesse\",\n    action: \"?=sucess\",\n    method: \"POST\",\n    \"data-netlify\": \"true\",\n    className: \"jsx-1793922691\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"interesse\",\n    value: \"interesse\",\n    className: \"jsx-1793922691\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }), __jsx(\"p\", {\n    className: \"jsx-1793922691\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    className: \"jsx-1793922691\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 11\n    }\n  }, \"Navn: \", __jsx(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    \"data-netlify\": \"true\",\n    className: \"jsx-1793922691\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 24\n    }\n  }))), __jsx(\"p\", {\n    className: \"jsx-1793922691\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    className: \"jsx-1793922691\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, \"Epost: \", __jsx(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    \"data-netlify\": \"true\",\n    className: \"jsx-1793922691\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 25\n    }\n  }))), __jsx(\"button\", {\n    type: \"submit\",\n    className: \"jsx-1793922691\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, \"Meld interessse\")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1793922691\",\n    __self: this\n  }, \"button.jsx-1793922691{background:#2d2d2d;outline:none;border-radius:3px;width:100%;padding:.5rem;margin:0 auto;color:#fff;border:none;text-transform:uppercase;font-style:italic;}input.jsx-1793922691{border-radius:3px;width:100%;padding:.5rem;color:#2d2d2d;margin:.2rem 0rem;outline:none;border:none;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpdXNncm9uZGFobC9Eb2N1bWVudHMvR2l0SHViL3N1cC1zYWZhcmkvY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmtCLEFBR2dDLEFBY0Qsa0JBQ1AsQ0FkRSxVQWVDLEdBZEksV0FlSixPQWRILE9BZU8sSUFkSixjQUNBLEFBY0QsYUFDRCxDQWRELFdBQ0MsQUFjZCxZQWIyQix5QkFDUCxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL21hcml1c2dyb25kYWhsL0RvY3VtZW50cy9HaXRIdWIvc3VwLXNhZmFyaS9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuICAgIHJldHVybihcbiAgICAgIDw+XG4gICAgICAgIDxmb3JtIG5hbWU9XCJpbnRlcmVzc2VcIiAgYWN0aW9uPVwiPz1zdWNlc3NcIiBtZXRob2Q9XCJQT1NUXCIgZGF0YS1uZXRsaWZ5PVwidHJ1ZVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpbnRlcmVzc2VcIiB2YWx1ZT1cImludGVyZXNzZVwiIC8+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxsYWJlbD5OYXZuOiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGRhdGEtbmV0bGlmeT1cInRydWVcIi8+PC9sYWJlbD4gICBcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8bGFiZWw+RXBvc3Q6IDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBkYXRhLW5ldGxpZnk9XCJ0cnVlXCIvPjwvbGFiZWw+XG4gICAgICAgIDwvcD5cbiAgICAgIFxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPk1lbGQgaW50ZXJlc3NzZTwvYnV0dG9uPlxuXG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2AgICAgXG4gICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzJkMmQyZDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgfVxuXG4gICAgXG4gICAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgICAgY29sb3I6ICMyZDJkMmQ7XG4gICAgICAgICAgICBtYXJnaW46IC4ycmVtIDByZW07XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKSAgXG4gICAgXG4gIH1cbiJdfQ== */\\n/*@ sourceURL=/Users/mariusgrondahl/Documents/GitHub/sup-safari/components/ContactForm.js */\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzP2FlMTEiXSwibmFtZXMiOlsiQ29udGFjdEZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWlCLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsU0FDRSxtRUFDRTtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQXdCLFVBQU0sRUFBQyxVQUEvQjtBQUEwQyxVQUFNLEVBQUMsTUFBakQ7QUFBd0Qsb0JBQWEsTUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFJLEVBQUMsV0FBMUI7QUFBc0MsU0FBSyxFQUFDLFdBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWE7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsTUFBeEI7QUFBK0Isb0JBQWEsTUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWIsQ0FERixDQUZBLEVBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFjO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsUUFBSSxFQUFDLE9BQXpCO0FBQWlDLG9CQUFhLE1BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFkLENBREYsQ0FMQSxFQVNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVRGLENBREY7QUFBQTtBQUFBO0FBQUEsb2lGQURGO0FBMkNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcbiAgICByZXR1cm4oXG4gICAgICA8PlxuICAgICAgICA8Zm9ybSBuYW1lPVwiaW50ZXJlc3NlXCIgIGFjdGlvbj1cIj89c3VjZXNzXCIgbWV0aG9kPVwiUE9TVFwiIGRhdGEtbmV0bGlmeT1cInRydWVcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaW50ZXJlc3NlXCIgdmFsdWU9XCJpbnRlcmVzc2VcIiAvPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8bGFiZWw+TmF2bjogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBkYXRhLW5ldGxpZnk9XCJ0cnVlXCIvPjwvbGFiZWw+ICAgXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGxhYmVsPkVwb3N0OiA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgZGF0YS1uZXRsaWZ5PVwidHJ1ZVwiLz48L2xhYmVsPlxuICAgICAgICA8L3A+XG4gICAgICBcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5NZWxkIGludGVyZXNzc2U8L2J1dHRvbj5cblxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8c3R5bGUganN4PntgICAgIFxuICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyZDJkMmQ7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIH1cblxuICAgIFxuICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjMmQyZDJkO1xuICAgICAgICAgICAgbWFyZ2luOiAuMnJlbSAwcmVtO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICkgIFxuICAgIFxuICB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContactForm.js\n");

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/components/Footer.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst FooterWrap = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\nborder-top: 5px dashed white;\n  background: turquoise;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-align: center;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 6rem 4rem;\n  margin: 3rem 0 0 0; \n  color: #2d2d2d;\n  `;\nfunction Footer(props) {\n  return __jsx(FooterWrap, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    className: \"logo\",\n    width: \"250px\",\n    src: \"/logo-red.svg\",\n    alt: \"sup safari logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, \"Telefon: \", __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 25\n    }\n  }, \"+47 41293362\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9mMjU2Il0sIm5hbWVzIjpbIkZvb3RlcldyYXAiLCJzdHlsZWQiLCJkaXYiLCJGb290ZXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyxzREFBTSxDQUFDQyxHQUFJOzs7Ozs7Ozs7Ozs7O0dBQTlCO0FBZWUsU0FBU0MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBc0I7QUFDakMsU0FDSSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBc0IsU0FBSyxFQUFDLE9BQTVCO0FBQW9DLE9BQUcsRUFBQyxlQUF4QztBQUF5RCxPQUFHLEVBQUMsaUJBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBWixDQUZKLENBREo7QUFPSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IEZvb3RlcldyYXAgPSBzdHlsZWQuZGl2YFxuYm9yZGVyLXRvcDogNXB4IGRhc2hlZCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdHVycXVvaXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZyZW0gNHJlbTtcbiAgbWFyZ2luOiAzcmVtIDAgMCAwOyBcbiAgY29sb3I6ICMyZDJkMmQ7XG4gIGBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHByb3BzKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxGb290ZXJXcmFwPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgd2lkdGg9XCIyNTBweFwiIHNyYz1cIi9sb2dvLXJlZC5zdmdcIiAgYWx0PVwic3VwIHNhZmFyaSBsb2dvXCIgLz5cbiAgICAgICAgICAgIDxwPlRlbGVmb246IDxzdHJvbmc+KzQ3IDQxMjkzMzYyPC9zdHJvbmc+PC9wPlxuICAgICAgICA8L0Zvb3RlcldyYXA+XG5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ }),

/***/ "./components/Fullscreen.js":
/*!**********************************!*\
  !*** ./components/Fullscreen.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/components/Fullscreen.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst FullscreenWrap = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  text-align: center;\n  align-items: center;\n  background: url(${props => props.image});\n  background-size: cover;\n  background-position: bottom center;\n  color: ${props => props.text};\n  width: 100%;\n  box-sizing: border-box;\n  height: ${props => props.height};\n  padding: 6rem 4rem;\n\n\n\n  button{\n    max-width: 200px;\n  }\n\n  h1 {\n    text-shadow: 0px 0px 10px rgba(45, 45, 45, 0.3);\n    margin: 0;\n    padding: 0;\n  }\n\n  h2 {\n    font-size: 3.9rem;\n    margin: 0rem;\n    padding: 0rem;\n  }\n  h1 {\n    font-size: 4rem;\n  }\n\n  p {\n    max-width: 980px;\n    /* text-shadow: 0px 0px 10px rgba(45,45,45,0.79); */\n  }\n\n  a {\n    color: #fff;\n    text-decoration: none;\n    &:active {\n      color: yellow;\n    }\n  }\n\n  ul {\n    padding: 0rem 2rem;\n    font-size: 2rem;\n    line-height: 2.4rem;\n    li {\n    }\n  }\n\n  @media only screen and (min-width: 700px) {\n    background-position: center center;\n\n    ul {\n      display: flex;\n      li {\n        margin: 2rem;\n      }\n    }\n\n    h1 {\n      font-size: 5rem;\n    }\n  }\n`; // setting deafult image\n\nFullscreen.defaultProps = {\n  image: \"/img/supsafari-hvaler.jpg\"\n};\n\nfunction Fullscreen(props) {\n  return __jsx(FullscreenWrap, {\n    image: props.image,\n    height: props.height,\n    text: props.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 5\n    }\n  }, props.children);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fullscreen);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Z1bGxzY3JlZW4uanM/ZGJkYyJdLCJuYW1lcyI6WyJGdWxsc2NyZWVuV3JhcCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaW1hZ2UiLCJ0ZXh0IiwiaGVpZ2h0IiwiRnVsbHNjcmVlbiIsImRlZmF1bHRQcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0Msc0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7O29CQU1kQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTTs7O1dBRzlCRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsSUFBSzs7O1lBR25CRixLQUFLLElBQUlBLEtBQUssQ0FBQ0csTUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FabEMsQyxDQXlFQTs7QUFDQUMsVUFBVSxDQUFDQyxZQUFYLEdBQTBCO0FBQ3hCSixPQUFLLEVBQUU7QUFEaUIsQ0FBMUI7O0FBSUEsU0FBU0csVUFBVCxDQUFvQkosS0FBcEIsRUFBMkI7QUFDekIsU0FDRSxNQUFDLGNBQUQ7QUFBZ0IsU0FBSyxFQUFFQSxLQUFLLENBQUNDLEtBQTdCO0FBQW9DLFVBQU0sRUFBRUQsS0FBSyxDQUFDRyxNQUFsRDtBQUEwRCxRQUFJLEVBQUVILEtBQUssQ0FBQ0UsSUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixLQUFLLENBQUNNLFFBRFQsQ0FERjtBQUtEOztBQUVjRix5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRnVsbHNjcmVlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBGdWxsc2NyZWVuV3JhcCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCR7cHJvcHMgPT4gcHJvcHMuaW1hZ2V9KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGV4dH07XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fTtcbiAgcGFkZGluZzogNnJlbSA0cmVtO1xuXG5cblxuICBidXR0b257XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgfVxuXG4gIGgxIHtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoNDUsIDQ1LCA0NSwgMC4zKTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDMuOXJlbTtcbiAgICBtYXJnaW46IDByZW07XG4gICAgcGFkZGluZzogMHJlbTtcbiAgfVxuICBoMSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG5cbiAgcCB7XG4gICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgICAvKiB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoNDUsNDUsNDUsMC43OSk7ICovXG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgJjphY3RpdmUge1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICB9XG4gIH1cblxuICB1bCB7XG4gICAgcGFkZGluZzogMHJlbSAycmVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xuICAgIGxpIHtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcblxuICAgIHVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMnJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDVyZW07XG4gICAgfVxuICB9XG5gO1xuXG4vLyBzZXR0aW5nIGRlYWZ1bHQgaW1hZ2VcbkZ1bGxzY3JlZW4uZGVmYXVsdFByb3BzID0ge1xuICBpbWFnZTogXCIvaW1nL3N1cHNhZmFyaS1odmFsZXIuanBnXCJcbn07XG5cbmZ1bmN0aW9uIEZ1bGxzY3JlZW4ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8RnVsbHNjcmVlbldyYXAgaW1hZ2U9e3Byb3BzLmltYWdlfSBoZWlnaHQ9e3Byb3BzLmhlaWdodH0gdGV4dD17cHJvcHMudGV4dH0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9GdWxsc2NyZWVuV3JhcD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbHNjcmVlbjtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Fullscreen.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContactForm */ \"./components/ContactForm.js\");\n/* harmony import */ var _components_Fullscreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Fullscreen */ \"./components/Fullscreen.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nconst Home = () => __jsx(\"div\", {\n  className: \"jsx-1429634686\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }\n}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }\n}, __jsx(\"title\", {\n  className: \"jsx-1429634686\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 7\n  }\n}, \"Sup Safari - Supturer Fredrikstad/Hvaler\"), __jsx(\"meta\", {\n  name: \"description\",\n  content: \"SUP Safari tilbyr SUP-utleie og SUP-turer i Fredrikstad skj\\xE6rg\\xE5rden og p\\xE5 Hvaler.\",\n  className: \"jsx-1429634686\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 7\n  }\n}), __jsx(\"meta\", {\n  name: \"keywords\",\n  content: \"Paddleboard Fredrikstad, SUP \\xD8stfold, SUP Hvaler, SUP Rentals, surf, Supbrett Fredrikstad, suputleie, supturer, utleie.\",\n  className: \"jsx-1429634686\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 7\n  }\n}), __jsx(\"link\", {\n  rel: \"icon\",\n  href: \"/favicon.ico\",\n  className: \"jsx-1429634686\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 7\n  }\n})), __jsx(_components_Fullscreen__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  image: \"/img/supsafari-hvaler.jpg\",\n  height: \"45vh\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }\n}, __jsx(\"img\", {\n  src: \"/logo.svg\",\n  alt: \"sup safari logo\",\n  className: \"jsx-1429634686\" + \" \" + \"logo\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 7\n  }\n})), __jsx(\"div\", {\n  className: \"jsx-1429634686\" + \" \" + 'hero',\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }\n}, __jsx(\"p\", {\n  className: \"jsx-1429634686\" + \" \" + 'description',\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 7\n  }\n}, \"Vi tilbyr utleie av SUP og SUPturer i Fredrikstad og p\\xE5 Hvaler. Vi er i oppstartsfasen og tar gjerne en prat. Legg igjen navn og epost. Vi prek\\xE6s!\"), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 7\n  }\n})), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }\n}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  id: \"1429634686\",\n  __self: undefined\n}, \"body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;background:#fafafa;color:#2d2d2d;}.logo.jsx-1429634686{width:90%;max-width:650px;}.hero.jsx-1429634686{margin-top:3rem;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.jsx-1429634686{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-1429634686,.description.jsx-1429634686{text-align:center;font-size:1.4rem;line-height:1.4;max-width:700px;margin:3rem 1rem 1rem 1rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpdXNncm9uZGFobC9Eb2N1bWVudHMvR2l0SHViL3N1cC1zYWZhcmkvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJnQixBQUlrQixBQVFDLEFBTU0sQUFTUCxBQVFTLFNBN0JHLEFBc0JWLENBZkssTUFNTCxFQWlCTSxFQVBBLE1BZm5CLENBTWUsUUFpQkcsRUFQQyxjQVFELEdBUEQsYUFRWSxFQVA3Qix5QkFRQSxDQWpDcUIsTUFjRyxhQWJSLGNBQ2hCLG1EQWE2Qix5R0FDUiw2RkFFckIiLCJmaWxlIjoiL1VzZXJzL21hcml1c2dyb25kYWhsL0RvY3VtZW50cy9HaXRIdWIvc3VwLXNhZmFyaS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtJ1xuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsc2NyZWVuJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5TdXAgU2FmYXJpIC0gU3VwdHVyZXIgRnJlZHJpa3N0YWQvSHZhbGVyPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJTVVAgU2FmYXJpIHRpbGJ5ciBTVVAtdXRsZWllIG9nIFNVUC10dXJlciBpIEZyZWRyaWtzdGFkIHNrasOmcmfDpXJkZW4gb2cgcMOlIEh2YWxlci5cIi8+XG4gICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiUGFkZGxlYm9hcmQgRnJlZHJpa3N0YWQsIFNVUCDDmHN0Zm9sZCwgU1VQIEh2YWxlciwgU1VQIFJlbnRhbHMsIHN1cmYsIFN1cGJyZXR0IEZyZWRyaWtzdGFkLCBzdXB1dGxlaWUsIHN1cHR1cmVyLCB1dGxlaWUuXCIvPlxuXG4gICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICA8RnVsbHNjcmVlbiBpbWFnZT1cIi9pbWcvc3Vwc2FmYXJpLWh2YWxlci5qcGdcIiBoZWlnaHQ9XCI0NXZoXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvbG9nby5zdmdcIiAgYWx0PVwic3VwIHNhZmFyaSBsb2dvXCIgLz5cbiAgICA8L0Z1bGxzY3JlZW4+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0naGVybyc+XG4gICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgVmkgdGlsYnlyIHV0bGVpZSBhdiBTVVAgb2cgU1VQdHVyZXIgaSBGcmVkcmlrc3RhZCBvZyBww6UgSHZhbGVyLlxuICAgICAgICBWaSBlciBpIG9wcHN0YXJ0c2Zhc2VuIG9nIHRhciBnamVybmUgZW4gcHJhdC4gTGVnZyBpZ2plbiBuYXZuIG9nIGVwb3N0LiBWaSBwcmVrw6ZzIVxuICAgICAgPC9wPlxuICAgICAgPENvbnRhY3RGb3JtIC8+XG4gICAgPC9kaXY+XG4gICAgPEZvb3RlciAvPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICA6Z2xvYmFsKGJvZHkpIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxuICAgICAgICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgIGNvbG9yOiAjMmQyZDJkO1xuICAgICAgfVxuXG4gICAgICAubG9nb3tcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICAgIH1cblxuXG4gICAgICAuaGVybyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgfVxuICAgICAgLnRpdGxlLFxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgbWFyZ2luOiAzcmVtIDFyZW0gMXJlbSAxcmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\\n/*@ sourceURL=/Users/mariusgrondahl/Documents/GitHub/sup-safari/pages/index.js */\"));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FERixFQUVFO0FBQU0sTUFBSSxFQUFDLGFBQVg7QUFBeUIsU0FBTyxFQUFDLDRGQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFO0FBQU0sTUFBSSxFQUFDLFVBQVg7QUFBc0IsU0FBTyxFQUFDLDRIQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFIRixFQUtFO0FBQU0sS0FBRyxFQUFDLE1BQVY7QUFBaUIsTUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUxGLENBREYsRUFTRSxNQUFDLDhEQUFEO0FBQVksT0FBSyxFQUFDLDJCQUFsQjtBQUE4QyxRQUFNLEVBQUMsTUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQXNCLEtBQUcsRUFBQyxXQUExQjtBQUF1QyxLQUFHLEVBQUMsaUJBQTNDO0FBQUEsc0NBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FURixFQWFFO0FBQUEsc0NBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQSxzQ0FBYSxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEpBREYsRUFLRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFMRixDQWJGLEVBb0JFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXBCRjtBQUFBO0FBQUE7QUFBQSw2bUlBREY7O0FBbUVlQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0nXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxzY3JlZW4nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlN1cCBTYWZhcmkgLSBTdXB0dXJlciBGcmVkcmlrc3RhZC9IdmFsZXI8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNVUCBTYWZhcmkgdGlsYnlyIFNVUC11dGxlaWUgb2cgU1VQLXR1cmVyIGkgRnJlZHJpa3N0YWQgc2tqw6ZyZ8OlcmRlbiBvZyBww6UgSHZhbGVyLlwiLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJQYWRkbGVib2FyZCBGcmVkcmlrc3RhZCwgU1VQIMOYc3Rmb2xkLCBTVVAgSHZhbGVyLCBTVVAgUmVudGFscywgc3VyZiwgU3VwYnJldHQgRnJlZHJpa3N0YWQsIHN1cHV0bGVpZSwgc3VwdHVyZXIsIHV0bGVpZS5cIi8+XG5cbiAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgIDwvSGVhZD5cblxuICAgIDxGdWxsc2NyZWVuIGltYWdlPVwiL2ltZy9zdXBzYWZhcmktaHZhbGVyLmpwZ1wiIGhlaWdodD1cIjQ1dmhcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9sb2dvLnN2Z1wiICBhbHQ9XCJzdXAgc2FmYXJpIGxvZ29cIiAvPlxuICAgIDwvRnVsbHNjcmVlbj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPSdoZXJvJz5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxuICAgICAgICBWaSB0aWxieXIgdXRsZWllIGF2IFNVUCBvZyBTVVB0dXJlciBpIEZyZWRyaWtzdGFkIG9nIHDDpSBIdmFsZXIuXG4gICAgICAgIFZpIGVyIGkgb3Bwc3RhcnRzZmFzZW4gb2cgdGFyIGdqZXJuZSBlbiBwcmF0LiBMZWdnIGlnamVuIG5hdm4gb2cgZXBvc3QuIFZpIHByZWvDpnMhXG4gICAgICA8L3A+XG4gICAgICA8Q29udGFjdEZvcm0gLz5cbiAgICA8L2Rpdj5cbiAgICA8Rm9vdGVyIC8+XG5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAgIDpnbG9iYWwoYm9keSkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEF2ZW5pciBOZXh0LCBBdmVuaXIsXG4gICAgICAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgY29sb3I6ICMyZDJkMmQ7XG4gICAgICB9XG5cbiAgICAgIC5sb2dve1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgICAgfVxuXG5cbiAgICAgIC5oZXJvIHtcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICB9XG4gICAgICAudGl0bGUsXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgICAgICBtYXJnaW46IDNyZW0gMXJlbSAxcmVtIDFyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mariusgrondahl/Documents/GitHub/sup-safari/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIj9hYjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });