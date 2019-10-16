import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

// TODO: Validar com prop-types
function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize < 1 ? 'Carrinho vazio' : `${cartSize} items`}</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

/*
connect serve para notificar os componentes que um estado
foi alterado. Pode ser passado parãmetros para o componente.
Ex:
  cartSize: state.cart.length
*/
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
