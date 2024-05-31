const form = document.getElementById ("form");
console.log (form);

const firstName = document.getElementById ("fname");
const lastName = document.getElementById ("lname");
const OrderNumber = document.getElementById ("Order-Number") 
const Email = document.getElementById ("Email");
const message = document.getElementById ("message");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(OrderNumber.value);
    console.log(Email.value);
    console.log(message); 
    let h1 = document.createElement ("h1");
    h1.innerText = `Thank you, ${firstName.value} ${lastName.value} ${OrderNumber.value} ${Email.value} ${message}
    message.appendChild = (h1);
