import produce from 'immer';

export default function cart(state = [], action) {
  /*
    Switch para fazer alguma ação dependendo
    do tipo da ação.
    Caso contrário, retorna o estado do jeito que estava.
  */
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      /*
        O immer permite manipular o array como se fosse imutável
        draft recebe o estado e pode fazer 'rascunhos' para alterar o estado
      */
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.id
        );

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }
}
