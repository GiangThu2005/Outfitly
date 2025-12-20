document.addEventListener('DOMContentLoaded', () => {
  const occasion = localStorage.getItem('occasion');
  const weather = localStorage.getItem('weather');

  const featuredImage = document.getElementById('featured-image');
  const grid = document.getElementById('outfit-grid');
  const createBtn = document.getElementById('create-outfit-btn');

  if (!occasion || !weather || !grid || !featuredImage) return;

  const BASE_PATH = 'assets/outfits/';
  const TOTAL_OUTFITS = 8; // tổng số ảnh có cho mỗi occasion+weather
  const GRID_COUNT = 4;   // số outfit hiển thị

  // ===== RANDOM INDEX =====
  function getRandomIndexes(count, max) {
    const indexes = new Set();
    while (indexes.size < count) {
      const n = Math.floor(Math.random() * max) + 1;
      indexes.add(n);
    }
    return Array.from(indexes);
  }

  // ===== RENDER OUTFITS =====
  function renderOutfits() {
    const indexes = getRandomIndexes(GRID_COUNT + 1, TOTAL_OUTFITS);

    // featured
    featuredImage.src = `${BASE_PATH}${occasion}-${weather}-${indexes[0]}.png`;

    // grid
    grid.innerHTML = '';
    indexes.slice(1).forEach(i => {
      const card = document.createElement('div');
      card.className = 'outfit-card';

      const img = document.createElement('img');
      img.src = `${BASE_PATH}${occasion}-${weather}-${i}.png`;
      img.alt = 'Outfit';

      // CLICK CARD → SWAP VỚI FEATURED
      card.addEventListener('click', () => {
        const tempSrc = featuredImage.src;

        featuredImage.src = img.src;
        img.src = tempSrc;

        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      card.appendChild(img);
      grid.appendChild(card);
    });
  }

  // ===== LOAD LẦN ĐẦU =====
  renderOutfits();

  // ===== TẠO OUTFIT MỚI =====
  createBtn.addEventListener('click', () => {
    renderOutfits();
  });
});
