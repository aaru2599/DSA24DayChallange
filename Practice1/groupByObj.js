/* const users = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" }
];

// Output:
// {
//   admin: [{...}, {...}],
//   user: [{...}]
// } */

const groupByObject = (users) => {
  const grouped = {};
  for (let user of users) {
    grouped[user.role] = grouped[user.role] || [];
    grouped[user.role].push(user);
  }
  console.log(grouped);
};
// const users = [
//   { name: "A", role: "admin" },
//   { name: "B", role: "user" },
//   { name: "C", role: "admin" },
// ];
// // console.log(groupByObject(users));

const nums = [1, 2, 3, 4, 5, 6];

// Output:
// {
//   odd: [1,3,5],
//   even: [2,4,6]
// }

const groupByNum = (num) => {
  // const grouped={odd:[],even:[]};
  const grouped = {};

  for (let elem of num) {
    // if(elem%2!==0){
    //     grouped.odd.push(elem)
    // }else{
    //      grouped.even.push(elem)
    // }
    const key = elem % 2 === 0 ? "even" : "odd";

    grouped[key] = grouped[key] || [];
    grouped[key].push(elem);
  }
  return grouped;
};
// console.log(groupByNum(nums));

const words = ["apple", "banana", "avocado", "blueberry"];

// Output:
// {
//   a: ["apple", "avocado"],
//   b: ["banana", "blueberry"]
// }

const groupedByStartingWord = (words) => {
  const grouped = {};
  for (let word of words) {
    grouped[word[0]] = grouped[word[0]] || [];
    grouped[word[0]].push(word);
  }
  return grouped;
};
// console.log(groupedByStartingWord(words));
const products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Phone", category: "Electronics" },
];

const groupByCategory = (products) => {
  const grouped = {};
  for (let product of products) {
    grouped[product.category] = grouped[product.category] || [];
    grouped[product.category].push(product);
  }
  return grouped;
};
// console.log(groupByCategory(products));

const votes = ["A", "B", "A", "C", "B", "A"];

// Output:
// {
//   A: 3,
//   B: 2,
//   C: 1
// }

const groupedByChar=(votes)=>{
const grouped={};
for(let vote of votes){
    grouped[vote]=(grouped[vote]||0)+1
    
}
return grouped
}

// console.log(groupedByChar(votes));

const orders = [
  { category: "food", amount: 100 },
  { category: "food", amount: 200 },
  { category: "tech", amount: 500 }
];

// Output:
// {
//   food: 300,
//   tech: 500
// }
const groupByOrders=(orders)=>{
const grouped={};
for(let order of orders){
    grouped[order.category]=(grouped[order.category]||0)+order.amount
    
}
return grouped
}
// console.log(groupByOrders(orders));

const users = [
  { name: "A", country: "India", role: "admin" },
  { name: "B", country: "India", role: "user" },
  { name: "C", country: "US", role: "admin" }
];

// Output:
// {
//   India: {
//     admin: [...],
//     user: [...]
//   },
//   US: {
//     admin: [...]
//   }
// }
const groupByCountry=(users)=>{
const grouped={};
// for(let user of users){

//     const {country,name,role}=user
//     grouped[country]=grouped[country]||{}
//       grouped[country][role]=grouped[country][role]||[]
//         grouped[country][role].push(JSON.stringify(user))
// }
return users.reduce((acc,curr)=>{
const {country,role} =curr
acc[country]??={};
acc[country][role]??=[]
acc[country][role].push(curr)
return acc
},{})
// return grouped
}
// console.log(groupByCountry(users));

const logs = [
  { msg: "error", date: "2026-04-01" },
  { msg: "success", date: "2026-04-01" },
  { msg: "error", date: "2026-04-02" }
];
const groupByDate=(logs)=>{
const grouped={};
// for(let log of logs){
//     grouped[log.date]=grouped[log.date]||[];
// grouped[log.date].push(log)
// }
return logs.reduce((acc,log)=>{
const {msg,date}=log
acc[date]=acc[date]||[]
acc[date].push({msg,date})
return acc
},{})
// return grouped
}
// console.log(groupByDate(logs));



const students = [
  { name: "A", class: "10", marks: 80 },
  { name: "B", class: "10", marks: 90 },
  { name: "C", class: "9", marks: 85 }
];

// Output:
// {
//   "10": { name: "B", marks: 90 },
//   "9": { name: "C", marks: 85 }
// }
const groupByMarks=(students)=>{
const result={};
for(let student of students){
    // grouped[student.class]=grouped[student.class]||[];
    // grouped[student.class].push(student)

    const {marks,name,class:cls} = student;
    console.log({marks,name,cls});
    if(!result[cls]|| marks>result[cls].marks){
        result[cls]={name,marks}
    }
    

}
return result
}
// console.log(groupByMarks(students));




const data = [
  { country: "India", city: "Delhi", value: 10 },
  { country: "India", city: "Mumbai", value: 20 },
  { country: "US", city: "NY", value: 30 }
];



const groupBy=(datas,keys)=>{
const grouped={};

// console.log(keys);
for(let key of keys){
  console.log(key);
  for(let data of datas){
    grouped[data[key]]= grouped[data[key]]||[]
    grouped[data[key]].push(data)
  }
}


return grouped
}
console.log(groupBy(data, ["country", "city"]));







