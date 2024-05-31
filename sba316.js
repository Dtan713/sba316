const form = document.getElementById ("form");
console.log (form);

const firstName = document.getElementById ("fname");
const lastName = document.getElementById ("lname"); 
const Email = document.getElementById ("Email");


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(Email.value);
})