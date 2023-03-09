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

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.tasks = [];\r\n    }\r\n\r\n    setName(name) {\r\n        this.name = name;\r\n    }\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n\r\n    addTask(taskName) {\r\n        const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(taskName);\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    deleteTask(taskName) {\r\n        const task = this.tasks.find((task) => task.name === taskName);\r\n        tasks.splice(tasks.indexOf(task), 1);\r\n    }\r\n\r\n    getTask(taskName) {\r\n        return tasks.find((task) => task.name === taskName);\r\n    }\r\n\r\n    getAllTasks() {\r\n        return this.tasks;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/TodoList.js\");\n\r\n\r\nclass Storage {\r\n    static saveTodoList(todoList) {\r\n        localStorage.setItem(\"todoList\", JSON.stringify(todoList));\r\n    }\r\n\r\n    static getTodoList() {\r\n        const todoList = localStorage.getItem(\"todoList\");\r\n        if (todoList !== null) {\r\n            JSON.parse(todoList)\r\n        } else {\r\n            return null;\r\n        }\r\n    }\r\n\r\n    static addProject(projectName){\r\n        const todoList = this.getTodoList() || new _TodoList__WEBPACK_IMPORTED_MODULE_0__.TodoList;\r\n        todoList.addProject(projectName);\r\n        this.saveTodoList(todoList);\r\n    }\r\n  \r\n    static deleteProject(projectName) {\r\n        const todoList = this.getTodoList();\r\n        todoList.deleteProject(projectName);\r\n        localStorage.setItem(todoList);\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Storage.js?");

/***/ }),

