// Importing them with same name as in external file
// import {a, b, c} from './external';

// console.log(a + " " + b() + " " + c.name);

// ----------------------------------------------------------

// Importing with different names
// import {a as x, b as y, c as z} from './external';

// console.log(x + " " + y() + " " + z.name);

// -------------------------------------------------------------

// Default export working....
// As default exports works for 1 variable, so we will import one variable

import a from './external';
console.log(a);







// Promises

// 4 methods

/*
1. Callback
2. Named func
3. Promises
4. Async Await
*/

// This is asynchronous code....
console.log("Before");
console.log(func());
console.log('After');

function func(){
    setTimeout(() => {},2000);
}

// first undefined will be printed and later on 'hi' when set timeout finishes.....


// 1. Callback
console.log("Before");
console.log(func1((x)=> {console.log(x)}));
console.log('After');

function func1(callback){
    setTimeout(() => {callback('hello kiddan')},2000);
}
