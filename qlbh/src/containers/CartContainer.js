import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from './../components/CartItem';
import Cart from './../components/Cart';
// import * as Message from './../constants/Messages';
import CartResult from './../components/CartResult';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showProducts(cart)}
                {this.subTotalAmount(cart)}
            </Cart>
        );
    }

    showProducts = (carts) => {
        // var result = Message.MES_CART_EMPTY;

        if (carts.length > 0) {
            return carts.map((cart, index) => {
                return (<CartItem key={index} cart={cart} />)
            });
        }
        return null;
    };

    subTotalAmount = (carts) => {
        var result = 0;
        if (carts.length > 0) {
            carts.map((cart, index) => {
                return result += cart.quantity * cart.product.price;
            });
            return <CartResult subTotalAmount={result} />
        }
        return null;
    };
}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })).isRequired
}


const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer)