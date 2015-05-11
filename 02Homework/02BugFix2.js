/**
 * Created by User on 11.5.2015 ã..
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
        },
        setFirstName: function setFirstName (firstName) {
            this._firstName=firstName;
        },
        setLastName: function setLastName (lastName) {
            this._lastName=lastName;
        },
        setFullName: function (firstName, lastName) {
            this._firstName=firstName;
            this._lastName=lastName;
        }
    };

    return Person;
}());

var peter;
peter = new Person("Peter", "Jackson");

console.log(peter.fullName());
console.log(peter.firstName());
console.log(peter.lastName());
console.log("======================");

peter.setFullName("Angel","Viktorov");

console.log(peter.fullName());
console.log(peter.firstName());
console.log(peter.lastName());
console.log("======================");
peter.setFirstName("Nikolay");

console.log(peter.fullName());
console.log(peter.firstName());
console.log(peter.lastName());
console.log("======================");

peter.setLastName("Dimov");
console.log(peter.fullName());
console.log(peter.firstName());
console.log(peter.lastName());