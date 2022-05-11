export class Customer{
    private _firstName:string;
    private _lastName:string;
    private _dob:Date;

    constructor(firstName: string, lastName: string, dob: Date) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._dob = dob;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get dob(): Date {
        return this._dob;
    }

    set dob(value: Date) {
        this._dob = value;
    }
}


