
let bill = 430;

let tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill *0.20;
const output = `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`;
console.log(output);