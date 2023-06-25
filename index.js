const form = document.querySelector("#form")
const login = document.querySelector("#login")
const senha = document.querySelector("#senha")

form.addEventListener("submit", (Event) => {
        Event.preventDefault();


        if (passwordInput.value === "") {
                alert("Por favor, preencha o seu login");
                return;
        }

        form.submit();
});