/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/addProject.js":
/*!**************************************!*\
  !*** ./src/javascript/addProject.js ***!
  \**************************************/
/*! exports provided: addProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ \"./src/javascript/addTask.js\");\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals */ \"./src/javascript/modals.js\");\n/* harmony import */ var _removeProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeProject */ \"./src/javascript/removeProject.js\");\n\r\n\r\n\r\n\r\nfunction addProject(){\r\n    let area = document.getElementsByClassName('todo_area')[0];\r\n    let newProject = document.getElementsByClassName('add_project')[0];\r\n\r\n    let newInput = document.createElement('input');\r\n    newInput.type = \"text\";\r\n    newInput.placeholder = 'name of the project';\r\n    newInput.classList.add(\"w-full\",\"h-fit\", \"bg-gray-100\", \"py-2\", \"px-4\", \"border-2\", \"border-gray-200\", \"rounded-md\")\r\n    \r\n\r\n    area.append(newInput);\r\n\r\n    newInput.focus();\r\n    newInput.scrollIntoView();\r\n\r\n    newProject.remove();\r\n    \r\n    newInput.addEventListener('keydown', function(event){\r\n        if(event.key === 'Enter'){\r\n            event.preventDefault();\r\n\r\n            let storedArr = JSON.parse(localStorage.getItem('storedArr')) || [];\r\n            let projectArr = JSON.parse(localStorage.getItem('projectList')) || [];\r\n            projectArr.push(newInput.value)\r\n            console.log(projectArr);\r\n            localStorage.setItem('projectList', JSON.stringify(projectArr));\r\n\r\n            let wholeDiv = document.createElement('div');\r\n            wholeDiv.id = newInput.value;\r\n            wholeDiv.classList.add(\"w-96\", \"flex\", \"flex-col\", \"gap-2\");\r\n\r\n            let topSection = document.createElement('div');\r\n            topSection.classList.add(\"top_section\", \"flex\", \"flex-row\", \"items-center\",\"justify-between\", \"gap-2\");\r\n            \r\n            let leftSide = document.createElement('div');\r\n            leftSide.classList.add(\"left_side\", \"flex\", \"flex-row\", \"items-center\", \"gap-2\");\r\n    \r\n\r\n            let tag = document.createElement('div');\r\n            tag.classList.add(\"px-3\", \"py-1\", \"bg-blue-100\", \"rounded-md\");\r\n\r\n            let tagText = document.createElement('p');\r\n            tagText.classList.add(\"align-middle\", \"text-blue-800\", \"font-semibold\")\r\n            tagText.innerHTML = newInput.value;\r\n            \r\n            let counter = document.createElement('i');\r\n            counter.classList.add('counter');\r\n            counter.innerHTML = storedArr.filter(val => {return val.project === newInput.value}).map(val => {return val.project}).length;\r\n\r\n            tag.appendChild(tagText);\r\n\r\n            leftSide.appendChild(tag);\r\n            leftSide.appendChild(counter);\r\n            \r\n            let rightSide = document.createElement('div');\r\n            let removeBtn = document.createElement('button');\r\n            removeBtn.classList.add(\"font-semibold\", \"underline\", \"text-red-700\");\r\n            removeBtn.innerHTML = 'remove';\r\n            removeBtn.addEventListener('click', _removeProject__WEBPACK_IMPORTED_MODULE_2__[\"removeProject\"]);\r\n            rightSide.appendChild(removeBtn);\r\n\r\n            topSection.appendChild(leftSide);\r\n            topSection.appendChild(rightSide);\r\n            wholeDiv.appendChild(topSection);\r\n\r\n            let newTaskBtn = document.createElement('div');\r\n            newTaskBtn.classList.add(\"new_list_item\", \"flex\", \"flex-row\", \"items-center\", \"gap-2\", \"w-full\",\"h-fit\", \"px-3\", \"py-2\", \"bg-gray-100\", \"rounded-md\", \"hover:bg-gray-200\", \"hover:cursor-pointer\");\r\n        \r\n            let icon1 = document.createElement('div');\r\n            icon1.classList.add(\"fa-solid\", \"fa-plus\", \"text-gray-800\");\r\n        \r\n            let innerText1 = document.createElement('p');\r\n            innerText1.classList.add(\"align-middle\", \"text-gray-800\", \"font-semibold\");\r\n            innerText1.innerHTML = 'New task';\r\n\r\n            newTaskBtn.appendChild(icon1);\r\n            newTaskBtn.appendChild(innerText1);\r\n            newTaskBtn.addEventListener('click', _modals__WEBPACK_IMPORTED_MODULE_1__[\"showModal\"]);\r\n            newTaskBtn.addEventListener('click', _addTask__WEBPACK_IMPORTED_MODULE_0__[\"getProject\"]);\r\n\r\n            wholeDiv.appendChild(newTaskBtn);\r\n            area.appendChild(wholeDiv);\r\n\r\n\r\n\r\n            let divBtn = document.createElement('div');\r\n            divBtn.classList.add(\"add_project\", \"flex\", \"flex-row\", \"items-center\", \"gap-2\", \"w-full\",\"h-fit\", \"px-3\", \"py-2\", \"bg-gray-100\", \"rounded-md\", \"hover:bg-gray-200\", \"hover:cursor-pointer\");\r\n        \r\n            let icon = document.createElement('div');\r\n            icon.classList.add(\"fa-solid\", \"fa-plus\", \"text-gray-800\");\r\n        \r\n            let innerText = document.createElement('p');\r\n            innerText.classList.add(\"align-middle\", \"text-gray-800\", \"font-semibold\");\r\n            innerText.innerHTML = 'New project';\r\n\r\n            divBtn.appendChild(icon);\r\n            divBtn.appendChild(innerText);\r\n            divBtn.addEventListener('click', addProject);\r\n    \r\n            area.appendChild(divBtn);\r\n            newInput.remove();\r\n        } else if(event.key == 'Escape'){\r\n            let divBtn = document.createElement('div');\r\n            divBtn.classList.add(\"add_project\", \"flex\", \"flex-row\", \"items-center\", \"gap-2\", \"w-full\",\"h-fit\", \"px-3\", \"py-2\", \"bg-gray-100\", \"rounded-md\", \"hover:bg-gray-200\", \"hover:cursor-pointer\");\r\n        \r\n            let icon = document.createElement('div');\r\n            icon.classList.add(\"fa-solid\", \"fa-plus\", \"text-gray-800\");\r\n        \r\n            let innerText = document.createElement('p');\r\n            innerText.classList.add(\"align-middle\", \"text-gray-800\", \"font-semibold\");\r\n            innerText.innerHTML = 'New project';\r\n\r\n            divBtn.appendChild(icon);\r\n            divBtn.appendChild(innerText);\r\n            divBtn.addEventListener('click', addProject);\r\n    \r\n            area.appendChild(divBtn);\r\n            newInput.remove();\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/javascript/addProject.js?");

