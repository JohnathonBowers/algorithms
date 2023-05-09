// From Andrei Neagoie's Udemy course "Master the Coding Interview: Data Structures + Algorithms"

// Problem: given a singly-linked list, reverse the direction of the nodes in the linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0
    }
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        } else {
            newNode.next = this.head;
            this.head = newNode.next;
            this.length++;
            return this;
        }
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let current = this.head;
        this.tail = this.head;
        let prev = null;
        let next = null;
        while (current !== null) {
            next = current.next; // saves the next node
            current.next = prev; // reverses the pointer
            prev = current; // moves prev forward one node
            current = next; // moves current forward one node
        }
        this.head = prev; // sets this.head to prev because current has been set to null
        return this.printList();
    }
}

/*

tail                           head
  null <- 1 <- 10 <- 5 <- 16 <- 88   null
                               prev  cur  next

*/

const myLinkedList = new SLL();
myLinkedList.append(1);
myLinkedList.append(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(88);
myLinkedList.reverse();
console.log(myLinkedList.printList());