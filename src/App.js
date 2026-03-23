import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import GetProducts from './components/GetProducts';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProducts from './components/AddProducts';
import Mpesa from './components/Mpesa';


// 🔥 NEW COMPONENT (inside Router)
function AppContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?search=${searchTerm}`);
  };

  return (
    <div className="App">

      <header className='App-header'>
        <h1><b>Elite Outfits</b></h1>
      </header>

      <nav className='nav'>
        <Link to='/' className='navlink'>Get Products</Link>
        <Link to='/addproducts' className='navlink'>Add Products</Link>
        <Link to='/signin' className='navlink'>SignIn</Link>
        <Link to='/signup' className='navlink'>SignUp</Link>

        {/* ✅ SEARCH BAR */}
        <form onSubmit={handleSearch} style={{ marginLeft: 'auto', display: 'flex', gap: '5px' }}>
          <input
            type="text"
            placeholder="search here.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
           
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </nav>

      <Routes>
        <Route path='/' element={<GetProducts />} />
        <Route path='/addproducts' element={<AddProducts />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mpesa' element={<Mpesa />} />
        
      </Routes>

    </div>
  );
}


// 🔥 ROOT COMPONENT
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;