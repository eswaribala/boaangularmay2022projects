//function void return type
function aggregateScore(scores) {
    var sum = 0;
    scores.forEach(function (score) {
        sum = sum + score;
    });
    console.log(sum);
}
aggregateScore([45, 67, 89, 90, 78]);
//spread or rest operator
//default operator
function resourceInfoToObject(name, age, country) {
    if (country === void 0) { country = "India"; }
    var skillSet = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        skillSet[_i - 3] = arguments[_i];
    }
    var resource = {
        "Name": name,
        "Age": age,
        "SkillSet": skillSet,
        "Country": country
    };
    return resource;
}
console.log(resourceInfoToObject("Parameswari", 52));
console.log(resourceInfoToObject("Nisha", 21, "Singapore", "C#", "Java"));
console.log(resourceInfoToObject("Anupam", 21));
