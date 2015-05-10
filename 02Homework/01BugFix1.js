/**
 * Created by User on 10.5.2015 �..
 */

/*function Person(firstName, lastName) {
    var self = this;
    self.firstName = firstName;
    self.lastName = lastName;
    self.fullName()
    //this.fullName=firstName+" "+lastName
    //return {name: this.firstName + " " + this.lastName, firstName:this.firstName,lastName:this.lastName};
    Person.prototype = {
        firstName: function () {
            return this.firstName;
        },
        lastName: function () {
            return this.lastName;
        },
        fullName: function () {
            return self.firstName+" "+self.lastName;
        }
    };

}*/

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
