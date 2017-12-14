/* S T A C K */
console.log("* S T A C K *");
var Stack = require('./stack')
var stack = new Stack();
stack.push("Bulbasaur");
stack.push("Charmander");
stack.push("Squirtle");
stack.display();
console.log("Taking out Squirtle");
stack.pop();
stack.display();
console.log("Adding Pikachu");
stack.push("Pikachu");
stack.display();

//========================================================
console.log("===========================================");
//========================================================

/* Q U E U E */
console.log("* Q U E U E *");
var Queue = require('./queue');
var queue = new Queue();
queue.enqueue("Bird");
queue.enqueue("Magic");
queue.enqueue("Jordan");
queue.enqueue("Kobe");
queue.enqueue("Shaq");
queue.display();
console.log("Your order is ready, Bird. Next?");
queue.dequeue();
queue.display();

//========================================================
console.log("===========================================");
//========================================================

/* S L L */
console.log("* S L L *");
var SinglyLinkedList = require('./singly-linked-lists')
var cities = new SinglyLinkedList();
cities.insert("Los Angeles", "head");
cities.insert("San Francisco", "Los Angeles");
cities.insert("Seattle", "San Francisco");
cities.display();