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



// NEW COMPONENT (inside Router)
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
        <img src="data:image/png;base64,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" alt="" width="50px" className='brandlogo'/>
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