/***/ }),

/***/ "./src/javascript/addTask.js":
/*!***********************************!*\
  !*** ./src/javascript/addTask.js ***!
  \***********************************/
/*! exports provided: getProject, addTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProject\", function() { return getProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTask\", function() { return addTask; });\n/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox */ \"./src/javascript/checkbox.js\");\n\r\n\r\nlet globalPointer = '';\r\n\r\nfunction getProject(event){\r\n    globalPointer = event.currentTarget.parentNode;   \r\n}\r\n\r\nclass listItem {\r\n    constructor(title, description, dueDate, project, priority){\r\n        this.title = title,\r\n        this.description = description,\r\n        this.dueDate = dueDate,\r\n        this.project = project,\r\n        this.priority = priority\r\n    }\r\n}\r\n\r\nfunction addTask(){\r\n    let nameVal = document.getElementsByClassName('name')[0].value;\r\n    let commentVal = document.getElementsByClassName('comment')[0].value;\r\n    let projectVal = globalPointer.id;\r\n    let dateVal = document.getElementsByClassName('date')[0].value;\r\n    let statusVal = document.getElementsByClassName('status')[0].value;\r\n\r\n    if(nameVal !== '' && commentVal !== '' && dateVal !== '' && statusVal !== ''){\r\n        let storedArr = JSON.parse(localStorage.getItem('storedArr')) || [];\r\n        let newListItem = new listItem(nameVal, commentVal, dateVal, projectVal, statusVal);\r\n        storedArr.push(newListItem);  \r\n        localStorage.setItem('storedArr', JSON.stringify(storedArr));\r\n\r\n        let topSection = globalPointer.getElementsByTagName('div')[0];\r\n        let counter = topSection.getElementsByClassName('counter')[0];\r\n        counter.innerHTML = storedArr.filter(val => {return val.project == projectVal}).map(val => {return val.project}).length;\r\n\r\n\r\n        let divItem = document.createElement('div');\r\n        let checkbox = document.createElement('input');\r\n        checkbox.type = \"checkbox\";\r\n\r\n        let divTitle = document.createElement('div');\r\n        let headerTwo = document.createElement('h2');\r\n        headerTwo.innerHTML = nameVal;\r\n        headerTwo.classList.add(\"text\", \"font-medium\", \"text-gray-800\");\r\n\r\n        checkbox.classList.add(\"check\",\"h-4\", \"w-4\", \"hover:text-blue-800\", \"hover:cursor-pointer\");\r\n        checkbox.addEventListener('click', _checkbox__WEBPACK_IMPORTED_MODULE_0__[\"cross\"]);\r\n\r\n\r\n        divTitle.classList.add(\"flex\", \"flex-row\", \"gap-2\", \"justify-start\", \"items-center\");\r\n        divTitle.appendChild(checkbox);\r\n        divTitle.appendChild(headerTwo);\r\n\r\n\r\n\r\n        let divDesc = document.createElement('div');\r\n        divDesc.classList.add(\"flex\", \"flex-col\", \"gap-2\");\r\n        let parDesc = document.createElement('div');\r\n        parDesc.innerHTML = commentVal;\r\n\r\n        divDesc.appendChild(parDesc);\r\n\r\n\r\n        let chips = document.createElement('div');\r\n        chips.classList.add(\"mt-4\", \"flex\", \"flex-row\", \"gap-2\");\r\n        \r\n        let divDate = document.createElement('div');\r\n        divDate.classList.add(\"px-3\", \"py-0.5\", \"bg-blue-100\", \"rounded-md\");\r\n        let parDate = document.createElement('p');\r\n        parDate.classList.add(\"text-sm\", \"align-middle\", \"text-blue-500\", \"font-semibold\")\r\n        parDate.innerHTML = dateVal;\r\n\r\n        divDate.appendChild(parDate);\r\n        \r\n\r\n        let divPriority = document.createElement('div');\r\n        let parPriority = document.createElement('p');\r\n        if(statusVal === 'Optional'){\r\n            divPriority.classList.add(\"chips\", \"px-3\", \"py-0.5\", \"bg-gray-100\", \"rounded-md\");\r\n            parPriority.classList.add(\"text-sm\", \"align-middle\", \"text-gray-500\", \"font-semibold\");\r\n        } else if(statusVal === 'Moderate'){\r\n            divPriority.classList.add(\"chips\", \"px-3\", \"py-0.5\", \"bg-blue-100\", \"rounded-md\");\r\n            parPriority.classList.add(\"text-sm\", \"align-middle\", \"text-blue-500\", \"font-semibold\");\r\n        } else {\r\n            divPriority.classList.add(\"chips\", \"px-3\", \"py-0.5\", \"bg-red-100\", \"rounded-md\");\r\n            parPriority.classList.add(\"text-sm\", \"align-middle\", \"text-red-500\", \"font-semibold\");\r\n        }\r\n        parPriority.innerHTML = statusVal;\r\n\r\n        divPriority.appendChild(parPriority);\r\n\r\n        chips.appendChild(divDate);\r\n        chips.appendChild(divPriority);\r\n        \r\n\r\n        divItem.classList.add(\"list_item\", \"py-2\", \"px-4\", \"flex\", \"flex-col\", \"gap-2\", \"bg-white\", \"drop-shadow-md\", \"border\", \"border-gray-300\", \"rounded-md\");\r\n        divItem.appendChild(divTitle);\r\n        divItem.appendChild(divDesc);\r\n        divItem.appendChild(chips);\r\n        \r\n        globalPointer.appendChild(divItem);\r\n    \r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/javascript/addTask.js?");

