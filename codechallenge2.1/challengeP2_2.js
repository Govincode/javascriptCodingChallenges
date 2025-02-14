'use strict'


const calcAge = (birthYear) => 2025 - birthYear;

const ages = [1991,2001,2002,2003,1990];

const calulatedAge = [calcAge(ages[0]),calcAge(ages[1]),calcAge(ages[2]),calcAge(ages[3]),calcAge(ages[4])];


console.log(calulatedAge);