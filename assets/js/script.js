// Atelier — Week Project Settimana VI


// === Toggle dark/light ===

const toggles = document.querySelectorAll('.btn-theme');

toggles.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggles.forEach(b => b.textContent = isDark ? '☀️' : '🌙');
  });
});


// === Sezione Lavori ===

const lavori = [
  { titolo: 'Villa Serena',      anno: 2023, categoria: 'Residenziale' },
  { titolo: 'Loft Milano',       anno: 2022, categoria: 'Interior design' },
  { titolo: 'Studio Legale',     anno: 2024, categoria: 'Interior design' },
  { titolo: 'Casa Collina',      anno: 2023, categoria: 'Residenziale' },
  { titolo: 'Palazzo Storico',   anno: 2021, categoria: 'Ristrutturazione' },
  { titolo: 'Appartamento Mare', anno: 2024, categoria: 'Ristrutturazione' },
];

function renderLavori(filtro = 'tutti') {
  const grid = document.getElementById('lavoriGrid');
  grid.replaceChildren();

  const filtrati = filtro === 'tutti' ? lavori : lavori.filter(l => l.categoria === filtro);

  filtrati.forEach(l => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-4';

    const card = document.createElement('div');
    card.className = 'card-lavoro';

    const img = document.createElement('div');
    img.className = 'card-lavoro__img';

    const body = document.createElement('div');
    body.className = 'card-lavoro__body';

    const cat = document.createElement('span');
    cat.className = 'card-lavoro__cat';
    cat.textContent = l.categoria;

    const titolo = document.createElement('h3');
    titolo.className = 'card-lavoro__titolo';
    titolo.textContent = l.titolo;

    const anno = document.createElement('p');
    anno.className = 'card-lavoro__anno';
    anno.textContent = l.anno;

    body.appendChild(cat);
    body.appendChild(titolo);
    body.appendChild(anno);
    card.appendChild(img);
    card.appendChild(body);
    col.appendChild(card);
    grid.appendChild(col);
  });
}

renderLavori();

document.getElementById('filtri').addEventListener('click', e => {
  if (!e.target.matches('.btn-filtro')) return;
  document.querySelectorAll('.btn-filtro').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderLavori(e.target.dataset.filter);
});


// === Validazione form ===

document.getElementById('btnInvia').addEventListener('click', () => {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const messaggio = document.getElementById('messaggio').value.trim();
  const alertBox = document.getElementById('formAlert');

  alertBox.replaceChildren();

  const div = document.createElement('div');
  div.setAttribute('role', 'alert');

  if (!nome || !email.includes('@') || messaggio.length < 20) {
    div.className = 'alert alert-danger';
    div.textContent = 'Controlla i campi: tutti obbligatori, email non valida o messaggio troppo corto (minimo 20 caratteri).';
  } else {
    div.className = 'alert alert-success';
    div.textContent = 'Messaggio inviato! Ti risponderemo entro 48 ore.';

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('tipo').selectedIndex = 0;
    document.getElementById('messaggio').value = '';
  }

  alertBox.appendChild(div);
});