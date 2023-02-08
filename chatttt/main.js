const filters = document.querySelector('.filters');
filters.addEventListener('change', function(event) {
  const value = event.target.value;
  const carouselItems = document.querySelectorAll('.carousel-item');
  carouselItems.forEach(function(item) {
    if (item.classList.contains(value)) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });
});
