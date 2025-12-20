document.addEventListener('DOMContentLoaded', () => {
  const styleCards = document.querySelectorAll('.style-card');

  styleCards.forEach(card => {
    card.addEventListener('click', () => {
      const style = card.dataset.style;
      localStorage.setItem('style', style);
      window.location.href = 'style.html';
    });
  });
});
