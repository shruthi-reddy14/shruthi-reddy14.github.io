// const customers = [
//   { card: "1234567890", pin: "1234", name: "John", balance: 0 },
//   { card: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
// ];


// const atm = () => {
//     const ca=document.getElementById("p1").value;
//         const pi=document.getElementById("p2").value;

//         const customer=customers.find(c=>c.card===ca && c.pin===pi)
//       if(customer){
//         console.log("Hey"+customer.name)}
//         else{console.log("invalid")}
//     };


const customers = [
  { card: "1234567890", pin: "1234", name: "John", balance: 0 },
  { card: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];

const atm = () => {
  const card = document.getElementById("p1").value;
  const pin = document.getElementById("p2").value;

  const customer = customers.find(c => c.card === card && c.pin === pin);

  if (customer) {
    console.log("Hey " + customer.name);
  } else {
    console.log("Invalid card or PIN");
  }
};
