document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');

    // Aplica o tema salvo no localStorage, se existir
    if (savedTheme) {
        document.body.classList.toggle('light-mode', savedTheme === 'light');
        themeToggle.checked = savedTheme === 'light'; // Ajusta o estado do toggle
        document.querySelector('.sidebar').classList.toggle('light-mode', savedTheme === 'light'); // Ajusta a sidebar
    }

    // Adiciona um evento de clique para alternar o tema
    themeToggle.addEventListener('change', function () {
        console.log('Tema mudado:', themeToggle.checked); // Para debug
        if (themeToggle.checked) {
            document.body.classList.add('light-mode'); // Ativa o modo claro
            document.querySelector('.sidebar').classList.add('light-mode'); // Ajusta a sidebar
            localStorage.setItem('theme', 'light');    // Salva a preferência no localStorage
        } else {
            document.body.classList.remove('light-mode'); // Volta para o modo escuro
            document.querySelector('.sidebar').classList.remove('light-mode'); // Ajusta a sidebar
            localStorage.setItem('theme', 'dark');        // Salva a preferência no localStorage
        }
    });

    // Função para redirecionar para a página ADM
    const adminModeToggle = document.getElementById('adminModeToggle');
    adminModeToggle.addEventListener('change', function () {
        if (adminModeToggle.checked) {
            window.location.href = 'admin.html'; // URL correta
        }
    });
});
