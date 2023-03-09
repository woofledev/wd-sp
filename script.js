const search = document.getElementById('search');
const cards = document.querySelector('.cardcontainer');
const card = cards.querySelectorAll('.card');

if(new URLSearchParams(window.location.search).get('q')) {
  search.value=new URLSearchParams(window.location.search).get('q')
}
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
