'use strict'

const jonas ={
    fristName : 'john Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const marks = {
    fristName: 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};


jonas.calcBMI();
marks.calcBMI();


if(jonas.bmi  > marks.bmi){
    console.log(`Jonas's BMI(${jonas.bmi}) is higher than Mark's (${marks.bmi})`);
}else{
    console.log(`Jonas's BMI(${jonas.bmi}) is lower than Mark's (${marks.bmi})`);

}

