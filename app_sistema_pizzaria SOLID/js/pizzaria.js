import UsuarioService from './usuario-service';

class Pizzaria {
  constructor(usuarioService) {
    this.usuarioService = usuarioService;
  }

  listarUsuarios() {
    return this.usuarioService.listarUsuarios();
  }
}

export default Pizzaria;