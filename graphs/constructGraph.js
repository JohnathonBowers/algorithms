// From Andrei Neagoie's Udemy course "Master the Coding Interview: Data Structures & Algorithms"

//Edge List: a list of arrays that shows the connections between nodes
const graph1 = [[0, 2], [2, 3], [2, 1], [1, 3]];

//Adjacent List: the index of the array is the value of the node, and the value is the node's neighbors. We can use an array, an object, or a linked list.
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

//Adjacent Matrix: a list of zeroes and ones to indicate whether a particular node x has a connection to node y. 0 means no, 1 means yes.

//Below is the adjacent matrix for the preceding adjacent list:
const graph3 = [
    [0, 0, 1, 0], //Node 0 is only connected to node 2
    [0, 0, 1, 1], //Node 1 is connected to 2 and 3
    [1, 1, 0, 1], //Node 2 is connected to 0, 1, and 3
    [0, 1, 1, 0]  //Node 3 is connected to 1 and 2
]

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1, node2) {
        //Undirected Graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
        this.numberOfNodes++;
    }
    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();