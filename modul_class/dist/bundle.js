/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slider": () => (/* binding */ Slider),
/* harmony export */   "AutoSlider": () => (/* binding */ AutoSlider)
/* harmony export */ });


function button() {
    return 'button';
}

class Slider{
    constructor(width,height,count){
      this.width = width;
      this.height = height;
      this.count = count;
    }
    nexSlider(){
        console.log('Moving forward');
    }
    prewSlider(){
        console.log('Moving back');
    }
    whoAmI(){ 
        console.log(this.width, this.height, this.count);
    }
}
//------------------new class AutoSlider ------------------

class AutoSlider extends Slider{
    constructor(width,height,count,auto){
    super(width,height,count);  
    this.auto = auto;  
    }
    play(){
        console.log(`Atoplay: ${this.auto}`);
    }

    }




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/script.js");





// import {Slider} from './src/script';
// import * as total from './script'; // импортирует всё
// import Slider from './script';

//---------------------------------------------------
let slider = new _script__WEBPACK_IMPORTED_MODULE_0__.Slider(600, 400, 5),
      someSlider = new _script__WEBPACK_IMPORTED_MODULE_0__.AutoSlider(300, 450, 10, true);

slider.whoAmI();
someSlider.play()

// someSlider.whoAmI();

// const slider2 = new AutoSlider(500,500,4,true);
// slider2.whoAmI();
// slider2.play();


//----------------
// node -v
// npm -v
// npm init
// webpack.config.js
// npm install webpack webpack-cli --save-dev
// npx webpack
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map