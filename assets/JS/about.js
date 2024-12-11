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



let loginForm = document.getElementById("form2");


loginForm.addEventListener("submit", async function (e) {

    e.preventDefault();
    
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    try {
        let response = await axios.get("https://655f2b37879575426b44b8f7.mockapi.io/person");
        let users = response.data;

        let user = users.find((person) => person.email === email && person.password === password);

        if (user) {

            console.log("Daxil olan istifadəçi:", user);
            window.location.href = `../../assets/pages/welcome.html?name=${user.name}&surname=${user.surname}`;

        } else {
            alert("E-poçt və ya şifrə yalnışdır!");
        }
    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }
});
