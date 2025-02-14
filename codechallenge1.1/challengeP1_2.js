let MarksWeight = 78;
let MarksHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;



let BMIMarks = MarksWeight / MarksHeight ** 2;
let BMIJohn = johnWeight / johnHeight ** 2;


if(BMIJohn > BMIMarks){
    console.log(`John's BMI (${BMIJohn}) is Higher than Marks's BMI (${BMIMarks})`);
}else{
    console.log(`Marks's BMI (${BMIMarks}) is Higher than John's BMI (${BMIJohn})`);
    
}
