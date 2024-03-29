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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n\r\n\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.tasks = [];\r\n    }\r\n\r\n    setName(name) {\r\n        this.name = name;\r\n    }\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n\r\n    addTask(taskName, dueDate) {\r\n        this.tasks.push(new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](taskName, dueDate));\r\n    }\r\n\r\n    deleteTask(taskName) {\r\n        const task = this.tasks.find((task) => task.name === taskName);\r\n        this.tasks.splice(this.tasks.indexOf(task), 1);\r\n    }\r\n\r\n    hasTask(taskName) {\r\n        return this.tasks.some(task => task.name === taskName);\r\n    }\r\n\r\n    getTask(taskName) {\r\n        const task = this.tasks.find((task) => task.name === taskName);\r\n        return task ? this.tasks.indexOf(task) : null;\r\n    }\r\n\r\n    getAllTasks() {\r\n        return this.tasks;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todolist */ \"./src/Todolist.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n\r\n\r\n\r\nclass Storage {\r\n    static saveTodoList(todoList) {\r\n        localStorage.setItem(\"todoList\", JSON.stringify(todoList));\r\n    }\r\n\r\n    static getTodoList() {\r\n        const todoList = JSON.parse(localStorage.getItem(\"todoList\"));\r\n        if (todoList) {\r\n            return Object.assign(new _Todolist__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), todoList);\r\n        }\r\n        return new _Todolist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    }\r\n\r\n    static addProject(projectName){\r\n        const todoList = this.getTodoList();\r\n        todoList.addProject(projectName);\r\n        this.saveTodoList(todoList);\r\n    }\r\n  \r\n    static deleteProject(projectName) {\r\n        const todoList = this.getTodoList();\r\n        todoList.deleteProject(projectName);\r\n        this.saveTodoList(todoList)\r\n    }\r\n\r\n    static addTask(projectName, taskName, dueDate) {\r\n        const todoList = Storage.getTodoList();\r\n        todoList.getProject(projectName).addTask(taskName, dueDate);\r\n        this.saveTodoList(todoList);\r\n    }\r\n\r\n    static deleteTask(projectName, taskName) {\r\n        const todoList = Storage.getTodoList();\r\n        todoList.getProject(projectName).deleteTask(taskName);\r\n        this.saveTodoList(todoList);\r\n    }\r\n\r\n    static renameTask(projectName, oldTaskName, newTaskName) {\r\n        const todoList = Storage.getTodoList();\r\n        const project = todoList.getProject(projectName);\r\n        const taskIndex = project.getTask(oldTaskName);\r\n        if (taskIndex !== null) {\r\n            project.tasks[taskIndex].name = newTaskName;\r\n            Storage.saveTodoList(todoList);\r\n        }\r\n    }\r\n\r\n    static setCompleteTask(projectName, taskName, status) {\r\n        const todoList = Storage.getTodoList();\r\n        const project = todoList.getProject(projectName);\r\n        const taskIndex = project.getTask(taskName);\r\n        if (taskIndex !== null) {\r\n            project.tasks[taskIndex].completed = status;\r\n            Storage.saveTodoList(todoList);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Storage.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n    constructor(name, dueDate = \"No date\") {\r\n      this.name = name;\r\n      this.dueDate = dueDate;\r\n      this.completed = false;\r\n    }\r\n  \r\n    setName(newName) {\r\n        this.name = newName;\r\n    }\r\n  \r\n    getName() {\r\n        return this.name;\r\n    }\r\n    \r\n    setDate(dueDate) {\r\n        this.dueDate = dueDate;\r\n    }\r\n    \r\n    getDate() {\r\n        return this.dueDate;\r\n    }\r\n    \r\n    setCompleted(isCompleted) {\r\n        this.completed = isCompleted;\r\n    }\r\n\r\n    getCompleted() {\r\n        return this.completed;\r\n    }\r\n};\n\n//# sourceURL=webpack://todo-list/./src/Task.js?");

/***/ }),

