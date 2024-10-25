import Pizzaria from './pizzaria';
import UsuarioService from './usuario-service';

const pizzaria = new Pizzaria(new UsuarioService());

async function listarUsuarios() {
  try {
    const usuarios = await pizzaria.listarUsuarios();
    // lógica para listar usuários
  } catch (error) {
    console.error('Erro ao listar os usuários:', error);
  }
}