document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const senha = document.getElementById('senha');
    const toggleSenha = document.getElementById('toggle-senha');

    if (toggleSenha && senha) {
        toggleSenha.addEventListener('click', () => {
            const mostrar = senha.type === 'password';
            senha.type = mostrar ? 'text' : 'password';
            toggleSenha.textContent = mostrar ? '🙈' : '👁';
            toggleSenha.setAttribute(
                'aria-label',
                mostrar ? 'Ocultar senha' : 'Mostrar senha'
            );
            toggleSenha.setAttribute(
                'aria-pressed',
                mostrar ? 'true' : 'false'
            );
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const usuario = document.getElementById('usuario')?.value.trim() || '';
            const senhaValor = document.getElementById('senha')?.value || '';
            const unidade = document.getElementById('unidade')?.value.trim() || '';
            const errorText = document.getElementById('error-text');

            if (!usuario || !senhaValor || !unidade) {
                mostrarErroLogin('Preencha todos os campos.');
                return;
            }

            if (loginError) loginError.style.display = 'none';

            mostrarErroLogin(
                'O login não está disponível nesta versão hospedada.'
            );

            function mostrarErroLogin(mensagem) {
                if (loginError) loginError.style.display = 'block';
                if (errorText) errorText.textContent = mensagem;
            }
        });
    }
});
