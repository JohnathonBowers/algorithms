// From Andrei Neagoie's Udemy course "Master the Coding Interview: Data Structures + Algorithms"

class Node {
    constructor(value) {
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class DLL {
    constructor() {
        this.head = null,
        this.tail = null,
        this.length = 0
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
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++;
            return this;
        }
    }
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return this;
        }
    }
    printList(){
        if (!this.head) {
            return "This list is empty!";
        } else {
            const array = [];
            let currentNode = this.head;
            while (currentNode !== null) {
                array.push(currentNode.value);
                currentNode = currentNode.next;
            }
            return array;
        }
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    insert(index, value) {
        if (index >= this.length) {
            this.append(value);
        } else {
            const newNode = new Node(value);
            const leader = this.traverseToIndex(index - 1);
            const follower = leader.next;
            leader.next = newNode;
            newNode.prev = leader;
            newNode.next = follower;
            follower.prev = newNode;
            this.length++;
            return this.printList();
        }
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return "Please enter a valid index."
        } else {
            const trashNode = this.traverseToIndex(index);
            const leader = trashNode.prev;
            const follower = trashNode.next;
            leader.next = follower;
            follower.prev = leader;
            this.length--;
            return this.printList();
        }
    }
}

const myDLL = new DLL();
myDLL.append(10);
myDLL.append(5);
myDLL.append(16);
myDLL.prepend(1);
myDLL.insert(1, 99);
myDLL.remove(2);
console.log(myDLL.printList());


// Andrei's code:

// class DoublyLinkedList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null,
//             prev: null
//         };
//         this.tail = this.head;
//         this.length = 1;
//     }
//     append(value) {
//         const newNode = {
//             value: value,
//             next: null,
//             prev: null
//         };
//         newNode.prev = this.tail;
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }
// }

// const myLinkedList = new DoublyLinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// console.log(myLinkedList);