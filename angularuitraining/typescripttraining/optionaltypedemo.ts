//primitive data types
let firstName:string;
let lastName:string;
let dob:Date;
let active:boolean;
enum Gender{MALE,FEMALE,TRANSGENDER}
let gender:Gender;
let skillSet:string[];
let addressObj:any;
firstName="Parameswari";
lastName="Bala";
dob=new Date(1970,12,2);
active=true;
gender=Gender.FEMALE;
skillSet=["c#","java","js","Angular"];
console.log("FirstName",firstName);
console.log("LastName",lastName);
console.log("DOB",dob);
console.log("Active",active);
console.log("Gender",Gender[gender]);
skillSet.forEach(skill=>{
    console.log(skill);
})

addressObj={
    "doorNo":274576,
    "streetName":"Rajaji st",
    "city":"chennai",
    "state":"Tamilnadu"
}
console.log(addressObj);



