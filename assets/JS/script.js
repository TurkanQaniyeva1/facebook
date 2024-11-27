let form = document.getElementById("form2");
let name = document.getElementById("name");
let surname = document.getElementById("surname");
let email = document.getElementById("email");
let password = document.getElementById("password");
form.addEventListener("submit", getform)
function getform(e){
    e.preventDefault();
    let personData ={
        name: name.value,
        surname: surname.value,
        email: email.value,
        password: password.value
    }
    console.log(personData);
    form.reset
}
