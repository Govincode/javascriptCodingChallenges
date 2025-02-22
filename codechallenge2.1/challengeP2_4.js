'use strict'


const bills = [22,295,176,440,37,105,10,1100,86,52];

const tip = [];
const totals = [];

const calTip = function(bill){
    const tipcalc = bill >= 50 && bill <= 300 ? bill*0.15 : bill *0.20;
    return tipcalc;
}


//calculated total push to an array(total)
for(let i = 0;i<bills.length;i++){
    tip.push(calTip(bills[i]))
    totals.push(bills[i]+tip[i]);
}

console.log(totals);

//average of totals

const calcAverage = (arr) =>{
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
}

const totalsAverage = calcAverage(bills);
const tipAverage = calcAverage(tip);
console.log(`Aaverage of total bill  : ${totalsAverage}`);
console.log(`Aaverage of tip bill  : ${tipAverage}`);