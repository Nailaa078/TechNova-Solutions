// ----- Mobile menu -----
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');

function setMenu(open) {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.querySelector('i').className = open ? 'fas fa-xmark' : 'fas fa-bars';
}

if (toggle && menu) {
    toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 768) setMenu(false); });
}

// ----- Sign-up form (front end only) -----
const form = document.getElementById('signup-form');
const msg = document.getElementById('signup-msg');

if (form && msg) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.username.value.trim();
        const email = form.email.value.trim();

        if (!name) {
            msg.textContent = 'Please enter your name.';
            form.username.focus();
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            msg.textContent = 'Please enter a valid email address.';
            form.email.focus();
            return;
        }
        // TODO: send { name, email } to your backend or a form service here.
        msg.textContent = `Thanks, ${name}! We will be in touch soon.`;
        form.reset();
    });
}
