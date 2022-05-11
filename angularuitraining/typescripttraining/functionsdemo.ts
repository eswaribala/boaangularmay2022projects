//function void return type
function aggregateScore(scores:number[]):void{
    let sum=0;
    scores.forEach(score=>{
        sum=sum+score;
    })
    console.log(sum);

}

aggregateScore([45,67,89,90,78]);

//spread or rest operator
//default operator
function resourceInfoToObject(name:string,age:number,country="India",...skillSet):object{
    let resource={
        "Name":name,
        "Age":age,
        "SkillSet":skillSet,
        "Country":country
    }
    return resource;

}

console.log(resourceInfoToObject("Parameswari",52));
console.log(resourceInfoToObject("Nisha",21,"Singapore","C#","Java"));
console.log(resourceInfoToObject("Anupam",21));
