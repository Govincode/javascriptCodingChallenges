'use strict'


const bills = [125,555,44];

const calTip = function(bill){
        const tipcalc = bill >= 50 && bill <= 300 ? bill*0.15 : bill *0.20;
        return tipcalc;
}

const tips = [calTip(bills[0]),calTip(bills[1]),calTip(bills[2])];

const total = [tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]];

console.log("___________calculated tips_________________");
console.log(tips);
console.log("___________calculated Bills___________");
console.log(total);
