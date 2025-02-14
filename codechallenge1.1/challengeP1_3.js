let dolphineScores1 = 96+108+89;
let koaloasScores1 = 88+91+110;

let dolphineAverage1 = dolphineScores1 / 3;
let koalasAverage1 = koaloasScores1 / 3;

if(dolphineAverage1 > koalasAverage1){
    console.log("Team Dolphine Team Won the compitition!");
}else if(koalasAverage1 > dolphineAverage1){
    console.log("Team Koalas Team Won the Compition!");
}else{
    console.log("There is Draw Between Team Dolphine and Team Koalas");
}


let dolphineScores2 = 97+112+101;
let koaloasScores2 = 109+95+106;

let dolphineAverage2 = dolphineScores2 / 3;
let koalasAverage2 = koaloasScores2 / 3;

if(dolphineAverage2 > koalasAverage2 && dolphineAverage2 >= 100){
    console.log("Team Dolphine Won the Compition with average more than 100");
}else if(koalasAverage2 >  dolphineAverage2 && koalasAverage2 >= 100){
    
    console.log("Team koalas Won the Compition with average more than 100");
}else if (dolphineAverage2 == koalasAverage2 && koalasAverage2 >= 100 && dolphineAverage2 >= 100){
    console.log("Draw!!");
}else{
    console.log("No team won the Trophy");
}