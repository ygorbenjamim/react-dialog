(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define("ReactDialog", ["react", "styled-components"], factory);
	else if(typeof exports === 'object')
		exports["ReactDialog"] = factory(require("react"), require("styled-components"));
	else
		root["ReactDialog"] = factory(root["React"], root[undefined]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_styled_components__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/react-dialog/components/Button/index.tsx":
/*!******************************************************!*\
  !*** ./src/react-dialog/components/Button/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _Loading_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loading/index.tsx */ "./src/react-dialog/components/Loading/index.tsx");
/* harmony import */ var _styles_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.ts */ "./src/react-dialog/components/Button/styles.ts");


var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    loading = _ref.loading,
    disabled = _ref.disabled,
    type = _ref.type,
    isCancel = _ref.isCancel;
  return /*#__PURE__*/React.createElement(_styles_ts__WEBPACK_IMPORTED_MODULE_1__.ButtonContainer, {
    loading: "".concat(loading),
    disabled: loading || disabled,
    type: type,
    onClick: onClick,
    $isCancel: isCancel
  }, loading ? /*#__PURE__*/React.createElement(_Loading_index_tsx__WEBPACK_IMPORTED_MODULE_0__.Loading, {
    size: 23,
    color: "#FFFF"
  }) : /*#__PURE__*/React.createElement(_styles_ts__WEBPACK_IMPORTED_MODULE_1__.Label, {
    $isCancel: isCancel
  }, children));
};

/***/ }),

/***/ "./src/react-dialog/components/Button/styles.ts":
/*!******************************************************!*\
  !*** ./src/react-dialog/components/Button/styles.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonContainer: () => (/* binding */ ButtonContainer),
/* harmony export */   Label: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\tborder: none;\n\tpadding: 14px;\n\tborder-radius: 7px;\n\tbackground-color: ", ";\n\t", ";\n\ttransition: 0.3s all ease;\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground-color: #666;\n\t\ttransition: 0.2s all ease;\n\t}\n"])), function (_ref) {
  var loading = _ref.loading;
  if (loading == 'true') {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\t\t#666;\n\t\t\t"])));
  }
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\t\t#43bec6\n\t\t"])));
}, function (_ref2) {
  var $isCancel = _ref2.$isCancel;
  if ($isCancel) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\t\t\t\tbackground-color: transparent;\n\t\t\t\tpadding: 10px;\n\t\t\t\tborder: 1px solid #43bec6;\n\t\t\t"])));
  }
});
var Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\tcolor: #ffff;\n\tbackground-color: transparent;\n\t", ";\n"])), function (_ref3) {
  var $isCancel = _ref3.$isCancel;
  if ($isCancel) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n\t\t\t\tcolor: #43bec6;\n\t\t\t"])));
  }
});

/***/ }),

/***/ "./src/react-dialog/components/Dialog/index.tsx":
/*!******************************************************!*\
  !*** ./src/react-dialog/components/Dialog/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDialog: () => (/* binding */ useDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/index.tsx */ "./src/react-dialog/components/Button/index.tsx");
