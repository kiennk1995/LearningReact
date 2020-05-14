import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products'
import ProductItem from './../components/ProductItem';

class ProductContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <div>
                <Products>
                    {this.showProducts(products)}
                </Products>
            </div>
        );
    }

    showProducts = (products) => {
        if (products.length > 0) {
            return products.map((product, index) => {
                return <ProductItem key={index} product={product} />
            });
        }
        return null;
    };
}


const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductContainer)