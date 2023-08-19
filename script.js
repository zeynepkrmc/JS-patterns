// 1-) Global variable naming conflicts
//script.js
//var name= 'name1';

//app.js
//var name = 'name2';
//console.log(name);

// 2-) Encapsulation
var Counter = {
    number:0,
    increment : function(){
        return ++this.number;
    },
    decrement : function(){
        return --this.number;
    }
}
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
Counter.number = 10;
console.log(Counter.increment());

//IIFE immadiately invoked function expressions

(function(){
    var name = 'name1';
    console.log(name);
})();

(function(){
    var name = 'name2';
    console.log(name);
})();

(function(){
    //private members
    let number = 0;
    return {
        //public members
    }
})();


