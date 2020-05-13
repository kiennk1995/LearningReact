import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
          <div className="row">
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </section>
      </div>
    );
  }

}

export default Products;
