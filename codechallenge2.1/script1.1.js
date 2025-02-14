'use strict'
const fruitCutter = fruit => fruit * 10;
const fruitMixer = function (apple,mango){
    const applePieces = fruitCutter(apple);
    const mangoPieces = fruitCutter(mango);
    let juicer = `Apples are ${applePieces} and Mangoes are ${mangoPieces}`;
    return juicer;
}


console.log(fruitMixer(5,10));