/***/ }),

/***/ "./src/javascript/checkbox.js":
/*!************************************!*\
  !*** ./src/javascript/checkbox.js ***!
  \************************************/
/*! exports provided: cross */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cross\", function() { return cross; });\nfunction cross(){\r\n    let cntr = 0;\r\n    let checkbox = document.getElementsByClassName('check');\r\n    for(let i = 0; i < checkbox.length; i++){\r\n        if(checkbox[i].checked == true){\r\n            cntr += 1;\r\n        }\r\n    }\r\n    \r\n    let removeBtn = document.getElementById('remove');\r\n    if(cntr > 0){\r\n        removeBtn.classList.remove('hidden');\r\n    } else {\r\n        removeBtn.classList.add('hidden');\r\n    }\r\n    let removeCntr = document.getElementById('remove').getElementsByTagName('i')[0];\r\n    removeCntr.innerHTML = cntr;\r\n}\r\n\r\n// project remove function\n\n//# sourceURL=webpack:///./src/javascript/checkbox.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ \"./src/javascript/modals.js\");\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ \"./src/javascript/addTask.js\");\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject */ \"./src/javascript/addProject.js\");\n/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox */ \"./src/javascript/checkbox.js\");\n/* harmony import */ var _removeProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeProject */ \"./src/javascript/removeProject.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet projectArr = JSON.parse(localStorage.getItem('projectList')) || [];\r\n\r\nlet addBtn = document.getElementsByClassName('addBtn')[0];\r\naddBtn.addEventListener('click', _addTask__WEBPACK_IMPORTED_MODULE_1__[\"addTask\"]);\r\naddBtn.addEventListener('click', _modals__WEBPACK_IMPORTED_MODULE_0__[\"hideModal\"]);\r\n\r\n\r\n\r\nlet storedArr = JSON.parse(localStorage.getItem('storedArr')) || [];\r\nlet todoArea = document.getElementsByClassName('todo_area')[0];\r\nfor(let j = 0; j < projectArr.length; j++){\r\n    let outerDiv = document.createElement('div');\r\n    outerDiv.id = projectArr[j];\r\n    outerDiv.classList.add(\"w-96\", \"flex\", \"flex-col\", \"gap-2\");\r\n    \r\n    let topSection = document.createElement('div');\r\n    topSection.classList.add(\"top_section\", \"flex\", \"flex-row\", \"items-center\",\"justify-between\", \"gap-2\");\r\n   \r\n    let leftSide = document.createElement('div');\r\n    leftSide.classList.add(\"left_side\", \"flex\", \"flex-row\", \"items-center\", \"gap-2\");\r\n\r\n    let tag = document.createElement('div');\r\n    tag.classList.add(\"tag\", \"px-3\", \"py-1\", \"bg-blue-100\", \"rounded-md\");\r\n    let tagText = document.createElement('p');\r\n    tagText.classList.add(\"align-middle\", \"text-blue-800\", \"font-semibold\");\r\n    tagText.innerHTML = projectArr[j];\r\n\r\n    let counter = document.createElement('i');\r\n    counter.classList.add('counter');\r\n    counter.innerHTML = storedArr.filter(val => {return val.project === projectArr[j]}).map(val => {return val.project}).length;\r\n\r\n    tag.appendChild(tagText);\r\n\r\n    leftSide.appendChild(tag);\r\n    leftSide.appendChild(counter);\r\n\r\n    let rightSide = document.createElement('div');\r\n    let removeBtn = document.createElement('button');\r\n    removeBtn.classList.add(\"font-semibold\", \"underline\", \"text-red-700\");\r\n    removeBtn.innerHTML = 'remove';\r\n    removeBtn.addEventListener('click', _removeProject__WEBPACK_IMPORTED_MODULE_4__[\"removeProject\"]);\r\n    rightSide.appendChild(removeBtn);\r\n\r\n    topSection.appendChild(leftSide);\r\n    topSection.appendChild(rightSide);\r\n    outerDiv.appendChild(topSection);\r\n\r\n    //task button\r\n    let newTaskBtn = document.createElement('div');\r\n    newTaskBtn.classList.add(\"new_list_item\", \"flex\", \"flex-row\", \"items-center\", \"gap-2\", \"w-full\",\"h-fit\", \"px-3\", \"py-2\", \"bg-gray-100\", \"rounded-md\", \"hover:bg-gray-200\", \"hover:cursor-pointer\");\r\n\r\n    let icon1 = document.createElement('div');\r\n    icon1.classList.add(\"fa-solid\", \"fa-plus\", \"text-gray-800\");\r\n\r\n    let innerText1 = document.createElement('p');\r\n    innerText1.classList.add(\"align-middle\", \"text-gray-800\", \"font-semibold\");\r\n    innerText1.innerHTML = 'New task';\r\n\r\n    newTaskBtn.appendChild(icon1);\r\n    newTaskBtn.appendChild(innerText1);\r\n    newTaskBtn.addEventListener('click', _modals__WEBPACK_IMPORTED_MODULE_0__[\"showModal\"]);\r\n    newTaskBtn.addEventListener('click', _addTask__WEBPACK_IMPORTED_MODULE_1__[\"getProject\"]);\r\n\r\n    outerDiv.appendChild(newTaskBtn);\r\n\r\n    todoArea.appendChild(outerDiv);\r\n\r\n    //Adding projects\r\n    for (let i = 0; i < storedArr.length; i++){\r\n        let divItem = document.createElement('div');\r\n        let checkbox = document.createElement('input');\r\n        checkbox.type = \"checkbox\";\r\n\r\n        let divTitle = document.createElement('div');\r\n        let headerTwo = document.createElement('h2');\r\n\r\n        let titleObj = storedArr.filter(val => {return val.project === projectArr[j]}).map(val => {return val.title});\r\n        // console.log(titleObj);\r\n        \r\n        headerTwo.innerHTML = titleObj[i];\r\n        headerTwo.classList.add(\"text\", \"font-medium\", \"text-gray-800\");\r\n\r\n        checkbox.classList.add(\"check\",\"h-4\", \"w-4\", \"hover:text-blue-800\", \"hover:cursor-pointer\");\r\n        checkbox.addEventListener('click', _checkbox__WEBPACK_IMPORTED_MODULE_3__[\"cross\"]);\r\n\r\n        divTitle.classList.add(\"flex\", \"flex-row\", \"gap-2\", \"justify-start\", \"items-center\");\r\n        divTitle.appendChild(checkbox);\r\n        divTitle.appendChild(headerTwo);\r\n\r\n\r\n\r\n        let divDesc = document.createElement('div');\r\n        divDesc.classList.add(\"flex\", \"flex-col\", \"gap-2\");\r\n        let parDesc = document.createElement('div');\r\n        let descObj = storedArr.filter(val => {return val.project === projectArr[j]}).map(val => {return val.description});\r\n        parDesc.innerHTML = descObj[i];\r\n\r\n        divDesc.appendChild(parDesc);\r\n\r\n\r\n        let tags = document.createElement('div');\r\n        tags.classList.add(\"mt-4\", \"flex\", \"flex-row\", \"gap-2\");\r\n        \r\n        let divDate = document.createElement('div');\r\n        divDate.classList.add(\"px-3\", \"py-0.5\", \"bg-blue-100\", \"rounded-md\");\r\n        let parDate = document.createElement('p');\r\n        parDate.classList.add(\"text-sm\", \"align-middle\", \"text-blue-500\", \"font-semibold\")\r\n        let dateObj = storedArr.filter(val => {return val.project === projectArr[j]}).map(val => {return val.dueDate});\r\n        parDate.innerHTML = dateObj[i];\r\n\r\n        divDate.appendChild(parDate);\r\n        \r\n\r\n        let divPriority = document.createElement('div');\r\n        let parPriority = document.createElement('p');\r\n        let priorityObj = storedArr.filter(val => {return val.project === projectArr[j]}).map(val => {return val.priority});\r\n        let selectedPriority = priorityObj[i];\r\n\r\n        if(selectedPriority === 'Optional'){\r\n            divPriority.classList.add(\"tag\", \"px-3\", \"py-0.5\", \"bg-gray-100\", \"rounded-md\");\r\n            parPriority.classList.add(\"text-sm\", \"align-middle\", \"text-gray-500\", \"font-semibold\");\r\n        } else if(selectedPriority === 'Moderate'){\r\n            divPriority.classList.add(\"tag\", \"px-3\", \"py-0.5\", \"bg-blue-100\", \"rounded-md\");\r\n            parPriority.classList.add(\"text-sm\", \"align-middle\", \"text-blue-500\", \"font-semibold\");\r\n        } else {\r\n            divPriority.classList.add(\"tag\", \"px-3\", \"py-0.5\", \"bg-red-100\", \"rounded-md\");\r\n            parPriority.classList.add(\"text-sm\", \"align-middle\", \"text-red-500\", \"font-semibold\");\r\n        }\r\n        parPriority.innerHTML = selectedPriority;\r\n        divPriority.appendChild(parPriority);\r\n\r\n        tags.appendChild(divDate);\r\n        tags.appendChild(divPriority);\r\n        \r\n\r\n        divItem.classList.add(\"list_item\", \"py-2\", \"px-4\", \"flex\", \"flex-col\", \"gap-2\", \"bg-white\", \"drop-shadow-md\", \"border\", \"border-gray-300\", \"rounded-md\");\r\n        divItem.appendChild(divTitle);\r\n        divItem.appendChild(divDesc);\r\n        divItem.appendChild(tags);\r\n        if(titleObj[i] !== undefined){\r\n        outerDiv.appendChild(divItem);}\r\n    }\r\n            \r\n}\r\n\r\nlet divBtnPrj = document.createElement('div');\r\ndivBtnPrj.classList.add(\"add_project\", \"flex\", \"flex-row\", \"items-center\", \"gap-2\", \"w-full\",\"h-fit\", \"px-3\", \"py-2\", \"bg-gray-100\", \"rounded-md\", \"hover:bg-gray-200\", \"hover:cursor-pointer\");\r\n\r\nlet iconPrj = document.createElement('div');\r\niconPrj.classList.add(\"fa-solid\", \"fa-plus\", \"text-gray-800\");\r\n\r\nlet innerTextPrj = document.createElement('p');\r\ninnerTextPrj.classList.add(\"align-middle\", \"text-gray-800\", \"font-semibold\");\r\ninnerTextPrj.innerHTML = 'New project';\r\n\r\ndivBtnPrj.appendChild(iconPrj);\r\ndivBtnPrj.appendChild(innerTextPrj);\r\ndivBtnPrj.addEventListener('click', _addProject__WEBPACK_IMPORTED_MODULE_2__[\"addProject\"]);\r\n\r\ntodoArea.appendChild(divBtnPrj);\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/modals.js":
/*!**********************************!*\
  !*** ./src/javascript/modals.js ***!
  \**********************************/
