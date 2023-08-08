// To delete the property of an object
let delProperty=(input,property)=>{
delete input[property]
return input
}
let obj={name:"Arvind",age:23,city:"CWA"}
let deleteProperty="age";
console.log(delProperty(obj,deleteProperty));