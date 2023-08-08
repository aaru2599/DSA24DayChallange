// To check wheather property exist or not in object

let propertyCheck=(input,word)=>{

if(!input.hasOwnProperty(word)){
    return false
}
return true
}
 let obj1={name:"Arvind",age:23,city:"CWA"}
 let key="name"
 console.log(propertyCheck(obj1,key));
 console.log(propertyCheck(obj1,"number"));