const search = document.getElementById('search');
const cards = document.querySelector('.cardcontainer');
const card = cards.querySelectorAll('.card');

search.addEventListener('input', function() {
  const searchval = this.value.toLowerCase();

  card.forEach(e => {
    if (e.querySelector('h1').innerText.toLowerCase().includes(searchval) || e.querySelector('p').innerText.toLowerCase().includes(searchval)) {
      e.style.display = 'flex';
    } else {
      e.style.display = 'none';
    }
  });
});
