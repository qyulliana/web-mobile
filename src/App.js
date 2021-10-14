
import './App.css';
import Header from "./header/Header";
import Products from "./Products/Products";
import Footer from "./footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import ProductosLibres from "./ProductosLibres/ProductosLibres";
import Text from "./header/Text";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <Switch>
          <Route exact path="/">
            <Products/>
          </Route>
          <Route exact path="/productos-libres">
            <ProductosLibres/>
          </Route>
        </Switch>

        <Footer/>

      </div>
     </Router>
  );
}

export default App;
