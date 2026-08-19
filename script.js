const themeToggleBtn = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const loginForm = document.getElementById('loginForm');


const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;


function updateIcons(isDark) {
    if (isDark) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}

// Initial Theme Check
if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
    updateIcons(true);
} else {
    document.documentElement.classList.remove('dark');
    updateIcons(false);
}

// Toggle Theme Event
themeToggleBtn.addEventListener('click', () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    
    if (isDarkMode) {
        localStorage.setItem('theme', 'dark');
        updateIcons(true);
    } else {
        localStorage.setItem('theme', 'light');
        updateIcons(false);
    }
});

// Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Signing in with ${email}`);
});