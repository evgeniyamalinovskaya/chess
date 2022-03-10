//Форма регистрации

const headerButton = document.querySelector('.header__button')
const footerButton = document.querySelector('.footer__button');

// Находим поля формы в DOM
const formInput = document.querySelector('form[name="form-info"]');
const nameInput = formInput.querySelector('input[name="name"]');
const emailInput = formInput.querySelector('input[name="email"]');
const submitButton = document.querySelector('.popup__submit')
const popupRegistration = document.querySelector('.popup');

//Функция открытия popup
headerButton.addEventListener('click', () => openPopup(popupRegistration));
footerButton.addEventListener('click', () => openPopup(popupRegistration));

// Универсальная функция открытия всех popup
function openPopup(popupRegistration) {
    popupRegistration.classList.add('popup_opened');
}

// Универсальная функция закрытия всех popup
function closePopup(popupRegistration) {
    popupRegistration.classList.remove('popup_opened');
}
formInput.addEventListener('submit', sendFormRegistration);

function sendFormRegistration(evt) {
    evt.preventDefault()

    console.log(nameInput.value)
    console.log(emailInput.value)

    submitButton.textContent = 'Выйти';
    submitButton.style.width = '108px';
    evt.stopPropagation();
}

//Функция закрытия popup (закрытие происходит сразу после нажатия, а смены названий кнопок зарегистрироваться на/выход нет)
submitButton.addEventListener('click', ()=> closePopup(popupRegistration));


// Инициализиуем Swiper
// new Swiper ('.team__container', {
//     pagination: {
//         el:'.swiper-pagination',
//         clickable:true,
//     },
// });




