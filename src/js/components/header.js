const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger');
const header = document.querySelector('.header');
const burgerMenuBody = document.querySelector('.burger__body');

const isActive = () => burgerMenu.classList.contains('burger_active');

const onClick = () => {
  if (isActive()) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }

  burgerButton.classList.toggle('burger-button_active');
  burgerMenu.classList.toggle('burger_active');
}

burgerButton.addEventListener('click', (e) => {
  e.stopPropagation();
  onClick();
});

header.addEventListener('click', (e) => {
  if (isActive()) {
    document.body.style.overflow = 'auto';
    burgerButton.classList.toggle('burger-button_active');
    burgerMenu.classList.toggle('burger_active');
  }
});

burgerMenuBody.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target !== burgerMenuBody) {
    onClick();
  }
});
