var Person = function (name, age) {
    this.name = name;
    this.age = age;

    var other = "bpb";
    var that = this;

    function gettinOlder() {
        other = "alice";
        that.age++;

        return {other: other, age: that.age};
    }

    console.log(gettinOlder());
}

Person.getOlder = function () {
    this.age++;
}

var person = new Person("bob", 25);

person.getOlder();

console.log(Person);
