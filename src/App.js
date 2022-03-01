import './App.css';
import Home from './pages/Home';
import Productlist from './pages/Productlist';
import Product from './pages/Product';
import{Switch,Route} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Carts from './pages/Carts';

import {CartProvider} from "react-use-cart";
function App() {
  
  return (
    <div className="App">
           <CartProvider>
<Switch>
<Route exact path="/">
    <Home/>
</Route>
    <Route path="/shirts/:id">
       <Product/>
  </Route>
  
  <Route path="/shirts">
  <Productlist/>
  </Route>
  
  <Route path="/login">
  <Login/>
  </Route>
  
  
  <Route path="/register">
  <Register/>
  </Route>
  <Route path="/cart">
  <Carts/>
  </Route>
    </Switch>
    </CartProvider>
    </div>
  );
}

export default App;
