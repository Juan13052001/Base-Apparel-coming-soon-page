const form = document.querySelector("form");
const button = document.querySelector(".submit");
const texto = document.querySelector("input[name=email]");
const icon = document.querySelector(".icon-error");
const textError = document.querySelector(".error");

form.addEventListener("submit", (e) => {
    const RegEmail = /^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;
    e.preventDefault();
    const email = texto.value;
    console.log(email);
    if (email == "" || email === undefined) {
        icon.classList.add("hidden");
        textError.innerHTML = "Please provide a valid email";
    } else {
        icon.classList.remove("hidden");
        textError.style.display = "none";
    }
});
