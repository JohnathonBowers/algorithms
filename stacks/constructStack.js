class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
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

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);