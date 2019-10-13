// blocking mode and synchronous mode in callback function
// obj are send by refrence
// transpiler convert ES6 code to core javacode
// classes were add in ES6
//  


class student {
    constructor(name) {
      this.name = name;
    }
    
    addpropt() {
      this.value = name;
    }
    showproperties() {
      console.log(`this vales are : ${this.name}`);
    }
}
var x = new student('some Name');


// AT backend class are converted into functions.
// In ES6 classes were introduced for simplicity.

/*
"use strict";

var student =
function () {
  function student(name) {
    this.name = name;
  }

  var _proto = student.prototype;
  // _proto is naming convrtion for local variable

  _proto.addpropt = function addpropt() {
    this, value = name;
  };

  _proto.showproperties = function showproperties() {
    console, log("this vales are : " + this.name);
  };

  return student;
}();
// self invoking function () at last of function
var x = new student('some Name');
*/
,