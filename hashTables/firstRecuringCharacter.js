/*

Return the first recurring character in an array.

Given an array = [2,5,1,2,3,5,1,2,4]: it should return 2

Given an array = [2,1,1,2,3,5,1,2,4]: it should return 1

Given an array = [2,3,4,5]: it should return undefined

*/

const firstRecurringCharacter = array => {
    if (!array || !Array.isArray(array) || array === null) {
        return "Please enter valid input.";
    }
    const arrayItems = new Map();
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            return "Please include only numbers in the input array."
        }
        if (arrayItems.has(array[i])) {
            return array[i];
        }
        arrayItems.set(array[i], 1);
    }
    return undefined;
}

console.log(firstRecurringCharacter(null))