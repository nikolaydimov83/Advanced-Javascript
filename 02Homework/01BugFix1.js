/**
 * Created by User on 10.5.2015 ã..
 */

var Person = (function () {
    function Person(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    Person.prototype = {
        fullName: function () {
            return this._firstName +" "+ this._lastName;
        },
        firstName: function () {
            return this._firstName;
        },
        lastName: function () {
            return this._lastName;
        }
    };

    return Person;
}());



var peter;
peter = new Person("Peter", "Jackson");

console.log(peter.fullName());
console.log(peter.firstName());
console.log(peter.lastName());

