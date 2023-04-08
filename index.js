// Code your solution in this file!
const myArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(myArray){
return [myArray[0],myArray[1]];
}
const returnLastTwoDrivers = function(myArray){
    return [myArray[2],myArray[3]];
}
const  selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(n){
    return function(fare) {return n * n};
}
const fareDoubler = (createFareMultiplier) => {return createFareMultiplier * 2};
const fareTripler = (createFareMultiplier) => {return createFareMultiplier * 3};
const selectDifferentDrivers = (drivers, selectDifferentDrivers)=>
    {return selectDifferentDrivers(drivers)};
