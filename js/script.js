
// Floating button toggle 

document.addEventListener("DOMContentLoaded", () => { 
    const btn = document.getElementById("contact-btn"); 
    const card = document.getElementById("contact-card"); 
    btn.addEventListener("click", () => { 
        card.classList.toggle("show"); 
    }); 
});

// For theme dark or light
(function () {
  const KEY = 'theme';
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const stored = localStorage.getItem(KEY);
  const devicePreferedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const current = stored || (devicePreferedTheme ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', current);
  btn.setAttribute('aria-pressed', current === 'dark');
  btn.textContent = current === 'dark' ? '☀️' : '🌑';

  btn.addEventListener('click', () => {
    const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', now);
    localStorage.setItem(KEY, now);
    btn.setAttribute('aria-pressed', now === 'dark');
    btn.textContent = now === 'dark' ? '☀️' : '🌑';
  });
})();



document.querySelectorAll('.toggle-details').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    details.classList.toggle('active');

    
    if (details.classList.contains('active')) {
      button.textContent = '▲ Hide details';
    } else {
      button.textContent = '▼ More details';
    }
  });
});

// Search bar filter
(function () {
  const input = document.getElementById('project-search');
  if (!input) return;

  const projects = Array.from(document.querySelectorAll('#projects .project'));
  const emptyMsg = document.getElementById('projects-empty');

  const filter = (q) => {
    const query = q.trim().toLowerCase();
    let visibleCount = 0;

    projects.forEach(card => {

      const titleEl = card.querySelector('.project-left h3');

      const title = (titleEl?.textContent || '').toLowerCase();

      const match = title.startsWith(query)

      card.classList.toggle('is-hidden', !match);
      if (match) visibleCount++;
    });

    if (emptyMsg) emptyMsg.hidden = visibleCount !== 0;
  };

  input.addEventListener('input', (e) => filter(e.target.value));

  filter(input.value || '');
})();

// Greeting message with name and time of day using local storage

(function () {
  const nameInput= document.getElementById('name-input');
  const saveBtn= document.getElementById('save-name');
  const editBtn= document.getElementById('edit-name');
  const greetingMsg= document.getElementById('greeting-message');
  const KEY = 'username';

  if (!greetingMsg) return;

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }

  function render(name) {
    greetingMsg.textContent = `${getGreeting()}${name ? ', ' + name : ''}!`;
  }

  const saved = localStorage.getItem(KEY);
  render(saved || '');
  if (saved) {
    if (nameInput) nameInput.style.display = 'none';
    if (saveBtn)   saveBtn.style.display = 'none';
    if (editBtn)   editBtn.hidden = false;
  }

  saveBtn?.addEventListener('click', () => {
    const v = (nameInput?.value || '').trim();
    if (!v) { alert('Please enter your name first!'); return; }
    localStorage.setItem(KEY, v);
    render(v);
    if (nameInput) nameInput.style.display = 'none';
    if (saveBtn) saveBtn.style.display = 'none';
    if (editBtn) editBtn.hidden = false;
  });

  editBtn?.addEventListener('click', () => {
    const v = localStorage.getItem(KEY) || '';
    if (nameInput) {
      nameInput.value = v;
      nameInput.style.display = '';
      nameInput.focus();
    }
    if (saveBtn) saveBtn.style.display = '';
    editBtn.hidden = true;
  });
})();
