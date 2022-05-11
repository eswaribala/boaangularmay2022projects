//primitive data types
var firstName;
var lastName;
var dob;
var active;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["TRANSGENDER"] = 2] = "TRANSGENDER";
})(Gender || (Gender = {}));
var gender;
var skillSet;
var addressObj;
firstName = "Parameswari";
lastName = "Bala";
dob = new Date(1970, 12, 2);
active = true;
gender = Gender.FEMALE;
skillSet = ["c#", "java", "js", "Angular"];
console.log("FirstName", firstName);
console.log("LastName", lastName);
console.log("DOB", dob);
console.log("Active", active);
console.log("Gender", Gender[gender]);
skillSet.forEach(function (skill) {
    console.log(skill);
});
addressObj = {
    "doorNo": 274576,
    "streetName": "Rajaji st",
    "city": "chennai",
    "state": "Tamilnadu"
};
console.log(addressObj);
function aggregateScore(scores) {
    var sum = 0;
    scores.forEach(function (score) {
        sum = sum + score;
    });
    console.log(sum);
}
aggregateScore([45, 67, 89, 90, 78]);
