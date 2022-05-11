class Customer {
    constructor(firstName, lastName, dob) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._dob = dob;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get dob() {
        return this._dob;
    }
    set dob(value) {
        this._dob = value;
    }
}
var customerObj = new Customer("Parameswari", "Bala", new Date(1970, 12, 2));
console.log("First Name", customerObj.firstName);
console.log("Last Name", customerObj.lastName);
