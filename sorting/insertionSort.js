// From Andrei Neagoie's "Master the Coding Interview: Data Structures + Algorithms" Udemy Course

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const insertionSort = function (array) {
    if (array.length === 1) return array;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (array[j] < array[j - 1]) {
                let temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
};

console.log(insertionSort(numbers));

// Andrei's solution:
function insertionSort1(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            // move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // find where number should go
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    // move number to the right spot
                    array.splice(j, 0, array.splice(i, 1)[0]);
                }
            }
        }
    }
}