/***/ "./src/Todolist.js":
/*!*************************!*\
  !*** ./src/Todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n\r\n\r\nclass TodoList {\r\n    constructor() {\r\n      this.projects = [];\r\n      \r\n    };\r\n  \r\n    addProject(projectName) {\r\n      const project = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName);\r\n      this.projects.push(project);\r\n    };\r\n  \r\n    deleteProject(projectName) {\r\n        const project = this.projects.find((project) => project.name === projectName);\r\n        this.projects.splice(this.projects.indexOf(project), 1);\r\n    };\r\n  \r\n    getProject(projectName) {\r\n        return Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), this.projects.find((project) => project.name === projectName));\r\n    }\r\n\r\n    contains(projectName) {\r\n        return this.projects.some((project) => project.name === projectName);\r\n    }\r\n  \r\n    getAllProjects() {\r\n      return this.projects;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Todolist.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n/* harmony import */ var _Todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todolist */ \"./src/Todolist.js\");\n\r\n\r\n\r\nclass UI {\r\n    static loadPage() {\r\n        this.loadProjects();\r\n        this.loadEventListeners();\r\n        this.setupProjectButtons();\r\n    }\r\n\r\n    static loadProjects() {\r\n        const todoList = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList();\r\n        if (todoList !== null) {\r\n            const projects = todoList.getAllProjects();\r\n            projects.forEach(project => this.createProjectButton(project.name))\r\n        }\r\n    }\r\n    \r\n    static loadEventListeners() {\r\n        const inboxButton = document.getElementById('inbox-button');\r\n        const todayButton = document.getElementById('today-button');\r\n        const thisWeekButton = document.getElementById('this-week-button');\r\n        const addProjectButton = document.getElementById('add-project-button');\r\n        const addProjectPopupButton = document.getElementById('popup-add-project-button');\r\n        const closeProjectPopupButton = document.getElementById('popup-cancel-project-button');\r\n        const addTaskButton = document.getElementById('add-task-button');\r\n        const addTaskPopupButton = document.getElementById('button-add-task-popup');\r\n        const closeTaskPopupButton = document.getElementById('button-cancel-task-popup');\r\n\r\n        inboxButton.addEventListener('click', UI.openInboxProjects);\r\n        todayButton.addEventListener('click', UI.openTodayProjects);\r\n        thisWeekButton.addEventListener('click', UI.openThisWeekProjects);\r\n        addProjectButton.addEventListener('click', UI.showProjectPopup);\r\n        addProjectPopupButton.addEventListener('click', UI.addProject);\r\n        closeProjectPopupButton.addEventListener('click', UI.closeProjectPopup);\r\n        addTaskButton.addEventListener('click', UI.showTaskPopup);\r\n        addTaskPopupButton.addEventListener('click', UI.addTask);\r\n        closeTaskPopupButton.addEventListener('click', UI.closeTaskPopup);\r\n    }\r\n\r\n    static setupProjectButtons() {\r\n        const projectButtons = document.querySelectorAll('[data-project-button]')\r\n        projectButtons.forEach( projectButton => {\r\n            projectButton.addEventListener('click', UI.handleProjectButton);\r\n        })        \r\n    }\r\n\r\n    static openInboxProjects() {\r\n    }\r\n\r\n    static openTodayProjects() {\r\n        \r\n    }\r\n\r\n    static openThisWeekProjects() {\r\n        \r\n    }\r\n\r\n    /* Projects */\r\n\r\n    static showProjectPopup() {\r\n        const popup = document.querySelector('.add-project-popup');\r\n        const addProjectButton = document.getElementById('add-project-button');\r\n        \r\n        UI.closeAllPopups();\r\n        popup.classList.add('active');\r\n        addProjectButton.classList.add('active');\r\n\r\n        const input = document.getElementById('input-add-project-popup');\r\n        input.focus();\r\n    }\r\n\r\n    static closeProjectPopup() {\r\n        const popup = document.querySelector('.add-project-popup');\r\n        popup.classList.remove('active');\r\n\r\n        const input = document.getElementById('input-add-project-popup');\r\n        input.value = '';\r\n\r\n        const addProjectButton = document.getElementById('add-project-button');\r\n        addProjectButton.classList.remove('active');\r\n    }\r\n\r\n    static addProject(e) {\r\n        e.preventDefault();\r\n        const projectName = document.getElementById('input-add-project-popup').value;\r\n        if (!projectName) {\r\n            alert(\"You must set Project Name\");\r\n            return;\r\n        }\r\n        if (_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList().contains(projectName)) {\r\n            alert(\"set different name\");\r\n            return;\r\n        }\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(projectName);\r\n        UI.createProjectButton(projectName);\r\n        UI.closeProjectPopup();\r\n    }\r\n\r\n    static handleProjectButton(event) {\r\n        let projectName = this.children[0].children[1].textContent;\r\n        if(event.target.classList.contains('fa-xmark')) {\r\n            projectName = event.currentTarget.children[0].children[1].textContent;\r\n            UI.deleteProject(projectName);\r\n            return;\r\n        }\r\n        UI.closeAllPopups();\r\n        UI.openProject(projectName);\r\n    }\r\n\r\n    static deleteProject(projectName) {\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject(projectName);\r\n        this.clearProjectsList();\r\n        this.loadProjects()\r\n    }\r\n\r\n    static openProject(projectName) {\r\n        const previewTitle = document.getElementById('preview-title');\r\n        previewTitle.textContent = projectName;\r\n        UI.updateTaskUI(projectName)\r\n    }\r\n\r\n    static createProjectButton(projectName) {\r\n        const projectsList = document.getElementById('projects-list');\r\n        projectsList.insertAdjacentHTML('afterbegin', `\r\n            <button class=\"btn project-button\" data-project-button>\r\n                <div class=\"project-left-side\">\r\n                    <i class=\"fa-solid fa-bars\"></i>\r\n                    <span>${projectName}</span>\r\n                </div>\r\n                <div class=\"project-right-side\">\r\n                    <i class=\"fa-solid fa-xmark\"></i>\r\n                </div>\r\n            </button>\r\n        `);\r\n        this.setupProjectButtons();\r\n    }\r\n\r\n    static clearProjectsList() {\r\n        const projectsList = document.getElementById('projects-list');\r\n        projectsList.textContent = \"\";\r\n    }\r\n\r\n    /* Tasks */\r\n    static showTaskPopup() {\r\n        const popup = document.querySelector('.add-task-popup');\r\n        const addTaskButton = document.getElementById('add-task-button');\r\n        \r\n        UI.closeAllPopups()\r\n        popup.classList.add('active');\r\n        addTaskButton.classList.add('active');\r\n\r\n        const input = document.getElementById('input-add-task-popup');\r\n        input.focus();\r\n    }\r\n\r\n    static closeTaskPopup() {\r\n        const popup = document.querySelector('.add-task-popup');\r\n        popup.classList.remove('active');\r\n\r\n        const input = document.getElementById('input-add-task-popup');\r\n        input.value = \"\";\r\n\r\n        const addTaskButton = document.getElementById('add-task-button');\r\n        addTaskButton.classList.remove('active');\r\n    }\r\n\r\n    static addTask(e) {\r\n        e.preventDefault();\r\n\r\n        const projectName = document.getElementById('preview-title').textContent;\r\n        const taskName = document.getElementById('input-add-task-popup').value;\r\n        const dueDate = \"No date\";\r\n\r\n        if (!taskName) {\r\n            alert(\"Set task name\");\r\n            return;\r\n        }\r\n\r\n        if (_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList().getProject(projectName).hasTask(taskName)) {\r\n            alert(\"This task is already in list\");\r\n            return;\r\n        }\r\n\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(projectName, taskName, dueDate);\r\n        UI.updateTaskUI(projectName);\r\n        UI.closeTaskPopup();\r\n    }\r\n\r\n    static deleteTask(taskName) {\r\n        const projectName = document.getElementById(\"preview-title\").textContent;\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(projectName, taskName);\r\n        UI.updateTaskUI(projectName)\r\n    }\r\n\r\n    static updateTaskUI(projectName) {\r\n        UI.clearTaskList();\r\n        const project = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList().getProject(projectName);\r\n        const tasks = project.getAllTasks();\r\n        tasks.forEach((task) => UI.createTask(task.name, \"No date\", task.completed));\r\n        UI.setupTaskButtons()\r\n    }\r\n\r\n    static createTask(taskName, dueDate, taskCompleted) {\r\n        const tasksList = document.getElementById('task-list');\r\n        tasksList.insertAdjacentHTML('beforeend', `\r\n            <button class=\"btn button-task\" data-task-button>\r\n                <div class=\"task-left-side\">\r\n                    <i class=\"fa-circle ${taskCompleted ? 'fa-solid' : 'fa-regular'}\"></i>\r\n                    <p class=\"task-name ${taskCompleted ? 'completed' : ''}\">${taskName}</p>\r\n                    <input type=\"text\" class=\"input-task-name\" data-task-name-input>\r\n                </div>\r\n                <div class=\"task-right-side\">\r\n                    <div class=\"task-date\">${dueDate}</div>\r\n                    <i class=\"fa-solid fa-xmark\"></i>\r\n                </div>\r\n            </button>\r\n        `)\r\n    }\r\n\r\n    static clearTaskList() {\r\n        const taskList = document.getElementById('task-list');\r\n        taskList.textContent = \"\";\r\n    }\r\n\r\n    static setupTaskButtons() {\r\n        const taskButtons = document.querySelectorAll('[data-task-button]');\r\n        const taskNameInputs = document.querySelectorAll('[data-task-name-input]')\r\n        taskButtons.forEach((taskButton) => {\r\n            taskButton.addEventListener('click', UI.handleTaskButton);\r\n        })\r\n        taskNameInputs.forEach((input) => {\r\n            input.addEventListener('keypress', UI.renameTask);\r\n        })\r\n    }\r\n\r\n    static handleTaskButton(event) {\r\n        const taskName = this.children[0].children[1].textContent;\r\n        const projectName = document.getElementById('preview-title');\r\n        if (event.target.classList.contains(\"fa-xmark\")) {\r\n            UI.deleteTask(taskName);\r\n            return;\r\n        }\r\n        if (event.target.classList.contains(\"task-name\")) {\r\n            if (event.detail === 2) {\r\n                UI.showRenameTaskInput(this);\r\n            }\r\n        }\r\n        if (event.target.classList.contains(\"fa-circle\")) {\r\n            UI.handleCompleteTask(this);\r\n        }\r\n    }\r\n\r\n    static handleCompleteTask(taskButton) {\r\n        const projectName = document.getElementById('preview-title').textContent;\r\n        const taskName = taskButton.children[0].children[1].textContent;\r\n        const status = UI.getTaskCompleteStatus(projectName, taskName);\r\n\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setCompleteTask(projectName, taskName, status);\r\n        UI.updateTaskUI(projectName);\r\n    }\r\n\r\n    static getTaskCompleteStatus(projectName, taskName) {\r\n        const project = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList().getProject(projectName);\r\n        const taskIndex = project.getTask(taskName);\r\n        return !(project.tasks[taskIndex].completed);\r\n    }\r\n\r\n    static showRenameTaskInput(taskButton) {\r\n        const taskNameParagraph = taskButton.children[0].children[1];\r\n        const taskName = taskButton.children[0].children[1].textContent;\r\n        const renameTaskInput = taskButton.children[0].children[2];\r\n\r\n        UI.closeOtherTaskInputs();\r\n        UI.closeAllPopups();\r\n\r\n        taskNameParagraph.classList.add('active');\r\n        renameTaskInput.classList.add('active');\r\n        renameTaskInput.value = taskName;\r\n    }\r\n\r\n    static renameTask(e) {\r\n        if (e.key === \"Enter\") {\r\n            const oldTaskName = this.previousElementSibling.textContent;\r\n            const newTaskName = this.value;\r\n            const projectName = document.getElementById('preview-title').textContent;\r\n\r\n            if (!newTaskName) {\r\n                alert(\"You must set task name!\");\r\n                return;\r\n            }\r\n\r\n            if (_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList().getProject(projectName).hasTask(newTaskName) && oldTaskName !== newTaskName) {\r\n                alert(\"This task is already in tasks. Set different name.\");\r\n                UI.closeRenameTaskInput(this);\r\n                return;\r\n            }\r\n\r\n            _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renameTask(projectName, oldTaskName, newTaskName)\r\n            UI.updateTaskUI(projectName)\r\n            UI.closeRenameTaskInput(this);\r\n        }\r\n    }\r\n\r\n    static closeRenameTaskInput(taskButton) {\r\n        const taskNameParagraph = taskButton.previousElementSibling;\r\n\r\n        taskNameParagraph.classList.remove('active');\r\n        taskButton.classList.remove('active');\r\n    }\r\n\r\n    static closeOtherTaskInputs() {\r\n        const inputs = document.querySelectorAll('[data-task-name-input]');\r\n        const paragraphs = document.querySelectorAll('.task-name');\r\n\r\n        if (inputs.length === 0) {\r\n            return;\r\n        }\r\n\r\n        inputs.forEach(input => input.classList.remove('active'));\r\n        paragraphs.forEach(paragraph => paragraph.classList.remove('active'));\r\n    };\r\n\r\n    static closeAllPopups() {\r\n        UI.closeProjectPopup();\r\n        UI.closeTaskPopup();\r\n        UI.closeOtherTaskInputs()\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadPage());\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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