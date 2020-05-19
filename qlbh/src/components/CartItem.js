import React, { Component } from 'react';

class CartItem extends Component {
  onAddToCard = (product, quantity) => {
    this.props.onAddToCard(product, quantity);
  }

  onRemoveFromCard = (id) => {
    this.props.onRemoveFromCard(id);
  }

  render() {
    var { cart } = this.props;
    return (
      <tr>
        <th scope="row">
          <img src={cart.product.image}
            alt={cart.product.name} className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{cart.product.name}</strong>
          </h5>
        </td>
        <td>{cart.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{cart.quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label onClick={() => this.onAddToCard(cart.product, -1)} className="btn btn-sm btn-primary
                              btn-rounded waves-effect waves-light">
              <a href="# " >—</a>
            </label>
            <label onClick={() => this.onAddToCard(cart.product, 1)} className="btn btn-sm btn-primary
                              btn-rounded waves-effect waves-light">
              <a href="# "  >+</a>
            </label>
          </div>
        </td>
        <td>{cart.product.price * cart.quantity}$</td>
        <td>
          <button type="button" onClick={() => this.onRemoveFromCard(cart.product.id)} className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
            title="" data-original-title="Remove item">X</button>
        </td>
      </tr>
    );
  }

}

export default CartItem;
