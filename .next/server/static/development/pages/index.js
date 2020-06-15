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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/mariusgrondahl/Documents/GitHub/sup-safari/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nconst Home = () => __jsx(\"div\", {\n  className: \"jsx-254023127\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }\n}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}, __jsx(\"title\", {\n  className: \"jsx-254023127\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 7\n  }\n}, \"Sup Safari - Supturer Fredrikstad/Hvaler\"), __jsx(\"meta\", {\n  name: \"description\",\n  content: \"SUP Safari tilbyr SUP-utleie og SUP-turer i Fredrikstad skj\\xE6rg\\xE5rden og p\\xE5 Hvaler.\",\n  className: \"jsx-254023127\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 7\n  }\n}), __jsx(\"meta\", {\n  name: \"keywords\",\n  content: \"Paddleboard Fredrikstad, SUP \\xD8stfold, SUP Hvaler, SUP Rentals, surf, Supbrett Fredrikstad, suputleie, supturer, utleie.\",\n  className: \"jsx-254023127\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 7\n  }\n}), __jsx(\"link\", {\n  rel: \"icon\",\n  href: \"/favicon.ico\",\n  className: \"jsx-254023127\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 7\n  }\n})), __jsx(\"div\", {\n  className: \"jsx-254023127\" + \" \" + 'hero',\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }\n}, __jsx(\"img\", {\n  src: \"/logo.svg\",\n  alt: \"sup safari logo\",\n  className: \"jsx-254023127\" + \" \" + \"logo\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }\n}), __jsx(\"p\", {\n  className: \"jsx-254023127\" + \" \" + 'description',\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 7\n  }\n}, \"SUP safari tilbyr utleie av SUP og SUPturer i Fredrikstad og p\\xE5 Hvaler. Vi er i oppstartsfasen og tar gjerne en prat. Legg igjen navn og epost, Vi prek\\xE6s!\"), __jsx(\"form\", {\n  name: \"contact\",\n  method: \"POST\",\n  \"data-netlify\": \"true\",\n  className: \"jsx-254023127\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 3\n  }\n}, __jsx(\"p\", {\n  className: \"jsx-254023127\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 3\n  }\n}, __jsx(\"label\", {\n  className: \"jsx-254023127\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }\n}, \"Fornavn: \", __jsx(\"input\", {\n  type: \"text\",\n  name: \"name\",\n  className: \"jsx-254023127\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 21\n  }\n}))), __jsx(\"p\", {\n  className: \"jsx-254023127\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 3\n  }\n}, __jsx(\"label\", {\n  className: \"jsx-254023127\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }\n}, \"Epost: \", __jsx(\"input\", {\n  type: \"email\",\n  name: \"email\",\n  className: \"jsx-254023127\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 19\n  }\n}))), __jsx(\"button\", {\n  type: \"submit\",\n  className: \"jsx-254023127\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }\n}, \"Meld interessse\"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  id: \"254023127\",\n  __self: undefined\n}, \"body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;background:tomato;color:white;padding:1rem;}button.jsx-254023127{background:#2d2d2d;outline:none;border-radius:3px;width:100%;padding:.5rem;margin:0 auto;color:#fff;border:none;text-transform:uppercase;font-style:italic;}input.jsx-254023127{border-radius:3px;width:100%;padding:.5rem;color:#2d2d2d;margin:.2rem 0rem;outline:none;border:none;}.logo.jsx-254023127 img.jsx-254023127{max-width:800px;width:90%;}.hero.jsx-254023127{margin-top:10vh;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:60vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.jsx-254023127{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-254023127,.description.jsx-254023127{text-align:center;font-size:1.2rem;line-height:1.4;max-width:700px;margin:3rem 0rem 1rem 0rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpdXNncm9uZGFobC9Eb2N1bWVudHMvR2l0SHViL3N1cC1zYWZhcmkvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NnQixBQUlrQixBQVNVLEFBYUQsQUFVRixBQUtBLEFBVVAsQUFRUyxTQXJERyxBQThDVixPQWZELEFBS0MsRUFmQSxBQWlDTSxDQTlDSixDQXVDSSxNQWZuQixDQUtlLEVBZkMsR0FiSSxHQThDRixFQVBDLE1BekJILE9BYkgsQ0E4Q0ssR0FQRCxHQXpCRyxJQWJKLE1BOENhLEVBUDdCLE1BdENnQixBQWFELGFBQ0QsQ0FiRCxLQTZDYixDQXpEb0IsS0FhTixBQWFkLENBV2tCLFdBdkJTLENBYmIsSUFxQ1UsUUFwQ1QsWUFhSyxDQVpwQixpQkFhQSx3Q0F1QjZCLHlHQUNSLDZGQUVyQiIsImZpbGUiOiIvVXNlcnMvbWFyaXVzZ3JvbmRhaGwvRG9jdW1lbnRzL0dpdEh1Yi9zdXAtc2FmYXJpL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlN1cCBTYWZhcmkgLSBTdXB0dXJlciBGcmVkcmlrc3RhZC9IdmFsZXI8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNVUCBTYWZhcmkgdGlsYnlyIFNVUC11dGxlaWUgb2cgU1VQLXR1cmVyIGkgRnJlZHJpa3N0YWQgc2tqw6ZyZ8OlcmRlbiBvZyBww6UgSHZhbGVyLlwiLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJQYWRkbGVib2FyZCBGcmVkcmlrc3RhZCwgU1VQIMOYc3Rmb2xkLCBTVVAgSHZhbGVyLCBTVVAgUmVudGFscywgc3VyZiwgU3VwYnJldHQgRnJlZHJpa3N0YWQsIHN1cHV0bGVpZSwgc3VwdHVyZXIsIHV0bGVpZS5cIi8+XG5cbiAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgIDwvSGVhZD5cblxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0naGVybyc+XG4gICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL2xvZ28uc3ZnXCIgIGFsdD1cInN1cCBzYWZhcmkgbG9nb1wiIC8+XG4gICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgU1VQIHNhZmFyaSB0aWxieXIgdXRsZWllIGF2IFNVUCBvZyBTVVB0dXJlciBpIEZyZWRyaWtzdGFkIG9nIHDDpSBIdmFsZXIuXG4gICAgICAgIFZpIGVyIGkgb3Bwc3RhcnRzZmFzZW4gb2cgdGFyIGdqZXJuZSBlbiBwcmF0LiBMZWdnIGlnamVuIG5hdm4gb2cgZXBvc3QsIFZpIHByZWvDpnMhXG4gICAgICA8L3A+XG4gIDxmb3JtIG5hbWU9XCJjb250YWN0XCIgbWV0aG9kPVwiUE9TVFwiIGRhdGEtbmV0bGlmeT1cInRydWVcIj5cbiAgPHA+XG4gICAgPGxhYmVsPkZvcm5hdm46IDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz48L2xhYmVsPiAgIFxuICA8L3A+XG4gIDxwPlxuICAgIDxsYWJlbD5FcG9zdDogPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+PC9sYWJlbD5cbiAgPC9wPlxuXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TWVsZCBpbnRlcmVzc3NlPC9idXR0b24+XG5cbjwvZm9ybT5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0b21hdG87XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9ue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cblxuICAgICAgaW5wdXR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICBjb2xvcjogIzJkMmQyZDtcbiAgICAgICAgbWFyZ2luOiAuMnJlbSAwcmVtO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5sb2dvIGltZ3tcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIH1cblxuICAgICAgLmhlcm8ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWluLWhlaWdodDogNjB2aDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSxcbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgIG1hcmdpbjogM3JlbSAwcmVtIDFyZW0gMHJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\\n/*@ sourceURL=/Users/mariusgrondahl/Documents/GitHub/sup-safari/pages/index.js */\"));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FERixFQUVFO0FBQU0sTUFBSSxFQUFDLGFBQVg7QUFBeUIsU0FBTyxFQUFDLDRGQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFO0FBQU0sTUFBSSxFQUFDLFVBQVg7QUFBc0IsU0FBTyxFQUFDLDRIQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFIRixFQUtFO0FBQU0sS0FBRyxFQUFDLE1BQVY7QUFBaUIsTUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUxGLENBREYsRUFXRTtBQUFBLHFDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNBO0FBQXNCLEtBQUcsRUFBQyxXQUExQjtBQUF1QyxLQUFHLEVBQUMsaUJBQTNDO0FBQUEscUNBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREEsRUFFRTtBQUFBLHFDQUFhLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzS0FGRixFQU1GO0FBQU0sTUFBSSxFQUFDLFNBQVg7QUFBcUIsUUFBTSxFQUFDLE1BQTVCO0FBQW1DLGtCQUFhLE1BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0I7QUFBTyxNQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFJLEVBQUMsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWhCLENBREYsQ0FEQSxFQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFjO0FBQU8sTUFBSSxFQUFDLE9BQVo7QUFBb0IsTUFBSSxFQUFDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFkLENBREYsQ0FKQSxFQVFFO0FBQVEsTUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLENBTkUsQ0FYRjtBQUFBO0FBQUE7QUFBQSwwMUtBREY7O0FBbUdlQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlN1cCBTYWZhcmkgLSBTdXB0dXJlciBGcmVkcmlrc3RhZC9IdmFsZXI8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNVUCBTYWZhcmkgdGlsYnlyIFNVUC11dGxlaWUgb2cgU1VQLXR1cmVyIGkgRnJlZHJpa3N0YWQgc2tqw6ZyZ8OlcmRlbiBvZyBww6UgSHZhbGVyLlwiLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJQYWRkbGVib2FyZCBGcmVkcmlrc3RhZCwgU1VQIMOYc3Rmb2xkLCBTVVAgSHZhbGVyLCBTVVAgUmVudGFscywgc3VyZiwgU3VwYnJldHQgRnJlZHJpa3N0YWQsIHN1cHV0bGVpZSwgc3VwdHVyZXIsIHV0bGVpZS5cIi8+XG5cbiAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgIDwvSGVhZD5cblxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0naGVybyc+XG4gICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL2xvZ28uc3ZnXCIgIGFsdD1cInN1cCBzYWZhcmkgbG9nb1wiIC8+XG4gICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgU1VQIHNhZmFyaSB0aWxieXIgdXRsZWllIGF2IFNVUCBvZyBTVVB0dXJlciBpIEZyZWRyaWtzdGFkIG9nIHDDpSBIdmFsZXIuXG4gICAgICAgIFZpIGVyIGkgb3Bwc3RhcnRzZmFzZW4gb2cgdGFyIGdqZXJuZSBlbiBwcmF0LiBMZWdnIGlnamVuIG5hdm4gb2cgZXBvc3QsIFZpIHByZWvDpnMhXG4gICAgICA8L3A+XG4gIDxmb3JtIG5hbWU9XCJjb250YWN0XCIgbWV0aG9kPVwiUE9TVFwiIGRhdGEtbmV0bGlmeT1cInRydWVcIj5cbiAgPHA+XG4gICAgPGxhYmVsPkZvcm5hdm46IDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz48L2xhYmVsPiAgIFxuICA8L3A+XG4gIDxwPlxuICAgIDxsYWJlbD5FcG9zdDogPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+PC9sYWJlbD5cbiAgPC9wPlxuXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TWVsZCBpbnRlcmVzc3NlPC9idXR0b24+XG5cbjwvZm9ybT5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0b21hdG87XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9ue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cblxuICAgICAgaW5wdXR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICBjb2xvcjogIzJkMmQyZDtcbiAgICAgICAgbWFyZ2luOiAuMnJlbSAwcmVtO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5sb2dvIGltZ3tcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIH1cblxuICAgICAgLmhlcm8ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWluLWhlaWdodDogNjB2aDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSxcbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgIG1hcmdpbjogM3JlbSAwcmVtIDFyZW0gMHJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mariusgrondahl/Documents/GitHub/sup-safari/pages/index.js */"./pages/index.js");


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