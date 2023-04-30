// From Andrei Neagoie's Udemy course "Master the Coding Interview: Data Structures + Algorithms"

// Prompt: write a function that combines two sorted arrays into one sorted array.

// Example: mergeSortedArrays([0,3,4,31], [4,6,30]) => [0,3,4,4,6,30,31]

const mergeSortedArrays = (array1, array2) => {
    if (!array1 && !array2) {
        return "Please enter at least one input array.";
    }
    if (!array1) {
        return array2;
    }
    if (!array2) {
        return array1;
    }
    const mergedArray = [];
    let current1 = 0;
    let current2 = 0;
    while (array1[current1] || array2[current2]) {
        if (!array2[current2] || array1[current1] < array2[current2]) {
            mergedArray.push(array1[current1]);
            current1++;
        } else {
            mergedArray.push(array2[current2]);
            current2++;
        }
    }
    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30,32,33]))

//Andrei's first solution

function mergeSortedArraysAndrei(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    //Check input
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }
    while (array1Item || array2Item) {
        if (array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray
}

//Andrei recommends using a helper function for the "if" statement in the "while" loop