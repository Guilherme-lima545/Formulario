const form = document.getElementById("form");
const username = document.getElementById("nome");
const idade = document.getElementById("idade");
const mensagem = document.getElementById("mensagem");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkform(); 
})

idade.addEventListener("blur", () => {
    checkInputIdade ();
})

username.addEventListener("blur", () => {
    checkInputUsername ();
})

mensagem.addEventListener("blur", () => {
    checkInputMensagem ();
})

function checkInputUsername () {
    const usernameValue = username.value

    if(usernameValue === "") {
        errorInput(username, "Coloque seu nome!")

    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputIdade (){
    const idadeValue = idade.value;

    if(idadeValue === ""){
    errorInput(idade, "a idade é obrigatoria")} else {
        const formItem = idade.parentElement;
        formItem.className = "form-content"
    }
} 

function checkInputMensagem (){
    const mensagemValue = mensagem.value;

    if(mensagemValue === ""){
    errorInput(mensagem, "deixe sua mensagem por favor.")} else {
        const formItem = mensagem.parentElement;
        formItem.className = "form-content"
    }
} 

function checkform () {
    checkInputUsername ();
    checkInputIdade ();
    checkInputMensagem ();

    const formItems = form.querySelectorAll (".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    });

    if (isValid) {
        alert ("Mensagem enviada, ela será totalmente anonima, obrigado.")
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message

    formItem.className = "form-content error"

}


const handleSubmit = (event) => {
    event.preventDefault(); 

    const nome = document.querySelector("input[name=nome]").value;
    const idade = document.querySelector("input[name=idade]").value;
    const mensagem = document.querySelector("input[name=mensagem]").value;

    fetch("https://api.sheetmonkey.io/form/2mZxpBUtNt1VHSZHSoanaS", {
        method: "post",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome,  idade, mensagem }),
    });
}

document.querySelector("form").addEventListener("submit", handleSubmit);