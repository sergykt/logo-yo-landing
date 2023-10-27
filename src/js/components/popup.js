const offerButtons = document.querySelectorAll('.offer__button');
const popupEl = document.querySelector('.popup');
const popupForm = document.querySelector('#popup-form');
const closeButton = document.querySelector('.form__close-button');

const onClick = () => {
  if (popupEl.classList.contains('popup_active')) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
  popupEl.classList.toggle('popup_active');
};

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

document.body.addEventListener('click', (e) => {
  if (popupEl.classList.contains('popup_active')) {
    document.body.style.overflow = 'auto';
    popupEl.classList.toggle('popup_active');
  }
});

