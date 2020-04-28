import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
    this.gridRef2 = React.createRef();
  }
  onAddProduct = () => {
    console.log(this.gridRef.current.value);
    console.log(this.gridRef2.current.value);
  };

  render() {

    var products = [
      {
        name: "ip 11 pro",
        price: "15000000",
        status: true,
      },
      {
        name: "ip X",
        price: "10000000",
        status: true,
      },
      {
        name: "ip 8 XS MAX",
        price: "5000000",
        status: true,
      },
      {
        name: "ip 8 XS MAX",
        price: "5000000",
        status: true,
      },
      {
        name: "ip 8 XS MAX",
        price: "5000000",
        status: true,
      },
      {
        name: "ip 8 XS MAX",
        price: "5000000",
        status: true,
      },
      {
        name: "ip 8 XS MAX",
        price: "5000000",
        status: true,
      }
    ];
    let element = products.map((item, index) => {
      let result = "";
      if (item.status) {
        result = <Product
          key={index}
          name={item.name}
          price={item.price} />
      }
      return result;
    });
    return (
      <div>
        <Header />
        <React.StrictMode>
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Thêm sản phẩm</h3>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label >label</label>
                  <input type="text" className="form-control" id="name" ref={this.gridRef} placeholder="Input field" />
                  <input type="text" className="form-control" id="name2" ref={this.gridRef2} placeholder="Input field" />
                  <button type="submit" className="btn btn-primary" onClick={this.onAddProduct} >Add</button>
                </div>
              </div>
            </div>
          </div>
        </React.StrictMode>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {element}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
