let employee1 = {
    name: "Ahmed",
    age: 27,
    jopTitle: "developer",
    isManager: false,
    address:{
        country: "Egypt",
        city: "Cairo"
    },
    skills:["Html", "Css", "Js", "Bootstrab"],
    salary:[4500,5500,8000]

};

let employee2 = {
    name: "Samy",
    age: 24,
    jopTitle: "developer",
    isManager: false,
    address:{
        country: "Egypt",
        city: "Tanta"
    },
    skills:["python", "Java", "C", "Git Hub"],
    salary:[3500,5500,6000]
};

let employee3 = {
    name: "Ramy",
    age: 30,
    jopTitle: "developer",
    isManager: true,
    address:{
        country: "Egypt",
        city: "Port Said"
    },
    skills:["php", "C#", "Js", "Java"],
    salary:[8000,8500,9000]
};

let allEmployees = [employee1, employee2, employee3];
let average1 = (allEmployees[0].salary[0] + allEmployees[0].salary[1] + allEmployees[0].salary[2])/(allEmployees[0].salary.length);
let average2 = (allEmployees[1].salary[0] + allEmployees[1].salary[1] + allEmployees[1].salary[2])/(allEmployees[1].salary.length);
let average3 = (allEmployees[2].salary[0] + allEmployees[2].salary[1] + allEmployees[2].salary[2])/(allEmployees[2].salary.length);
let totalSalary = allEmployees[0].salary[0] + allEmployees[0].salary[1] + allEmployees[0].salary[2] + allEmployees[1].salary[0] +allEmployees[1].salary[1] +allEmployees[1].salary[2] + allEmployees[2].salary[0] + allEmployees[2].salary[1] + allEmployees[2].salary[2];

// 1st 
console.log("Name: " + allEmployees[0].name + " :" );
console.log("Jop: " + allEmployees[0].jopTitle);
console.log("isManager? --> " + allEmployees[0].isManager);
console.log("Num of Skils: " + allEmployees[0].skills.length);
console.log("average: " + average1);
console.log("the sum for 2Ms: " + (allEmployees[0].salary[0] + allEmployees[0].salary[1]));

console.log("=============================================================================");
// 2nd
console.log( "Name: " + allEmployees[1].name + " :");
console.log("Jop: " + allEmployees[1].jopTitle);
console.log("isManager? --> " + allEmployees[1].isManager);
console.log("Num of Skils: " + allEmployees[1].skills.length);
console.log("average: " + average2);

console.log("=============================================================================");
// 3rd
console.log( "Name: " + allEmployees[2].name + " :");
console.log("Jop: " + allEmployees[2].jopTitle);
console.log("isManager? --> " + allEmployees[2].isManager);
console.log("Num of Skils: " + allEmployees[2].skills.length);
console.log("average: " + average3);

console.log("=============================================================================");

console.log("Total Company Salary: " + totalSalary )

console.log("=============================================================================");

console.log("typeOf name: " + typeof allEmployees[0].name);
console.log("typeOf age: " + typeof allEmployees[0].age);
console.log("typeOf JopTitle: " + typeof allEmployees[0].jopTitle);
console.log("typeOf isManager: " + typeof allEmployees[0].isManager);
console.log("typeOf address: " + typeof allEmployees[0].address);
console.log("typeOf skills: " + typeof allEmployees[0].skills);
console.log("typeOf salary: " + typeof allEmployees[0].salary);

console.log("=============================================================================");

for(let i = 0; i < 3; i++)
{
    console.log("Hi, My Name Is " + allEmployees[i].name
     + " And I Am " +  allEmployees[i].age 
     + " Years Old I Work As A " + allEmployees[i].jopTitle 
     + " My Salary Is " + allEmployees[i].salary[i] 
     + " I Live In " + allEmployees[i].address.city + " - " + allEmployees[i].address.country 
     + " And I Am A Manager " + allEmployees[i].isManager 
     + " My Skills Are " + allEmployees[i].skills.length + '.')                  
}

