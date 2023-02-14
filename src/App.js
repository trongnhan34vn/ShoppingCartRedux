import logo from './logo.svg';
import './App.css';
import ListProducts from './components/ListProducts/ListProducts';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* TITLE : START */}
        <div className="page-header">
          <h1>
            Project 04 - Shopping Cart <small>ReactJS</small>
          </h1>
        </div>
        {/* TITLE : END */}
        <div className="row">
          {/* LIST PRODUCT : START */}
          <ListProducts />
          {/* LIST PRODUCT : END */}
          {/* CART : START */}
          <Cart />
          {/* CART : END */}
        </div>
      </div>

    </div>
  );
}

export default App;
