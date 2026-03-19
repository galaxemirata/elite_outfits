import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import GetProducts from './components/GetProducts';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProducts from './components/AddProducts';
import Mpesa from './components/Mpesa';






function App() {
  return (

    <Router>
    <div className="App">
      

      <header className='App-header'>
        
        <h1>Elite Outfits</h1>
      </header>
      





      <nav className='nav'>
        
        <Link to='/' className='navlink'>Get Products</Link>
        <Link to='/addproducts' className='navlink'>Add Products</Link>
        <Link to='/signin' className='navlink'>SignIn</Link>
        <Link to='/signup' className='navlink'>SignUp</Link>
        
        
        
      </nav>
      <br />
      
      
      
      
      
      

      <Routes>
        <Route path='/' element={<GetProducts/>}/>
        <Route path='/addproducts' element={<AddProducts/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/mpesa' element={<Mpesa/>}/>




      </Routes>

      

      

    </div>
    </Router>
  );
}

export default App;
