// write you're code here
import faker from "faker";
import  {EmployeeI} from "./Interfaces/Employee";

import {Company} from "./Company";
import {Employee} from "./Employee";
let  Bgate: Employee;
let Sjobs: Employee;
let microsoft=new Company("Microsoft","www.github.com",Bgate,"usa",2345);
let apple=new Company("Apple","www.apple.com",Sjobs,"usa",1245);
Bgate=new Employee("Bill","Gate","bGate@microsoft.com","0645673411",microsoft,"il est le createur");
Sjobs=new Employee("Steves","Jobs","sJobs@apple.com","+44234567",apple,"il est le createur");
console.log(microsoft+" "+apple);

var company1=document.querySelector("select");
var option=document.createElement("OPTION");
 company1.appendChild(option);
 option.innerHTML=microsoft.name;
var option=document.createElement("OPTION");
 company1.appendChild(option);
 option.innerHTML=apple.name;
var app= document.getElementById("app");
for (let i = 0; i < faker.random.number({'min': 10, 'max': 10}); i++) {
    let clients: Employee[]=[];
    const company = new Company(faker.company.companyName(),  faker.internet.url(), Bgate,faker.address.city(),parseInt(faker.address.zipCode()));
 	app.innerHTML+=company+"<br>";
 	var option=document.createElement("OPTION");
 	company1.appendChild(option);
 	option.innerHTML=company.name;

 }
app.innerHTML+=microsoft+"<br> "+apple+"<br> "+Bgate+"<br> "+Sjobs;
var form=document.querySelector("form");
form.addEventListener("submit",function (){
app.innerHTML+= "<br>"+form.firstname.value+" "+form.lastname.value+" "+form.email.value+" "+form.phone.value+" "+form.company.value+" "+form.description.value;

})
var form1=document.getElementById("form1");
form1.addEventListener("submit",function (){
	app.innerHTML+="<br>"+(<HTMLInputElement>document.getElementById("name1")).value+" "+(<HTMLInputElement>document.getElementById("website")).value+" "+(<HTMLInputElement>document.getElementById("region")).value+(<HTMLInputElement>document.getElementById("zipCode")).value;
	var option=document.createElement("OPTION");
 	company1.appendChild(option);
 	option.innerHTML=(<HTMLInputElement>document.getElementById("name1")).value;
})