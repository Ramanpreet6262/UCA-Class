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

