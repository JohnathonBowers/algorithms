class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(value) {
        const myNode = new Node(value);
        if (this.isEmpty()) {
            this.first = myNode;
            this.last = myNode;
            this.length ++;
            return this;
        }
        this.last.next = myNode;
        this.last = myNode;
        this.length++;
        return this;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.length === 1) {
            this.first = null;
            this.last = null;
            this.length = 0;
        }
        this.first = this.first.next;
        this.length --;
        return this;
    }
    peek() {
        return this.first;
    }
    isEmpty() {
        if(this.length === 0) {
            return true;
        }
    }
}

const myQueue = new Queue();
myQueue.enqueue('Michael');
myQueue.enqueue('Scottie');
myQueue.enqueue('Eugene');
myQueue.enqueue('Horace');
myQueue.dequeue();
console.log(myQueue);

