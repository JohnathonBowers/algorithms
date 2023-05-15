/*

LeetCode problem #232:

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

*/

// The following is a lightly adapted version of Andrei Neagoie's solution from his Udemy course "Master the Coding Interview: Data Structures + Algorithms"

class Queue {
    constructor() {
        this.first = [];
        this.last = [];
    }
    enqueue(value) {
        const length = this.first.length;
        for(let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }
    dequeue() {
        const length = this.last.length;
        for(let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }
        this.first.pop();
        return this;
    }
    peek() {
        if (this.last.length > 0) {
            return this.last[0];
        }
        return this.first[this.first.length - 1];
    }
}

const myQueue = new Queue();
console.log(myQueue.peek());
myQueue.enqueue('Michael');
myQueue.enqueue('Scottie');
myQueue.enqueue('Dennis');
myQueue.enqueue('Horace');
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.peek());
myQueue.enqueue('Charles');
console.log(myQueue);
console.log(myQueue.peek());