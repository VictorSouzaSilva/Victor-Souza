class PizzaStrategy {
    static getStrategy(tipo) {
      const strategies = {
        vegetariana: new VegetarianaStrategy(),
        carnivora: new CarnivoraStrategy(),
      };
      return strategies[tipo];
    }
  }
  
  class VegetarianaStrategy {
    aplicar() {
      // lógica para pizza vegetariana
    }
  }
  
  class CarnivoraStrategy {
    aplicar() {
      // lógica para pizza carnivora
    }
  }
  
  export default PizzaStrategy;