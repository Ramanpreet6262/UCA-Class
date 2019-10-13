var foo = function(name) {
    this.name = name,
    this.method = fooMethod
}

var fooMethod = {
    dosmoething: function() {
        console.log('do something')
    },
    domore() {
        console.log('do more')
    }
}

var obj1 = new foo("some Name");
obj1.method.dosmoething();
