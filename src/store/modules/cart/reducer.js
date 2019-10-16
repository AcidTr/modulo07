import produce from 'immer';

export default function cart(state = [], action) {
  /*
    Switch para fazer alguma ação dependendo
    do tipo da ação.
    Caso contrário, retorna o estado do jeito que estava.
  */
  switch (action.type) {
    case '@cart/ADD':
      /*
        O immer permite manipular o array como se fosse imutável
        draft recebe o estado e pode fazer 'rascunhos' para alterar o estado
      */
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.product.id
        );
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
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
    default:
      return state;
  }
}
