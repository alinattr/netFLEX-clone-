const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});
function checkInputs() {
    // функция трим задана для того, чтобы убрать пространство
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank, Andrew!');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email, Andrew... How come?');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank, Andrew!!');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formAction = input.parentElement;
    const small = formAction.querySelector('small');
    formAction.className = 'form-action error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formAction = input.parentElement;
    formAction.className = 'form-action success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//FAQ

