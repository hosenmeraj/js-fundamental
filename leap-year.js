// function getLeapYear(year) {

//     if (year % 4 == 0) {
//         return true;
//     }
//     return false;

// }
// var myLeapYearIs = 2023;
// var myLeapYear = getLeapYear(myLeapYearIs);
// console.log(myLeapYear);

function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return (year + ' This year is leap year');
    }
    else {
        return (year + ' This year is not leap year');
    }
}
var myYear = 2024;
var myYearIs = checkLeapYear(myYear);
console.log(myYearIs);

// // program to check leap year
// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         return (year + ' is a leap year');
//     } else {
//         return (year + ' is not a leap year');
//     }
// }

// // take input
// const MyYear = 2100;

// console.log(checkLeapYear(MyYear));