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


const getApi = () => {
    try{
        axios.get("https://655f2b37879575426b44b8f7.mockapi.io/person")
        .then((response) => {
            console.log(response.data)
        })
    }catch(e){
        console.log(error)
    }
}


let register = document.getElementById("form2");
register.addEventListener("submit", async function (e) {
    e.preventDefault();
    let userData = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };
    try {
        let response = await axios.post("https://655f2b37879575426b44b8f7.mockapi.io/person", userData);
        console.log("İstifadəçi uğurla yaradıldı:", response.data);
        alert("İstifadəçi uğurla yaradıldı!");
        register.reset();
    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }
});
