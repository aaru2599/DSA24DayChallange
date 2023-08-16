
const p = [
    {
      id: 1,
      name: "John Doe",
      city: "New York",
      state: "New York",
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      city: "Los Angeles",
      state: "California",
      isActive: false,
    },
    {
      id: 3,
      name: "Michael Johnson",
      city: "Chicago",
      state: "Illinois",
      isActive: true,
    },
    {
      id: 4,
      name: "Emily Brown",
      city: "Houston",
      state: "Texas",
      isActive: true,
    },
  ];


  const findIsActive=p.map((input)=>({
    ...input,
    isActive:input.isActive?"Available":"NotAvailable"

   }

  ))
//   console.log(...input);
//   const findIsActive=p.map((input)=>{
//     if(input.isActive==true){
//         return {
//             id:input.id,
//             name:input.name,
//             city:input.city,
//             state:input.state,
//             isActive:"available"
//         };
//     }
    
//         return{
            
//                 id:input.id,
//                 name:input.name,
//                 city:input.city,
//                 state:input.state,
//                 isActive:"notAvailable"
          
        
//     }
//   })
  console.log(findIsActive);
  