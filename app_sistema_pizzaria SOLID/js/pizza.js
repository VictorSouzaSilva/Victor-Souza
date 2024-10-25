import PizzaStrategy from './pizza-strategy';

class Pizza {
  constructor(tipo) {
    this.tipo = tipo;
  }

  tipoPizza() {
    const pizzaStrategy = PizzaStrategy.getStrategy(this.tipo);
    pizzaStrategy.aplicar();
  }
}

export default Pizza;