/*! exports provided: showModal, hideModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showModal\", function() { return showModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideModal\", function() { return hideModal; });\nfunction showModal(){\r\n    let modal = document.getElementsByClassName('adding_list_item')[0];\r\n    modal.classList.remove('hidden');\r\n\r\n    let body = document.querySelector(\"body\");\r\n    body.style.overflow = \"hidden\";\r\n}\r\n\r\nfunction hideModal(){\r\n    let modal = document.getElementsByClassName('adding_list_item')[0];\r\n\r\n    let nameVal = document.getElementsByClassName('name')[0].value;\r\n    let commentVal = document.getElementsByClassName('comment')[0].value;\r\n    let dateVal = document.getElementsByClassName('date')[0].value;\r\n    let statusVal = document.getElementsByClassName('status')[0].value;\r\n\r\n    if(nameVal !== '' && commentVal !== '' && dateVal !== '' && statusVal !== ''){\r\n        modal.classList.add('hidden');\r\n        document.getElementsByClassName('name')[0].value = '';\r\n        document.getElementsByClassName('comment')[0].value = '';\r\n        document.getElementsByClassName('date')[0].value = '';\r\n        document.getElementsByClassName('status')[0].value = '';\r\n\r\n        let body = document.querySelector(\"body\");\r\n        body.style.overflow = \"auto\";\r\n    }   \r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/javascript/modals.js?");

/***/ }),

