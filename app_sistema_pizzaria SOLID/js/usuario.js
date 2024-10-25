class Usuario {
    constructor(nome, email) {
      this.nome = nome;
      this.email = email;
    }
  
    verificarPermissao() {
      throw new Error('Método deve ser implementado');
    }
  }
  
  class Administrador extends Usuario {
    constructor(nome, email, permissao) {
      super(nome, email);
      this.permissao = permissao;
    }
  
    verificarPermissao() {
      // lógica para verificar permissão do administrador
    }
  }
  
  export default Usuario;