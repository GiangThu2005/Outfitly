document.addEventListener('DOMContentLoaded', () => {
  const occasionEl = document.querySelector('.occasion-text');
  const weatherEl = document.querySelector('.weather-text');

  if (!occasionEl || !weatherEl) return;

  const occasion = localStorage.getItem('occasion');
  const weather = localStorage.getItem('weather');

  const OCCASION_LABELS = {
    school: 'ĐI HỌC',
    work: 'ĐI LÀM',
    date: 'HẸN HÒ',
    sport: 'TẬP LUYỆN',
    home: 'Ở NHÀ',
    street: 'DẠO PHỐ'
  };

  const WEATHER_LABELS = {
    sunny: 'NẮNG',
    rainy: 'MƯA',
    cold: 'LẠNH'
  };

  if (occasion && OCCASION_LABELS[occasion]) {
    occasionEl.textContent = OCCASION_LABELS[occasion];
  }

  if (weather && WEATHER_LABELS[weather]) {
    weatherEl.textContent = WEATHER_LABELS[weather];
  }

});
