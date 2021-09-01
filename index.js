// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0, 2);
}
const returnLastTwoDrivers = function(array){
    return array.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n){
    return int=>int*n;
}

const fareDoubler=(fare)=>{
    return fare*2;
}
const fareTripler=fare=>fare*3;

function selectDifferentDrivers(arrayOfDrivers, callback){
    return callback(arrayOfDrivers);
}