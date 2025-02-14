'Use Strict'

const calcAverage = data =>{
    return data / 3;
};

const checkWinner = function(Dolphine,koalas){
    const avgDOlphine = calcAverage(Dolphine);
    const avgKoalas = calcAverage(koalas);
    //Check the average of  1st data is twice the numnber of 2nd data if there data is twice a number than the other one that team will win the compitition otherwise no team win!!
    if(avgKoalas >= 2*avgDOlphine){
        console.log(`kolas win (${avgKoalas} vs ${avgDOlphine}) `);
    }else if(avgDOlphine >= 2*avgKoalas){
        console.log(`Dolphine win (${avgDOlphine} vs ${avgKoalas})`);
    }else{
        console.log(`No team win`);
    }
}
const addData = (a ,b,c) => a+b+c;

// Data's to Calculate
const Additiondata1 =  addData(44,23,71);
const Additiondata2 =  addData(65,54,49);
const Addtiondata3 = addData(85,54,41);
const Addtiondata4 = addData(23,34,27);

//Execute or call the function 
checkWinner(Additiondata1,Additiondata2);
checkWinner(Addtiondata3,Addtiondata4);