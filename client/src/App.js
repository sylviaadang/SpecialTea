import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import OneProduct from './views/OneProduct';
import Checkout from './views/Checkout';


function App() {

  // const cart = []

  // localStorage.setItem("cart", JSON.stringify(cart))


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/items/:id' element={<OneProduct/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
