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

// Callbacks
// concept eh hai ki ikk di output(andar walle di) bahar walle lai input hai .... okok .... 

// Definitions of func2, func3, func4
function func2(callback){
    setTimeout(() => {callback({id: 1, name: 'abc'})},2000);
};

function func3(x, callback){
    setTimeout(() => {
        console.log(x);
        callback([4,5,6]);
    },2000);
}

function func4(y, callback){
    setTimeout(() => {
        console.log(y);
        callback(6);
    },2000);
}

// Calling of callback functions
// func2((x) => {
//     func3(x.id, (y) => {
//         func4(y[0], (z) => {
//             console.log(z);
//         });
//     });
// });


// 2. Named Function
// By this we will reduce callback functions i.e. function inside function and so on.....

// New calling with named functions

func2(dfunc3);

function dfunc3(x){
    func3(x.id, dfunc4);
}

function dfunc4(y){
    func4(y[0], display);
}

function display(z){
    console.log(z);
}


//3. Promises
// Promise is a new class and it has 2 parts resolve which is handled by .then and reject which is handled by .catch

let p = new Promise((resolve, reject) => {
    resolve('hello promise');
})

p.then((x) => {console.log(x)});

// .then matlab if this promise gets resolved then .then will be executed