

// const add=(x,y)=>{
//    return new  Promise((resolve)=>{
//         resolve(x+y);
//     })

// };

// function sqrt(a){
//     console.log(a*a);
// }

// const main=async()=>{
//     const sum =await add(4,5);
//     sqrt(sum)
// }

// main()



function add(x,y){
    return new Promise((res,rej)=>{
    if(x<2){
        res(x+y)
    }
    else{
        rej("x is not less than 2")
    }
});

    }

function sqrt(a){
   console.log(a*a);
 }

 const main=async()=>{
     const sum = await add(4,5);
    sqrt(sum)
 }
 main()
