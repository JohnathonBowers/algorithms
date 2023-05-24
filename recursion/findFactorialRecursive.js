// Coded with help from Andrei Neagoie's "Master the Coding Interview: Data Structures + Algorithms" Udemy course

function findFactorialRecursive(number) {
    if (number < 1) {
        return undefined;
    }
    if (number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5));

// function findFactorialIterative(number) {
//     if (number < 1) {
//         return undefined;
//     }
//     if (number === 2) {
//         return 2;
//     }
//     let answer = 1;
//     for (let i = number; i >= 2; i--) {
//         answer *= i;
//     }
//     return answer;
// }

// console.log(findFactorialIterative(1));