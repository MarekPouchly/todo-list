/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\nconst UI = () => {\r\n    const inboxButton = document.getElementById('inbox-button');\r\n    const todayButton = document.getElementById('today-button');\r\n    const thisWeekButton = document.getElementById('this-week-button');\r\n    const addProjectButton = document.getElementById('add-project-button');\r\n    const addProjectPopupButton = document.getElementById('popup-add-project-button');\r\n    const closeProjectPopupButton = document.getElementById('popup-cancel-project-button');\r\n    const addTaskButton = document.getElementById('add-task-button');\r\n    const addTaskPopupButton = document.getElementById('button-add-task-popup')\r\n    const closeTaskPopupButton = document.getElementById('button-cancel-task-popup')\r\n\r\n    const loadEventListeners = () => {\r\n        inboxButton.addEventListener('click', openInboxProjects);\r\n        todayButton.addEventListener('click', openTodayProjects);\r\n        thisWeekButton.addEventListener('click', openThisWeekProjects);\r\n        addProjectButton.addEventListener('click', showProjectPopup);\r\n        addProjectPopupButton.addEventListener('click', addProject);\r\n        closeProjectPopupButton.addEventListener('click', closeProjectPopup);\r\n        addTaskButton.addEventListener('click', showTaskPopup);\r\n        addTaskPopupButton.addEventListener('click', addTask);\r\n        closeTaskPopupButton.addEventListener('click', closeTaskPopup);\r\n    }\r\n\r\n    const openInboxProjects = () => {\r\n        console.log(\"hello\")\r\n    }\r\n\r\n    const openTodayProjects = () => {\r\n        \r\n    }\r\n\r\n    const openThisWeekProjects = () => {\r\n        \r\n    }\r\n\r\n    const showProjectPopup = () => {\r\n        const popup = document.querySelector('.add-project-popup');\r\n        popup.classList.add('active');\r\n        addProjectButton.classList.add('active');\r\n    }\r\n\r\n    const closeProjectPopup = () => {\r\n        const popup = document.querySelector('.add-project-popup');\r\n        popup.classList.remove('active');\r\n        addProjectButton.classList.remove('active');\r\n    }\r\n\r\n    const addProject = (e) => {\r\n        e.preventDefault();\r\n        const projectName = document.getElementById('input-add-project-popup').value;\r\n        if( projectName !== \"\" ) {\r\n            console.log(\"Project created\")\r\n        }\r\n    }\r\n\r\n    const showTaskPopup = () => {\r\n        const popup = document.querySelector('.add-task-popup');\r\n        popup.classList.add('active');\r\n        addTaskButton.classList.add('active');\r\n    }\r\n    \r\n    const closeTaskPopup = () => {\r\n        const popup = document.querySelector('.add-task-popup');\r\n        popup.classList.remove('active');\r\n        addTaskButton.classList.remove('active');\r\n    }\r\n\r\n    const addTask = () => {\r\n    }\r\n\r\n    return {\r\n        loadEventListeners\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', (0,_UI__WEBPACK_IMPORTED_MODULE_0__.UI)().loadEventListeners);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;