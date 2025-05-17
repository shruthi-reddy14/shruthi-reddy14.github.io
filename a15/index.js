const products=[
 {id:1,name:"p1",price:35},
{id:2,name:"p2",price:30},
{id:3,name:"p3",price:40}
 ];


 const cart={1:7,3:5}

 products.map(value=>{
  cart[value.id] && (
  console.log(value.id,value.name,value.price,value.price*cart[value.id])
  )
 })