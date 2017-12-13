var Stack = (function () {
    function Stack() {
        this.dataStore = [];
        this.top = 0;
    }
    Stack.prototype.push = function (item) {
        this.dataStore.push(item);
        this.top = this.dataStore.length - 1;
    }
    
    Stack.prototype.pop = function () {
        this.dataStore.pop();
        this.top = this.dataStore.length - 1; 
    }
    Stack.prototype.display = function () {
        this.dataStore.forEach(function(item){
            console.log(item);
        });
        console.log("Top is now " + this.dataStore[this.top]);    
    }
    return Stack;
})();
module.exports = Stack;