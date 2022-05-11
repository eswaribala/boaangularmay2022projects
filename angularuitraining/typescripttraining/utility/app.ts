import {Customer} from "../models/Customer";

var customerObj=new Customer("Parameswari","Bala",
    new Date(1970,12,2));
console.log("First Name",customerObj.firstName);
console.log("Last Name",customerObj.lastName);
