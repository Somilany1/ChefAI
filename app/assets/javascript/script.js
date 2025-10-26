const burger = document.querySelector('.burger-menu__header__button');
const sidebar = document.querySelector('.burger-menu__nav');
const header = document.querySelector('header');

// Function to handle underline logic
function updateUnderline() {
  const isScrolled = window.scrollY > 0;
  const sidebarVisible = sidebar.style.display === 'block';

  // Remove all underlines first
  header.style.borderBottom = 'none';
  sidebar.style.borderBottom = 'none';

  // Add underline based on scroll and menu state
  if (isScrolled) {
    if (sidebarVisible) {
      sidebar.style.borderBottom = '1px solid lightgray';
    } else {
      header.style.borderBottom = '1px solid lightgray';
    }
  }
}

burger.addEventListener('click', () => {
  sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
  updateUnderline(); // Update underline when menu toggles
});

document.addEventListener('click', (e) => {
  if (!header.contains(e.target) && !sidebar.contains(e.target)) {
    sidebar.style.display = 'none';
    updateUnderline(); // Update underline when menu closes
  }
});

window.addEventListener('scroll', () => {
  updateUnderline(); // Update underline when scrolling
});