/***/ "./src/javascript/removeProject.js":
/*!*****************************************!*\
  !*** ./src/javascript/removeProject.js ***!
  \*****************************************/
/*! exports provided: removeProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProject\", function() { return removeProject; });\nfunction removeProject(event){\r\n    let projectColumn = event.currentTarget.parentNode.parentNode.parentNode;\r\n    projectColumn.remove();\r\n    let idName = event.currentTarget.parentNode.parentNode.parentNode.id;\r\n    \r\n    let storedArr = JSON.parse(localStorage.getItem('storedArr')) || [];\r\n    let projectList = JSON.parse(localStorage.getItem('projectList')) || [];\r\n    for(let i = 0; i < storedArr.length; i++){\r\n        if(storedArr[i].project === idName){\r\n            storedArr.splice(i, 1);\r\n        }\r\n    }\r\n    for(let j = 0; j < projectList.length; j++){\r\n        if(projectList[j] === idName){\r\n            projectList.splice(j, 1);\r\n        }\r\n    }\r\n    localStorage.setItem('storedArr', JSON.stringify(storedArr));\r\n    localStorage.setItem('projectList', JSON.stringify(projectList))\r\n\r\n    console.log(idName);\r\n\r\n}\n\n//# sourceURL=webpack:///./src/javascript/removeProject.js?");

/***/ })

/******/ });