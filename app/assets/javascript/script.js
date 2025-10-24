const burger = document.querySelector('.burger-menu__header__button');
const sidebar = document.querySelector('.burger-menu__nav');

burger.addEventListener('click', () => {
  sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if (!burger-menu.contains(e.target) && !burger-menu__button.contains(e.target)) {
    sidebar.style.display = 'none';
  }
});

const burgerMenuHeader = document.querySelector('.burger-menu__header');
if (burgerMenuHeader) {
  const height = burgerMenuHeader.offsetHeight;
  document.documentElement.style.setProperty('--burger-menu__header__height', `${height - 40}px`);
}
