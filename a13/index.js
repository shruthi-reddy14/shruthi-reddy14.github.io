const products=[
 {id:1,name:"p1",price:35,status:"pending",qty:2},
{id:2,name:"p2",price:30,status:"pending",qty:5},
 {id:3,name:"p3",price:40,status:"pending",qty:3}
 ];

//  let newPrice = products.map((v)=>({...v,price:v.price+5,status:"complete",total:v.qty*v.price}));

let newPrice=products.filter((v)=>v.qty >2).map((v)=>({...v,total:v.qty*v.price}))
newPrice.forEach((ele)=>console.log(ele.status+" "+ele.price+" "+ele.qty+" "+ele.total))




 







