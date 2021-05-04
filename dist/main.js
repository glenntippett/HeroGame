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

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hero\": () => (/* binding */ Hero)\n/* harmony export */ });\nclass Hero {\n  constructor (hero) {\n    this._hero = hero\n    this._heroTop = 255\n    this._heroLeft = 255\n    this._moveSpeed = 10\n  }\n\n  get topLocation () {\n    return this._heroTop\n  }\n\n  get leftLocation () {\n    return this._heroLeft\n  }\n\n  setStartLocation () {\n    this._hero.style.top = `${this._heroTop}px`\n    this._hero.style.left = `${this._heroLeft}px`\n  }\n\n  attack () {\n    const attackDown = 'url(./assets/hero/Hero_Attack_Down.gif'\n    const attackUp = 'url(./assets/hero/Hero_Attack_Up.gif'\n    const attackRight = 'url(./assets/hero/Hero_Attack_Right.gif'\n    const attackLeft = 'url(./assets/hero/Hero_Attack_Left.gif'\n    this._hero.style.backgroundImage = attackDown\n  }\n\n  moveHero (event) {\n    switch (event.code) {\n      case 'ArrowUp':\n        this._heroTop -= this._moveSpeed\n        this._hero.style.top = `${this._heroTop}px`\n        this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Walk_Up.gif'\n        document.addEventListener('keyup', () => {\n          this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Idle_Up.gif'\n        })\n        break\n      case 'ArrowRight':\n        this._heroLeft += this._moveSpeed\n        this._hero.style.left = `${this._heroLeft}px`\n        this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Walk_Right.gif'\n        document.addEventListener('keyup', () => {\n          this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Idle_Right.gif'\n        })\n        break\n      case 'ArrowDown':\n        this._heroTop += this._moveSpeed\n        this._hero.style.top = `${this._heroTop}px`\n        this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Walk_Down.gif'\n        document.addEventListener('keyup', () => {\n          this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Idle.gif'\n        })\n        break\n      case 'ArrowLeft':\n        this._heroLeft -= this._moveSpeed\n        this._hero.style.left = `${this._heroLeft}px`\n        this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Walk_Left.gif'\n        document.addEventListener('keyup', () => {\n          this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Idle_Left.gif'\n        })\n        break\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://herogame/./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight */ \"./src/knight.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Global Variables\n  const hero = new _hero__WEBPACK_IMPORTED_MODULE_0__.Hero(document.querySelector('.hero'))\n  const knight = new _knight__WEBPACK_IMPORTED_MODULE_1__.Knight(document.querySelector('.knight'))\n\n  function startGame () {\n    hero.setStartLocation()\n    knight.setStartLocation()\n  }\n\n  function moveHero (event) {\n    if (event.code === 'Space') hero.attack()\n    hero.moveHero(event)\n    // Check if Hero is near the Knight\n    const knightSpeech = document.querySelector('.knight-speech')\n    if (hero.topLocation < 80 && (hero.leftLocation < 200 && hero.leftLocation > 50)) {\n      knightSpeech.style.display = 'block'\n    } else {\n      knightSpeech.style.display = 'none'\n    }\n\n    // Check if Hero is near the Old Man\n    const oldManSpeech = document.querySelector('.old-man-speech')\n    if ((hero.topLocation > 70 && hero.topLocation < 130) && (hero.leftLocation < 525 && hero.leftLocation > 415)) {\n      oldManSpeech.style.display = 'block'\n    } else {\n      oldManSpeech.style.display = 'none'\n    }\n  }\n\n  document.addEventListener('keydown', moveHero)\n\n  startGame()\n})\n\n\n//# sourceURL=webpack://herogame/./src/index.js?");

/***/ }),

/***/ "./src/knight.js":
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Knight\": () => (/* binding */ Knight)\n/* harmony export */ });\nclass Knight {\n  constructor (knight) {\n    this._knight = knight\n    this._knightTop = 70\n    this._knightLeft = 120\n  }\n\n  setStartLocation () {\n    this._knight.style.top = `${this._knightTop}px`\n    this._knight.style.left = `${this._knightLeft}px`\n  }\n}\n\n\n\n\n//# sourceURL=webpack://herogame/./src/knight.js?");

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