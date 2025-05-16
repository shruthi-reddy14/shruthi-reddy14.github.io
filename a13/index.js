const products=[
  {id:1,name:"p1",price:35},
{id:2,name:"p2",price:30},
{id:3,name:"p3",price:40}
];

let newPrice = products.map((v)=>v.price+5)
 products.forEach((ele)=>console.log(ele.name+" "+newPrice))










