// instance variable when class is launch variable are created are called instance variable


// this.localprop is launched when needed
// this is useful when we create multiple instace but not need all variable all time.
// localprop is only created when obj1.addsomeprop is called.
var Foo = function(name) {
    this.name = name,
    // this.a = 10; cannot create instance variable or oblect level variable outside any method
    this.doSomething = function() {
        console.log('name');
    }
	this.addsomeprop = function() {
    	this.loacalprop = 'loacalprop'// isdaa instance create nahi hovegga
	}
}
var obj1 = new Foo('Name');
// obj1.addsomeprop();// to create instance of addsomeprops
console.log(obj1.a);


