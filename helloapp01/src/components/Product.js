import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    <img
                        width="200px"
                        src="https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-green-600x600.jpg"
                        alt="" />
                    <div className="caption">
                        <h3>{this.props.name}</h3>
                        <p>
                            {this.props.price}
                        </p>
                        <p>
                            <button href="# " className="btn btn-primary">Buy</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
