/*
Given a number N return the index value of the Fibonacci sequence, where the sequence is:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
The pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2+3
*/

function findFibonacciRecursive(n) {
    if (n < 0) {
        return undefined;
    }
    if (n === 0) {
        return 0;
    }
    if (n === 2 || n === 1) {
        return 1;
    }
    return findFibonacciRecursive(n - 1) + findFibonacciRecursive(n - 2);
}

console.log(findFibonacciRecursive(11));

function findFibonacciIterative(n) {
    if (n < 0) {
        return undefined;
    }
    if (n === 0) {
        return 0;
    }
    if (n === 2 || n === 1) {
        return 1;
    }
    let answer = 1;
    let prev = 1;
    let beforePrev = 1;
    for (let i = 3; i <= n; i++) {
        answer = prev + beforePrev;
        beforePrev = prev;
        prev = answer;
    }
    return answer;
}

console.log(findFibonacciIterative(11));