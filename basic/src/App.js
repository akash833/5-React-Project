import logo from './logo.svg';
import './styles/App.css';
import Header from './Component/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contect from './Component/Contect';
import 
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contect/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </Router>
  );
}

export default App;
