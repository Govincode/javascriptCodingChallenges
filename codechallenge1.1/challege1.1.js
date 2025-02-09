let MarksWeight = 78;
let MarksHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let MarksWeight2 = 95;
let MarksHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

let BMIMarks = MarksWeight / MarksHeight ** 2;
let BMIJohn = johnWeight / johnHeight ** 2;
let BMIMarks2 = MarksWeight2 / MarksHeight2 ** 2;
let BMIJohn2 = johnWeight2 / johnHeight2 ** 2;

let markHigherBMI = BMIJohn > BMIMarks;
let markHigherBMI2 = BMIJohn2 > BMIMarks2;

console.log(markHigherBMI);
console.log(markHigherBMI2);
