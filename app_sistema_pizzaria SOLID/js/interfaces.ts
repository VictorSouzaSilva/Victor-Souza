interface IPizzaBasica {
  nome: string;
  preco: number;
}

interface IPizzaComIngredientes extends IPizzaBasica {
  ingredientes: string[];
}

interface IPizzaComTipo extends IPizzaBasica {
  tipo: string;
}

export { IPizzaBasica, IPizzaComIngredientes, IPizzaComTipo };