// Função para aplicar o modo escuro
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
}

// Função para desativar o modo escuro
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'disabled');
}

// Verificar o estado atual do modo escuro no carregamento da página
document.addEventListener('DOMContentLoaded', function() {
  const storedDarkMode = localStorage.getItem('darkMode');

  if (storedDarkMode === 'enabled') {
    enableDarkMode();
    document.getElementById('dark-mode-toggle').classList.add('fa-sun');
  } else {
    disableDarkMode();
    document.getElementById('dark-mode-toggle').classList.add('fa-moon');
  }
});

// Adicione um evento para detectar a mudança de modo claro/escuro
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  const body = document.body;
  
  const darkModeEnabled = body.classList.contains('dark-mode');

  if (!darkModeEnabled) {
    this.classList.remove('fa-moon');
    this.classList.add('fa-sun');
  } else {
    this.classList.remove('fa-sun');
    this.classList.add('fa-moon');
  }

  // Após mudar a classe, verifique novamente o modo escuro
  if (darkModeEnabled) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
