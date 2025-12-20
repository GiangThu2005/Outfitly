document.addEventListener('DOMContentLoaded', () => {
  const occasionCards = document.querySelectorAll('.occasion-card');

  occasionCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault(); //

      const occasion = card.dataset.occasion;
      const weather = localStorage.getItem('weather');

      if (!weather) {
        alert('Vui lòng chọn thời tiết trước');
        return;
      }

      localStorage.setItem('occasion', occasion);

      window.location.href = 'suggest.html';
    });
  });
});
