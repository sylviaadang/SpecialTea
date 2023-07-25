import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
