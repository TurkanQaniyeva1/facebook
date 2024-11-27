let form = document.getElementById("form2");
let email = document.getElementById("email");
let password = document.getElementById("password");
form.addEventListener("submit", getform)
function getform(e){
    e.preventDefault();
    let personData ={
        email: email.value,
        password: password.value
    }
    console.log(personData);
    form.reset
}
