const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const passwordConfirmation = document.getElementById("password confirmation");

form.addEventListener("submit", (event) => {
    checkForm();
})

function checkInputUsername(){
    const usernameValue =  username.value;

    if (usernameValue == ""){
        errorInput(username, "Preencha um username!")
    }else{
        const formItem = username.parentElement;
        formItem.classList = "form content"
    }
}

function checkInputEmail(){
    const emailValue =  email.value;

    if (emailValue == ""){
        errorInput(email, "Preencha um email!")
    }else{
        const formItem = email.parentElement;
        formItem.classList = "form content"
    }
}

function checkInputPassword(){
    const passwordValue =  password.value;

    if (passwordValue == ""){
        errorInput(password, "Preencha uma senha!")
    }else{
        const formItem = password.parentElement;
        formItem.classList = "form content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordConfirmationValue =  passwordConfirmation.value;
    const passwordValue = password.value;

    if (passwordConfirmationValue == ""){
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória!")
    }else if(passwordConfirmationValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas não são iguais.")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.classList = "form content"
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();
  
    const formItems = form.querySelectorAll("form-content")
  
    const isValid = [...formItems].every( (item) => {
      return item.className === "form-content"
    });
  
    if(isValid){
      alert("Cadastrado com sucesso!")
    }
  
  }

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}