/* harmony import */ var _styles_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.ts */ "./src/react-dialog/components/Dialog/styles.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useDialog = function useDialog() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    dialogList = _useState2[0],
    setDialogList = _useState2[1];
  var dialog = function dialog(title, subtitle, options) {
    setDialogList([].concat(_toConsumableArray(dialogList), [{
      id: dialogList.length + 1,
      title: title,
      subtitle: subtitle,
      options: options
    }]));
  };
  var Dialog = function Dialog() {
    var handlePressOption = function handlePressOption(item, id) {
      item.onPress();
      handleRemove(id);
    };
    var handleRemove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
      var dialogListFilter = dialogList.filter(function (dialog) {
        return dialog.id !== id;
      });
      setDialogList(dialogListFilter);
    }, [dialogList]);
    if (dialogList.length) {
      return /*#__PURE__*/React.createElement(_styles_ts__WEBPACK_IMPORTED_MODULE_2__.Container, null, dialogList.map(function (dialog, i) {
        var _dialog$options;
        return /*#__PURE__*/React.createElement(_styles_ts__WEBPACK_IMPORTED_MODULE_2__.Content, {
          key: i
          //onClick={() => handleRemove(dialog.id)}
        }, /*#__PURE__*/React.createElement(_styles_ts__WEBPACK_IMPORTED_MODULE_2__.Title, null, dialog.title), /*#__PURE__*/React.createElement(_styles_ts__WEBPACK_IMPORTED_MODULE_2__.Information, null, dialog.subtitle), /*#__PURE__*/React.createElement(_styles_ts__WEBPACK_IMPORTED_MODULE_2__.ButtonsContainer, null, !dialog.options && /*#__PURE__*/React.createElement(_Button_index_tsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
          onClick: function onClick() {
            return setDialogList([]);
          },
          type: "button"
        }, "OK"), (_dialog$options = dialog.options) === null || _dialog$options === void 0 ? void 0 : _dialog$options.map(function (item) {
          return /*#__PURE__*/React.createElement(_Button_index_tsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: function onClick() {
              return handlePressOption(item, dialog.id);
            },
            key: item.text,
            isCancel: item.text.toUpperCase() == 'CANCELAR' || item.text.toUpperCase() == 'VOLTAR' || item.text.toUpperCase() == 'NÃO',
            type: "button"
          }, item.text);
        })));
      }));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  return {
    Dialog: Dialog,
    dialog: dialog
  };
};

/***/ }),

/***/ "./src/react-dialog/components/Dialog/styles.ts":
/*!******************************************************!*\
  !*** ./src/react-dialog/components/Dialog/styles.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonsContainer: () => (/* binding */ ButtonsContainer),
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   Content: () => (/* binding */ Content),
/* harmony export */   Information: () => (/* binding */ Information),
/* harmony export */   Title: () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_animations_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/animations.ts */ "./src/styles/animations.ts");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tanimation: ", " 0.3s ease-out;\n\twidth: 100%;\n\tz-index: 1;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n"])), _styles_animations_ts__WEBPACK_IMPORTED_MODULE_1__.fadeIn);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\twidth: 40%;\n\tmax-width: 500px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 20px;\n\tborder-radius: 5px;\n\tbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n\tanimation: ", " 0.3s ease-out;\n\tbackground-color: #ffff;\n\t// Mobile\n\t@media (max-width: 820px) {\n\t\twidth: 90%;\n\t}\n"])), _styles_animations_ts__WEBPACK_IMPORTED_MODULE_1__.slideRight);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tfont-size: large;\n\tmargin-bottom: 20px;\n\tcolor: #43bec6;\n"])));
var Information = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\tmax-height: 50vh;\n\toverflow: auto;\n\tword-wrap: break-word;\n\tfont-size: medium;\n\twhite-space: pre-line;\n\tpadding-bottom: 20px;\n\tmargin-bottom: 20px;\n\tborder-bottom: 1px solid #43bec6;\n\tcolor: #666;\n"])));
var ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tgap: 10px;\n"])));

/***/ }),

/***/ "./src/react-dialog/components/Loading/index.tsx":
/*!*******************************************************!*\
  !*** ./src/react-dialog/components/Loading/index.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loading: () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var _styles_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.ts */ "./src/react-dialog/components/Loading/styles.ts");

var Loading = function Loading(_ref) {
  var color = _ref.color,
    size = _ref.size,
    label = _ref.label;
  return /*#__PURE__*/React.createElement(_styles_ts__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/React.createElement(_styles_ts__WEBPACK_IMPORTED_MODULE_0__.Spinner, {
    color: color,
    size: size
  }), label && /*#__PURE__*/React.createElement(_styles_ts__WEBPACK_IMPORTED_MODULE_0__.Label, null, label));
};

/***/ }),

/***/ "./src/react-dialog/components/Loading/styles.ts":
/*!*******************************************************!*\
  !*** ./src/react-dialog/components/Loading/styles.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   Label: () => (/* binding */ Label),
