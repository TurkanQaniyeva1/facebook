
let urlParams = new URLSearchParams(window.location.search);
let name = urlParams.get('name');
let surname = urlParams.get('surname');


if (name && surname) {
    document.getElementById("welcome").innerHTML = `Xoş gəldiniz, ${name} ${surname}!`;
} else {
    document.getElementById("welcome").innerHTML = "Xoş gəldiniz!";
}
