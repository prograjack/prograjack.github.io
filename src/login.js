const login = document.getElementById("login");
const loginid = document.getElementById("name")
const loggedin = document.getElementById("loggedin");
const logButton = document.querySelector("button");

const savednames = localStorage.getItem("username")

if (savednames === null) {
    login.classList.toggle("hidden")
} else {
    loggedin.classList.toggle("hidden")
    document.getElementById("named").innerHTML = savednames;
}

function logging() {
    login.classList.toggle("hidden")
    loggedin.classList.toggle("hidden")
    const named = loginid.value;
    document.getElementById("named").innerHTML = named;
    localStorage.setItem("username", named)
}




logButton.addEventListener("click", logging)