/* harmony export */   Spinner: () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_animations_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/animations.ts */ "./src/styles/animations.ts");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 20px;\n\tbackground-color: transparent;\n"])));
var Spinner = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t", ";\n\tborder-radius: 50%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: relative;\n\tanimation: ", " 1s linear infinite;\n\t::after {\n\t\tcontent: '';\n\t\twidth: calc(100% - 4px);\n\t\theight: calc(100% - 4px);\n\t\tborder-radius: 50%;\n\t\tbackground: #f9fafa;\n\t}\n"])), function (_ref) {
  var color = _ref.color,
    size = _ref.size;
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\t\tbackground: linear-gradient(\n\t\t\t\t180deg,\n\t\t\t\t", " 0%,\n\t\t\t\trgba(0, 0, 0, 0.1) 25%\n\t\t\t);\n\t\t\twidth: ", "px;\n\t\t\theight: ", "px;\n\t\t"])), color, size, size);
}, _styles_animations_ts__WEBPACK_IMPORTED_MODULE_1__.spin);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\tcolor: #666;\n\tfont-weight: bold;\n\tfont-size: 17px;\n"])));

/***/ }),

/***/ "./src/react-dialog/contexts/dialogContext.ts":
/*!****************************************************!*\
  !*** ./src/react-dialog/contexts/dialogContext.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogContext: () => (/* binding */ DialogContext),
/* harmony export */   useDialog: () => (/* binding */ useDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DialogContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var useDialog = function useDialog() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DialogContext);
  return context;
};


/***/ }),

/***/ "./src/react-dialog/providers/DialogProvider.tsx":
/*!*******************************************************!*\
  !*** ./src/react-dialog/providers/DialogProvider.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contexts_dialogContext_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contexts/dialogContext.ts */ "./src/react-dialog/contexts/dialogContext.ts");
/* harmony import */ var _components_Dialog_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Dialog/index.tsx */ "./src/react-dialog/components/Dialog/index.tsx");


var DialogProvider = function DialogProvider(_ref) {
  var children = _ref.children;
  var _useDialog = (0,_components_Dialog_index_tsx__WEBPACK_IMPORTED_MODULE_1__.useDialog)(),
    dialog = _useDialog.dialog,
    Dialog = _useDialog.Dialog;
  return /*#__PURE__*/React.createElement(_contexts_dialogContext_ts__WEBPACK_IMPORTED_MODULE_0__.DialogContext.Provider, {
    value: {
      dialog: dialog
    }
  }, /*#__PURE__*/React.createElement(Dialog, null), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogProvider);

/***/ }),

/***/ "./src/styles/animations.ts":
/*!**********************************!*\
  !*** ./src/styles/animations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appear: () => (/* binding */ appear),
/* harmony export */   fadeIn: () => (/* binding */ fadeIn),
/* harmony export */   fadeInBottom: () => (/* binding */ fadeInBottom),
/* harmony export */   gradientBg: () => (/* binding */ gradientBg),
/* harmony export */   slideDown: () => (/* binding */ slideDown),
/* harmony export */   slideRight: () => (/* binding */ slideRight),
/* harmony export */   spin: () => (/* binding */ spin)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fadeIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var fadeInBottom = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  from {\n    transform: translateY(50%);\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"])));
var slideDown = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    from {\n    transform: translateY(-50%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"])));
var slideRight = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    from {\n    transform: translateX(-50%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"])));
var spin = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var appear = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var gradientBg = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"])));

/***/ }),

/***/ "styled-components":
/*!***********************************************************************************************************!*\
  !*** external {"commonjs":"styled-components","commonjs2":"styled-components","amd":"styled-components"} ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/react-dialog/index.tsx ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useDialog: () => (/* reexport safe */ _contexts_dialogContext_ts__WEBPACK_IMPORTED_MODULE_1__.useDialog)
/* harmony export */ });
/* harmony import */ var _providers_DialogProvider_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/DialogProvider.tsx */ "./src/react-dialog/providers/DialogProvider.tsx");
/* harmony import */ var _contexts_dialogContext_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contexts/dialogContext.ts */ "./src/react-dialog/contexts/dialogContext.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_providers_DialogProvider_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=react-dialog.js.map