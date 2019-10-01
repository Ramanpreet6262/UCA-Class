// hello world
function hello(){
    console.log('hello world');
}

hello();

//hoisting of variables

/*var a = 25;
if(true){
    var a = 35;
    console.log(a);
}
console.log(a);*/

let a = 25;
if(true){
    let a = 35;
    console.log(a);
}
console.log(a);

// So 'let' has local scope while 'var' has global scope

// Hoisting is if we have declared the function after calling it, then the declaration will move up
// close to where function was called first.


//FUNCTIONS

function abc(a, b, c){
    console.log(a + " " + b + " " + c);
}
abc(10, 20, 30);

function func(a, b, c = 30){
    console.log(a + " " + b + " " + c);
}
func(10, 20);

/*function fun(a, b){
    console.log(a + " " + b + " " + c);
}
fun(10, 20, 30);*/ // This will give error as c is not defined.

function rest(...a){
    console.log(a);
    console.log(a.length);
}
rest(10, 20, 30);
// Rest operator it will merge various elements into an array

var hi = function hello(){
    console.log('hello');
}
hi();
// Anonymous function

var kiddan = (a=30, b=50) => {
    console.log(a+b);
}
kiddan(); //Arrow functions

var ohwow = value => {
    console.log(value/2);
}
ohwow(70); // Arrow function with single argument