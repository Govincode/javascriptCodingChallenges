'use strict'
/* objects are unstructured data
    Data which is store in variable also known as property/key
    in object There is key value pair combination
    we use name or key or property of object to retrive data from the object

*/
const jonasArray = {
    firstName : 'Govinda',
    lastName : 'chalune',
    Age : 1991 - 2002,
    job : 'teacher',
    friends : ['khagen','shanker','navin','pukar','nirmal','aaron']
};


/* two ways to get property from an object
    1. DOT notation   object.propertyName
    2. Bracket notation   Obeject['propertyName']
    */


    console.log(jonasArray.friends[0]);
    console.log(jonasArray.firstName);
    console.log(jonasArray['lastName']);

    const nameKey = 'Name';

    console.log(jonasArray['first'+ nameKey]);
    console.log(jonasArray['last'+ nameKey]);



    const interestIn = prompt('What do you want to to about jonas? Chose between fristName, lastName, Age, job, friends');

    if(jonasArray[interestIn]){
        console.log(jonasArray[interestIn]);
        if(jonasArray[interestIn] == jonasArray.friends){
            let i;
            for(i = 0; i<jonasArray['friends'].length;i++){
                console.log(`${i+1} friends name is ${jonasArray.friends[i]}`);
                console.log("\n");
            }
        }
    }else{
        console.log('no valid');
    }



    //inser new data into object 


    jonasArray.location = 'Portugal';
    jonasArray.twitter = '@jonas@12'

    //challenge 
    // 'jonas' has three friends and his best friends is khagen


    console.log(`${jonasArray.firstName} has ${jonasArray.friends.length}, friends and his best friends is ${jonasArray.friends[0]}`);