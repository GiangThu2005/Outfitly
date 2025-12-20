document.addEventListener('DOMContentLoaded', () => {
  localStorage.removeItem('weather');
  const chips = document.querySelectorAll('.chip');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      localStorage.setItem('weather', chip.dataset.weather);
    });
  });
});
