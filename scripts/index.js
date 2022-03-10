//Форма регистрации
const headerButton = document.querySelector('.header__button')
const footerButton = document.querySelector('.footer__button');
const buttonEscKey = 27;
// Находим поля формы в DOM
const formInput = document.querySelector('form[name="form-info"]');
const nameInput = formInput.querySelector('input[name="name"]');
const emailInput = formInput.querySelector('input[name="email"]');
const submitButton = document.querySelector('.popup__submit')
const popupRegistration = document.querySelector('.popup');

//Функция открытия popup
headerButton.addEventListener('click', registrationPopup);
footerButton.addEventListener('click', registrationPopup);

function registrationPopup () {
    // Очищаем форму
    nameInput.value = '';
    emailInput.value = '';
    // Открываем popup
    openPopup(popupRegistration)
}
// Универсальная функция открытия всех popup
function openPopup(popupRegistration) {
    popupRegistration.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscUp);
}

//Функция на esc
const handleEscUp = (evt) => {
    if (evt.keyCode === buttonEscKey) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
};

// Универсальная функция закрытия всех popup
function closePopup(popupRegistration) {
    popupRegistration.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscUp);
}

formInput.addEventListener('submit', sendFormRegistration);

function sendFormRegistration(evt) {
    evt.preventDefault()

    console.log(nameInput.value)
    console.log(emailInput.value)

    //submitButton.textContent = 'Выйти';
    //submitButton.style.width = '108px';
    evt.stopPropagation();
}

//Функция закрытия popup (закрытие происходит сразу после нажатия, а смены названий кнопок зарегистрироваться на/выход нет)
submitButton.addEventListener('click', ()=> closePopup(popupRegistration));





