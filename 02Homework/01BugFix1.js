/**
 * Created by User on 10.5.2015 ã..
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
        fullname: function () {
            return this._firstName + this._lastName;
        },
        calcPerimeter: function () {
            return 2 * this._width + 2 * this._height;
        }
    };

    return Person;
}());





var peter;
peter = new Person("Peter", "Jackson");
console.log(peter.fullName());
console.log(peter.firstName);
console.log(peter.lastName);

