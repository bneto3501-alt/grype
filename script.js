// Funcionalidade do Dark Mode
const btnDarkMode = document.getElementById('btnDarkMode');

if (btnDarkMode) {
  btnDarkMode.addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-bs-theme', newTheme);
    btnDarkMode.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
}

// Validação visual do formulário no padrão Bootstrap
const form = document.getElementById('formContato');
if (form) {
  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert('Mensagem enviada com sucesso para a equipe Grype!');
      form.reset();
      form.classList.remove('was-validated');
      return;
    }
    form.classList.add('was-validated');
  }, false);
}