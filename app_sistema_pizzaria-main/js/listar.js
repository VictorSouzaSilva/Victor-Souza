// Função para listar os usuários
async function listarUsuarios() {
    // ...
  }
  
  // Função para editar usuário
  async function editarUsuario(userId) {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8000/api/user/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const usuario = data.usuario;
  
      document.getElementById('userId').value = userId;  // Corrigido
      document.getElementById('nome').value = usuario.name;
      document.getElementById('email').value = usuario.email;
  
      const editarModal = new bootstrap.Modal(document.getElementById('editarUsuarioModal'));
      editarModal.show();
    } catch (error) {
      console.error('Erro ao editar o usuário:', error);
    }
  }
  
  // Função para atualizar usuário
  async function atualizarUsuario() {
    const token = localStorage.getItem('token');
    const userId = document.getElementById('userId').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
  
    try {
      const response = await fetch(`http://localhost:8000/api/user/${userId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nome, email: email }),
      });
      const data = await response.json();
  
      if (data.status === 200) {
        alert('Usuário atualizado com sucesso!');
        listarUsuarios(); // Recarregar a lista de usuários
      } else {
        alert('Erro ao atualizar o usuário.');
      }
    } catch (error) {
      console.error('Erro ao atualizar o usuário:', error);
    }
  }
  
  // Adicionar evento de clique para editar usuário
  document.querySelectorAll('.editar-usuario').forEach(button => {
    button.addEventListener('click', function() {
      const userId = this.getAttribute('data-id');
      editarUsuario(userId);
    });
  });
  