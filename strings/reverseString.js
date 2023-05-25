/* 
From Andrei Neagoie:
Create a function that reverses a string:
'Hi my name is Andrei' should be:
'ierdnA si eman ym iH'
*/

// My solution:
function reverse(str) {
    let reverseArray = [];
    let reverseString = "";
    for (i = str.length - 1; i >= 0; i--) {
        reverseArray.push(str[i]);
    }
    for (i = 0; i < reverseArray.length; i++) {
        reverseString += reverseArray[i]
    }
    return reverseString;
}

// Andrei's solution:
function reverse(str) {
    //check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good';
    }
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i])
    }
    return backwards.join('')
}

// Andrei's first refactored solution:
function reverse2(str) {
    return str.split('').reverse().join('')
}

// Andrei's second refactored solution:
const reverse3 = str => str.split('').reverse().join('')

// Andrei's third refactored solution with spread operator:
const reverse4 = str => [...str].reverse().join('')

console.log(reverse3("Johnathon"))

function reverseString(str) {
    const backwardsArray = [];
    for (let i = str.length - 1; i >= 0; i--) {
        backwardsArray.push(str[i])
    }
    const newString = backwardsArray.join('');
    return newString;
}

console.log(reverseString('yoyo mastery'));

// Andrei Neagoie's recursive solution
function reverseStringRecursive(str) {
    if (str === '') {
        return '';
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}

reverseStringRecursive('yoyo master');