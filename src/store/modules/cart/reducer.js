export default function cart(state = [], action) {
  /*
    Switch para fazer alguma ação dependendo
    do tipo da ação.
    Caso contrário, retorna o estado do jeito que estava.
  */
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          ...action.product,
          amount: 1,
        },
      ];
    default:
      return state;
  }
}
