// From Andrei Neagoie's "Master the Coding Interview: Data Structures + Algorithms" Udemy Course

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        let smallest = array[i];
        let smallestIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < smallest) {
                smallest = array[j];
                smallestIndex = j;
            }
        }
        let temp = array[i];
        array[i] = array[smallestIndex];
        array[smallestIndex] = temp;
    }
    return array;
}

console.log(selectionSort(numbers));

/*
// Andrei's solution:
function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
    array[i] = array[min];
    array[min] = temp;
    }
    return array;
}
*/