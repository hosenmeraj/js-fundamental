// var factorial = 1;
// for (var i = 1; i <= 7; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

// factorial with for loop

// function getFactorial(number) {
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// var myFactorial = getFactorial(8);
// console.log('Factorial of 8 is ', myFactorial);

// var secondFactorial = getFactorial(5);
// console.log('factorial of 5 is ', secondFactorial);

//Factorial with While  loop

// function getFactorialId(number) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// var myFactorialId = getFactorialId(6);
// console.log(myFactorialId);

//reverse factorial

function factorialReverse(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
var myFactorialReverse = factorialReverse(7);
console.log(myFactorialReverse);
