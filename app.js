const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    //мы задаем событие, что при клике форма никуда не отправится, для этого мы используем метод preventDefault - действие по умолчанию выполняться не будет.
    // далее мы вызываем функцию, которая проверит корректность введенных данных.
    checkInputs();
});
function checkInputs() {
    //это мы сделаем с помощью свойства value - таким образом, мы cможем получить данные из полей ввода,
    // которые мы используем (email, password). еще будем использовать свойсво trim, которое уберет все лишнее пространство из инпута. далее мы задаем условия через
    // if/else.
    // функция трим задана для того, чтобы убрать пространство (whitespace)
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    //

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }
    //если данные из поля ввода email пустые (' '), появится ошибка. ( === - оператор идентичности.)
    // мы говорим, что при таком развитии событий активируется вот функция setErrorFor, для которой в скобках мы таргетим нужный нам импут и прописываем
    // текст сообщения-ошибки.
    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }
}
    //когда мы задаем функцию setErrorFor, мы обращаемся к родительскому элементу (DOM-cтруктура, вот она) тега инпут в html (div form-action).
    // также, для того, чтобы cообщение об ошибке также было задействовано, мы обращаемся через querySelector к тегу,
    // который будем использовать для отображения сообщения об ошибке - тег small в данном случае.

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
    // еще задаем функцию для валидации поля email
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// Обращаемся к селектору через метод querySelectorAll(), который возвращает список элементов в пределах документа
//1 способ
// через метод forEach() выполняем переданную функцию один раз для каждого элемента в массиве
//добавляем к селектору событие, в котором указываем, что при клике с помощью метода classList.toggle задаем интерактивность выпадающего списка,
// добавив в скобках класс active из css,
// в котором мы указали через элемент трасформация поворот элемента на заданный угол относительно точки трансформации.



const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})


// 2 cпособ
// const faq = document.getElementsByClassName("faq");
// let i;
//
// for (i = 0; i < faq.length; i++) {
//     faq[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//       });
// }




// // 3 cпособ
// let faq = document.querySelectorAll(".faq");
// faq.forEach((event) => {
//     event.addEventListener("click", () => {
//         if (event.classList.contains("active")) {
//             event.classList.remove("active");
//         } else {
//             event.classList.add("active");
//         }
//     });
// });


//4 cпособ

document.addEventListener('click',function(e){
    if(e.target && e.target.classList.contains('faq')){

        e.target && e.target.classList.toggle("active");
        e.target.classList.add('active');

    }

});

