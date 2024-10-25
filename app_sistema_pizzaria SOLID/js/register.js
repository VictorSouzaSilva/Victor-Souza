document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirmation = document.getElementById('password_confirmation').value;

    if (password !== passwordConfirmation) {
        document.getElementById('mensagem').innerText = 'As senhas não coincidem';
        return;
    }

    // Lógica para registrar o usuário
    const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    if (response.ok) {
        window.location.href = 'login.html';  // Redireciona para a página de login
    } else {
        document.getElementById('mensagem').innerText = 'Erro ao registrar';
    }
});