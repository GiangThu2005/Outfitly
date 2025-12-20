document.addEventListener('DOMContentLoaded', () => {
  const style = localStorage.getItem('style');
  const title = document.getElementById('style-title');
  const grid = document.getElementById('style-outfit-grid');
  const featuredImg = document.getElementById('featured-image');
  const featuredHeart = document.querySelector('.featured-heart');

  if (!style || !grid || !featuredImg || !featuredHeart) return;

  title.textContent = `Phong cách ${style.toUpperCase()}`;

  const BASE_PATH = 'assets/outfits/';
  const TOTAL = 5;

  /* ===== STATE ===== */
  const likedSet = new Set();

  grid.innerHTML = '';

  /* ===== FEATURED MẶC ĐỊNH ===== */
  featuredImg.src = `${BASE_PATH}style-${style}-1.png`;
  updateFeaturedHeart();

  /* ❤️ CLICK TIM FEATURED */
  featuredHeart.addEventListener('click', () => {
    toggleLike(featuredImg.src);
  });

  /* ===== RENDER GRID ===== */
  for (let i = 2; i <= TOTAL; i++) {
    const card = document.createElement('div');
    card.className = 'outfit-card';

    const img = document.createElement('img');
    img.src = `${BASE_PATH}style-${style}-${i}.png`;
    img.alt = 'Outfit';

    const heart = document.createElement('button');
    heart.className = 'heart-btn';

    updateCardHeart(heart, img.src);

    /* ❤️ CLICK TIM CARD */
    heart.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLike(img.src);
    });

    /* 🔁 CLICK CARD → SWAP VỚI FEATURED */
    card.addEventListener('click', () => {
      const tempSrc = featuredImg.src;

      featuredImg.src = img.src;
      img.src = tempSrc;

      updateFeaturedHeart();
      syncAllCardHearts();

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    card.appendChild(img);
    card.appendChild(heart);
    grid.appendChild(card);
  }

  /* ===== FUNCTIONS ===== */

  function toggleLike(src) {
    if (likedSet.has(src)) {
      likedSet.delete(src);
    } else {
      likedSet.add(src);
    }
    updateFeaturedHeart();
    syncAllCardHearts();
  }

  function updateFeaturedHeart() {
    if (likedSet.has(featuredImg.src)) {
      featuredHeart.classList.add('active');
      featuredHeart.innerHTML = '♥';
    } else {
      featuredHeart.classList.remove('active');
      featuredHeart.innerHTML = '♡';
    }
  }

  function updateCardHeart(heart, src) {
    if (likedSet.has(src)) {
      heart.classList.add('active');
      heart.innerHTML = '♥';
    } else {
      heart.classList.remove('active');
      heart.innerHTML = '♡';
    }
  }

  function syncAllCardHearts() {
    const cards = document.querySelectorAll('.outfit-card');
    cards.forEach(card => {
      const img = card.querySelector('img');
      const heart = card.querySelector('.heart-btn');
      updateCardHeart(heart, img.src);
    });
  }
});
