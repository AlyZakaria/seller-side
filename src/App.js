import './App.css';
import ProductList from './components/ProductList/ProductList';
import AddProduct from './components/AddProduct/AddProduct';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Task" element={<ProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
          
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