/***/ "./src/TodoList.js":
/*!*************************!*\
  !*** ./src/TodoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\r\n\r\nclass TodoList {\r\n    constructor() {\r\n      this.projects = [];\r\n    }\r\n  \r\n    addProject(projectName) {\r\n      const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);\r\n      this.projects.push(project);\r\n    }\r\n  \r\n    deleteProject(projectName) {\r\n        const project = projects.find(project => project.getName() === projectName);\r\n        projects.splice(projects.indexOf(project), 1);\r\n    }\r\n  \r\n    getProject(projectName) {\r\n      return this.projects.find(project => project.getName() === projectName);\r\n    }\r\n  \r\n    getAllProjects() {\r\n      return this.projects;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/TodoList.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n\r\n\r\n\r\nconst UI = () => {\r\n    const inboxButton = document.getElementById('inbox-button');\r\n    const todayButton = document.getElementById('today-button');\r\n    const thisWeekButton = document.getElementById('this-week-button');\r\n    const addProjectButton = document.getElementById('add-project-button');\r\n    const addProjectPopupButton = document.getElementById('popup-add-project-button');\r\n    const closeProjectPopupButton = document.getElementById('popup-cancel-project-button');\r\n    const addTaskButton = document.getElementById('add-task-button');\r\n    const addTaskPopupButton = document.getElementById('button-add-task-popup')\r\n    const closeTaskPopupButton = document.getElementById('button-cancel-task-popup')\r\n\r\n    const loadPage = () => {\r\n        loadProjects();\r\n        loadEventListeners();\r\n        setupButtons();\r\n    }\r\n\r\n    const loadProjects = () => {\r\n        ;(0,_Storage__WEBPACK_IMPORTED_MODULE_0__.Storage)().getProjectsList()\r\n          .getProjects()\r\n          .forEach((project) => createProjectButton(project.name));\r\n      }\r\n\r\n    const loadEventListeners = () => {\r\n        inboxButton.addEventListener('click', openInboxProjects);\r\n        todayButton.addEventListener('click', openTodayProjects);\r\n        thisWeekButton.addEventListener('click', openThisWeekProjects);\r\n        addProjectButton.addEventListener('click', showProjectPopup);\r\n        addProjectPopupButton.addEventListener('click', addProject);\r\n        closeProjectPopupButton.addEventListener('click', closeProjectPopup);\r\n        addTaskButton.addEventListener('click', showTaskPopup);\r\n        addTaskPopupButton.addEventListener('click', addTask);\r\n        closeTaskPopupButton.addEventListener('click', closeTaskPopup);\r\n    }\r\n\r\n    const setupButtons = () => {\r\n        const projectButtons = document.querySelectorAll('[data-project-button]')\r\n        projectButtons.forEach( projectButton => {\r\n            projectButton.addEventListener('click', (event) => handleProjectButton(event));\r\n        } )\r\n    }\r\n\r\n    const openInboxProjects = () => {\r\n        console.log(\"hello\")\r\n    }\r\n\r\n    const openTodayProjects = () => {\r\n        \r\n    }\r\n\r\n    const openThisWeekProjects = () => {\r\n        \r\n    }\r\n\r\n    const showProjectPopup = () => {\r\n        const popup = document.querySelector('.add-project-popup');\r\n        popup.classList.add('active');\r\n        addProjectButton.classList.add('active');\r\n    }\r\n\r\n    const closeProjectPopup = () => {\r\n        const popup = document.querySelector('.add-project-popup');\r\n        popup.classList.remove('active');\r\n\r\n        const input = document.getElementById('input-add-project-popup');\r\n        input.value = \"\";\r\n\r\n        addProjectButton.classList.remove('active');\r\n    }\r\n\r\n    const addProject = (e) => {\r\n        e.preventDefault();\r\n        const projectName = document.getElementById('input-add-project-popup').value;\r\n        if (projectName === \"\") {\r\n            alert(\"You must set Project Name\");\r\n            return;\r\n        }\r\n        const projectsList = (0,_Storage__WEBPACK_IMPORTED_MODULE_0__.Storage)().getProjectsList();\r\n        console.log(projectsList);\r\n        if (projectsList.getProject(projectName)) {\r\n            alert(\"set different name\");\r\n            return;\r\n        }\r\n        const newProject = (0,_Project__WEBPACK_IMPORTED_MODULE_1__.Project)(projectName);\r\n        projectsList.addProject(newProject);\r\n        createProjectButton(projectName);\r\n        closeProjectPopup();\r\n        console.log((0,_Storage__WEBPACK_IMPORTED_MODULE_0__.Storage)().getProjectsList().getProjects());\r\n    }\r\n\r\n    const createProjectButton = (projectName) => {\r\n        const projectsList = document.getElementById('projects-list');\r\n        projectsList.insertAdjacentHTML('afterbegin', `\r\n            <button class=\"btn project-button\" data-project-button>\r\n                <div class=\"project-left-side\">\r\n                    <i class=\"fa-solid fa-bars\"></i>\r\n                    <span>${projectName}</span>\r\n                </div>\r\n                <div class=\"project-right-side\">\r\n                    <i class=\"fa-solid fa-xmark\"></i>\r\n                </div>\r\n            </button>\r\n        `);\r\n        setupButtons();\r\n    }\r\n\r\n    const showTaskPopup = () => {\r\n        const popup = document.querySelector('.add-task-popup');\r\n        popup.classList.add('active');\r\n        addTaskButton.classList.add('active');\r\n    }\r\n    \r\n    const closeTaskPopup = () => {\r\n        const popup = document.querySelector('.add-task-popup');\r\n        popup.classList.remove('active');\r\n\r\n        const input = document.getElementById('input-add-task-popup');\r\n        input.value = \"\";\r\n\r\n        addTaskButton.classList.remove('active');\r\n    }\r\n\r\n    const addTask = (e) => {\r\n        e.preventDefault();\r\n        const taskName = document.getElementById('input-add-task-popup').value;\r\n        if( taskName !== \"\" ) createTask(taskName, \"No date\");\r\n        closeTaskPopup();\r\n    }\r\n\r\n    const createTask = (taskName, date) => {\r\n        const tasksList = document.getElementById('task-list');\r\n        tasksList.insertAdjacentHTML('beforeend', `\r\n            <button class=\"btn button-task\" data-task-button>\r\n                <div class=\"task-left-side\">\r\n                    <i class=\"fa-regular fa-circle\"></i>\r\n                    <p class=\"task-content\">${taskName}</p>\r\n                </div>\r\n                <div class=\"task-right-side\">\r\n                    <div class=\"task-date\">${date}</div>\r\n                    <i class=\"fa-solid fa-xmark\"></i>\r\n                </div>\r\n            </button>\r\n        `);\r\n    }\r\n\r\n    const handleProjectButton = (event) => {\r\n        const projectName = event.currentTarget.children[0].children[1].textContent\r\n        if(event.target.classList.contains('fa-xmark')) {\r\n            deleteProject(projectName);\r\n            return;\r\n        }\r\n        openProject(projectName);\r\n    };\r\n\r\n    const openProject = (projectName) => {\r\n\r\n    }\r\n\r\n    const deleteProject = (projectName) => {\r\n\r\n    }\r\n\r\n    return {\r\n        loadPage\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', (0,_UI__WEBPACK_IMPORTED_MODULE_0__.UI)().loadPage);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.tasks = [];\r\n    }\r\n\r\n    setName(name) {\r\n        this.name = name;\r\n    }\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n\r\n    addTask(taskName) {\r\n        const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(taskName);\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    deleteTask(taskName) {\r\n        const task = this.tasks.find((task) => task.name === taskName);\r\n        tasks.splice(tasks.indexOf(task), 1);\r\n    }\r\n\r\n    getTask(taskName) {\r\n        return tasks.find((task) => task.name === taskName);\r\n    }\r\n\r\n    getAllTasks() {\r\n        return this.tasks;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n    constructor(name, dueDate = \"No date\") {\r\n      this.name = name;\r\n      this.dueDate = dueDate;\r\n    }\r\n  \r\n    setName(name) {\r\n      this.name = name;\r\n    }\r\n  \r\n    getName() {\r\n      return this.name;\r\n    }\r\n\r\n    setDate(dueDate) {\r\n        this.dueDate = dueDate;\r\n    }\r\n\r\n    getDate() {\r\n        return this.dueDate;\r\n    }\r\n};\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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