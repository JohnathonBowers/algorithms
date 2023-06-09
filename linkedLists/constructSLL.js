// From Andrei Neagoie's Udemy course "Master the Coding Interview: Data Structures + Algorithms"

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
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
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        const newNode = new Node(value);
        // My solution:
        // let currentNode = this.head;
        // let currentIndex = 0;
        // while (currentIndex + 1 < index && currentNode !== null) {
        //     currentNode = currentNode.next;
        //     currentIndex++;
        // }
        // newNode.next = currentNode.next;
        // currentNode.next = newNode;
        // return this.printList();

        // Andrei's solution:
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
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
    remove(index) {
        if (index < 0 || index >= this.length) {
            return "Please enter a valid index."
        }
        const leader = this.traverseToIndex(index - 1);
        const trashNode = leader.next;
        leader.next = trashNode.next;
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(3);
console.log(myLinkedList.printList(), "Length: " + myLinkedList.length)