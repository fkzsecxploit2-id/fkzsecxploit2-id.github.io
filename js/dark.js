const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode', darkModeToggle.checked);
});

