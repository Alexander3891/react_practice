'use strict';

import {Slider} from './script';
import {AutoSlider} from './script';

// import {Slider} from './src/script';
// import * as total from './script'; // импортирует всё
// import Slider from './script';

//---------------------------------------------------
let slider = new Slider(600, 400, 5),
      someSlider = new AutoSlider(300, 450, 10, true);

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

          //======== babel ======
//npm install --save-dev @babel/core @babel/cli @babel/preset-env
// npm install --save @babel/polyfill
// create babel.config.js
// npx babel src --out-dir src 
// npx webpack

// ===============  React ====================
// npx create-react-app my-app
// cd my-app
// npm start
