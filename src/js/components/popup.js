const offerButtons = document.querySelectorAll('.offer__button');
const headerButton = document.querySelector('.header__button');
const burgerButton = document.querySelector('.burger-button');
const burgerPopupButton = document.querySelector('.burger__button');
const burgerMenu = document.querySelector('.burger');
const popupEl = document.querySelector('.popup');
const popupForm = document.querySelector('#popup-form');
const closeButton = document.querySelector('.form__close-button');
const inputEl = document.querySelector('#popup-name');

const onClick = () => {
  if (popupEl.classList.contains('popup_active')) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
    inputEl.focus();
  }
  popupEl.classList.toggle('popup_active');
};

headerButton.addEventListener('click', (e) => {
  e.stopPropagation();
  onClick();
});

burgerPopupButton.addEventListener('click', (e) => {
  e.stopPropagation();
  onClick();
  burgerButton.classList.toggle('burger-button_active');
  burgerMenu.classList.toggle('burger_active');
});

offerButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    onClick();
  });
});

closeButton.addEventListener('click', (e) => {
  e.stopPropagation();
  onClick();
});

popupForm.addEventListener('click', (e) => {
  e.stopPropagation();
});

popupEl.addEventListener('click', (e) => {
  e.stopPropagation();
  onClick();
});
