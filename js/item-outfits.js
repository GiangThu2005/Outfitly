document.addEventListener('DOMContentLoaded', () => {
  const item = localStorage.getItem('item');

  const itemImg = document.getElementById('item-image');
  const itemName = document.getElementById('item-name');
  const grid = document.getElementById('item-outfit-grid');
  const backBtn = document.getElementById('backbtn');

  const ITEM_LABELS = {
    shirt: 'Áo thun đen',
    boot: 'Bốt đỏ',
    sweater: 'Áo len sọc',
    jacket: 'Áo khoác jean',
    legging: 'Quần legging đen',
    bag: 'Túi xách nâu'
  };

  if (!item || !itemImg || !grid) return;

  /* ===== STATE LIKE (THEO ẢNH OUTFIT) ===== */
  const likedSet = new Set();

  /* ===== FEATURED ITEM ===== */
  itemImg.src = `assets/items/${item}.png`;
  itemName.textContent = ITEM_LABELS[item] || item;

  const TOTAL = 4;
  const BASE_PATH = 'assets/outfits/';

  grid.innerHTML = '';

  /* ===== RENDER GRID ===== */
  for (let i = 1; i <= TOTAL; i++) {
    const card = document.createElement('div');
    card.className = 'outfit-card';

    const img = document.createElement('img');
    img.src = `${BASE_PATH}item-${item}-${i}.png`;
    img.alt = 'Outfit';

    /* ❤️ HEART (CHỈ Ở GRID) */
    const heart = document.createElement('button');
    heart.className = 'heart-btn';
    updateHeart(heart, img.src);

    heart.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLike(img.src);
      updateHeart(heart, img.src);
    });

    /* 🔁 CLICK CARD → SWAP VỚI FEATURED */
    card.addEventListener('click', () => {
      itemImg.src = img.src;
      // sau swap → cập nhật lại tim cho card
      updateHeart(heart, img.src);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    card.appendChild(img);
    card.appendChild(heart);
    grid.appendChild(card);
  }

  /* 🔙 BACK */
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      localStorage.setItem('activeTab', 'trend');
      window.location.href = 'index.html';
    });
  }

  /* ===== FUNCTIONS ===== */

  function toggleLike(src) {
    if (likedSet.has(src)) {
      likedSet.delete(src);
    } else {
      likedSet.add(src);
    }
  }

  function updateHeart(heart, src) {
    if (likedSet.has(src)) {
      heart.classList.add('active');
      heart.innerHTML = '♥';
    } else {
      heart.classList.remove('active');
      heart.innerHTML = '♡';
    }
  }
});
