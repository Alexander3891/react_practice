// 'use strict';

function button(){
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
export{button,Slider, AutoSlider};

