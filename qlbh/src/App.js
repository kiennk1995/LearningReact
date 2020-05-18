import React, { Component } from 'react';
import Header from './components/Header';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import Message from './components/Message';
// import Cart from './components/Cart';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductContainer />
            <Message />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;
