'use strict'
const fruitCutter = fruit => fruit * 10;
const fruitMixer = function (apple,mango){
    const applePieces = fruitCutter(apple);
    const mangoPieces = fruitCutter(mango);
    let juicer = `Apples are ${applePieces} and Mangoes are ${mangoPieces}`;
    return juicer;
}


console.log(fruitMixer(5,10));

/* for loop */



// const jonas = [
//     'jonas',
//     1991-2002,
//     'teacher',
//     ['govinda','aaron','dambar']

// ]
// const type = [];
// const typePush = [];
// //create a new array
// for (let i = 0; i<jonas.length;i++){
//     type[i] =typeof(jonas[i]);
//     typePush.push(jonas[i]);
// }
// //printing the value of array
// for(let i = 0; i < jonas.length;i++){
//     console.log("-------type Array--------");
//     console.log(type[i]);
//     console.log("-------typePush Array--------");
//     console.log(typePush[i]);
// }
// console.log(type);
// console.log(typePush);



//calculating age using array and loop

const brithYear = [1991,1992,2002,2000,1995];
const ages = [];

for(let i = 0;i<brithYear.length;i++){
    ages.push(2025-brithYear[i]);
    console.log(`${i+1} Ages : ${ages[i]}`);
}



//continuing and breaking statement in Loop


// for(let i = 0;i<jonas.length;i++){
    //     if(typeof jonas[i] !== 'string') continue;
    //     console.log(jonas[i], typeof jonas[i]);
    // }
    
    // for(let i = 0;i<jonas.length;i++){
        //     if(typeof jonas[i] === 'number') break;
        //     console.log(jonas[i],typeof jonas[i]);
        // }
        
        const jonas = [
            'jonas',
            1991-2002,
            'teacher',
            ['govinda','aaron','dambar']
        
        ]


        //loop backwards

        for(let i = jonas.length-1; i>=0 ;i--){
            console.log(jonas[i]);
        }



        for(let i = 5;i>=1;i--){
            for(let j = 5;j>=1;j--){
                console.log(j);
            }
            console.log('---');
        }


        //while loop 
        let rep = 1;
        while(rep<=10){
            console.log(`rep ${rep}`);
            rep++;
        }

        //dice program using loop

        let dice = Math.trunc( Math.random() * 6) + 1;
        let times = [];
        while(dice !== 6){
          console.log(`you role a ${dice}`);
          dice = Math.trunc( Math.random() * 6) + 1;
          times.push(dice);
          if(dice === 6){
            console.log(`You role a dice 6 in step ${times.length}`);
          }
        }
