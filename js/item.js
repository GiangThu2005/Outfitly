document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item-card');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const key = item.dataset.item;
      localStorage.setItem('item', key);
      window.location.href = 'item.html';
    });
  });
});
