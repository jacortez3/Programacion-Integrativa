const filterButtons = document.querySelectorAll('.filter-button');
const images = document.querySelectorAll('.image');
const filter = button.getAttribute('data-filter');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    images.forEach((image) => {
        if (filter === 'all' || image.classList.contains(filter)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
  });
});