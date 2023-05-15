class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LLStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
            return this;
        }
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this;
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }
    isEmpty() {
        if (this.length === 0) {
            return true;
        }
    }
}

class ArrayStack {
    constructor() {
        this.array = [];
    }
    peek() {
        return this.array[this.array.length - 1];
    }
    push(value) {
        this.array.push(value);
        return this;
    }
    pop() {
        this.array.pop();
        return this.array;
    }
}

// const myStack = new LLStack();
// myStack.push('Google');
// myStack.push('Udemy');
// myStack.push('Discord');
// console.log(myStack.peek());
// myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack);

const myArrayStack = new ArrayStack();
myArrayStack.push('Google');
myArrayStack.push('Udemy');
myArrayStack.push('Discord');
console.log(myArrayStack);