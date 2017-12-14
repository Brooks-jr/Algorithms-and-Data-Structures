var SinglyLinkedList = (function () {
    function Node(value) {
        this.dataStore = value;
        this.next = null;
    }
    function SinglyLinkedList() {
        this.head = new Node("head");
    }
    SinglyLinkedList.prototype.find = function (target) {
        var currentNode = this.head;
        while (currentNode.dataStore !== target) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    SinglyLinkedList.prototype.insert = function (newValue, target) {
        var newNode = new Node(newValue);
        var current = this.find(target);
        newNode.next = current.next;
        current.next = newNode;
    }
    SinglyLinkedList.prototype.display = function () {
        var currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
            console.log(currentNode.dataStore);
        }
    }
    return SinglyLinkedList;
})();
module.exports = SinglyLinkedList;
