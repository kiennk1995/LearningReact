import React, { Component } from 'react';

class ProductItem extends Component {
  showRating = (rating) => {
    var rateHtml = [];
    if (rating > 0) {
      for (let i = 0; i < rating; i++) {
        rateHtml.push(
          <li key={i}>
            <i className="fa fa-star"></i>
          </li>
        )
      }
    }
    for (let j = 0; j < (5 - rating); j++) {
      rateHtml.push(
        <li key={j + 5}>
          <i className="fa fa-star-o"></i>
        </li>)
    }
    return (
      rateHtml
    )
  }
  onAddToCard = (product) => {
    this.props.onAddToCard(product);
  }

  render() {
    var { product } = this.props;

    return (
      <React.Fragment>
        <div className="col-lg-4 col-md-6 mb-r">
          <div className="card text-center card-cascade narrower">
            <div className="view overlay hm-white-slight z-depth-1">
              <img src={product.image}
                className="img-fluid" alt={product.name} />
              <a href="# ">
                <div className="mask waves-light waves-effect waves-light"></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <strong>
                  <a href="# ">{product.name}</a>
                </strong>
              </h4>
              <ul className="rating">
                {this.showRating(product.rating)}

              </ul>
              <p className="card-text">
                {product.description}
              </p>
              <div className="card-footer">
                <span className="left">{product.price}$</span>
                <span className="right">
                  <a href="# "
                    onClick={() => this.onAddToCard(product)}
                    className="btn-floating blue-gradient"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-ti tle="Add to Cart">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default ProductItem;
