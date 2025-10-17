

document.addEventListener('DOMContentLoaded', () => {
  initTeam();
  initForms();
});

const teamMembers = [
  { id:1, name:'Alice Miller', position:'CEO', project:'Castec Platform', img:'assets/team1.jpg' },
  { id:2, name:'Luis Perez', position:'CTO', project:'Product Architecture', img:'assets/team2.jpg' },
  { id:3, name:'Mina Gomez', position:'Designer', project:'Branding', img:'assets/team3.jpg' },
  { id:4, name:'Tom Brown', position:'Developer', project:'NoCode Integrations', img:'assets/team4.jpg' },
  { id:5, name:'Nora White', position:'PM', project:'Venture Builder', img:'assets/team5.jpg' },
  { id:6, name:'Sam Lee', position:'Engineer', project:'Mobile', img:'assets/team6.jpg' }
];

function initTeam(){
  const grid = document.getElementById('team-grid');
  if(!grid) return;

  const itemsToShow = window.innerWidth < 600 ? 4 : teamMembers.length;

  const html = teamMembers
    .slice(0, itemsToShow)
    .map(member => {
      return `
      <article class="team-card" data-id="${member.id}">
        <img loading="lazy" src="${member.img}" alt="${member.name}">
        <div class="team-info">
          <strong>${member.name}</strong>
          <div>${member.position}</div>
          <div style="font-size:.9em;color:#555">${member.project}</div>
        </div>
      </article>
      `;
    }).join('');

  grid.innerHTML = html;

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.team-card');
    if(!card) return;
    const id = Number(card.dataset.id);
    const mem = teamMembers.find(m => m.id === id);
    if(mem){
      showMemberDialog(mem);
    }
  });
}

function showMemberDialog(member){
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.setAttribute('role','dialog');
  modal.innerHTML = `
    <div class="modal-inner" role="document" tabindex="-1" style="background:#fff;padding:20px;border-radius:8px;max-width:400px;margin:60px auto;border:1px solid #ccc;">
      <h3>${member.name}</h3>
      <p><strong>${member.position}</strong></p>
      <p>${member.project}</p>
      <p><button id="closeModal" class="btn">Close</button></p>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('closeModal').focus();
  modal.addEventListener('click', (ev) => {
    if(ev.target === modal) modal.remove();
  });
  document.getElementById('closeModal').addEventListener('click', () => modal.remove());
}

function initForms(){
  const forms = document.querySelectorAll('form[id^="contactForm"]');
  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
    const saved = localStorage.getItem('castec_last_message');
    if(saved){
      try{
        const data = JSON.parse(saved);
        if(data && form.querySelector('[name="fullName"]')) {
          form.querySelector('[name="fullName"]').value = data.fullName || '';
          form.querySelector('[name="company"]').value = data.company || '';
          form.querySelector('[name="message"]').value = data.message || '';
        }
      }catch(e){}
    }
  });
}

function handleFormSubmit(e){
  e.preventDefault();
  const form = e.target;
  const fullName = form.querySelector('[name="fullName"]').value.trim();
  const company = form.querySelector('[name="company"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();

  if(!fullName || !message){
    alert('Please complete required fields: Full Name and Message.');
    return;
  }

  const payload = { fullName, company, message, date: new Date().toISOString() };
  const existing = JSON.parse(localStorage.getItem('castec_messages') || '[]');
  existing.push(payload);
  localStorage.setItem('castec_messages', JSON.stringify(existing));

  localStorage.setItem('castec_last_message', JSON.stringify(payload));

  showToast(`Thanks ${fullName.split(' ')[0]} — your message was saved.`);

  form.querySelector('[name="message"]').value = '';
}

function showToast(text){
  let t = document.getElementById('site-toast');
  if(!t){
    t = document.createElement('div');
    t.id = 'site-toast';
    t.style = "position:fixed;right:20px;bottom:20px;background:#111;color:#fff;padding:10px 14px;border-radius:8px;z-index:999";
    document.body.appendChild(t);
  }
  t.textContent = text;
  setTimeout(()=>{ t.remove(); }, 3500);
}
