import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import GetProducts from './components/GetProducts';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProducts from './components/AddProducts';
import Mpesa from './components/Mpesa';
import LikedImages from './components/LikedImages'; // Show liked products

function AppContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [likedImages, setLikedImages] = useState([]);

  // LIKE FUNCTION
  const handleLike = (image) => {
    setLikedImages((prev) => {
      const exists = prev.find((img) => img.id === image.id);
      if (exists) {
        // Remove if already liked
        return prev.filter((img) => img.id !== image.id);
      }
      return [...prev, image];
    });
  };

  return (
    <div className="App">
      <header className='App-header'>
        <h1><b>Elite Outfits</b></h1>
      </header>

      <nav className='nav'>
        <Link to='/' className='navlink'>Get Products</Link>
        <Link to='/addproducts' className='navlink'>Add Products</Link>
        <Link to='/liked' className='navlink'>Liked Images</Link>
        <Link to='/signin' className='navlink'>SignIn</Link>
        <Link to='/signup' className='navlink'>SignUp</Link>

        {/* REAL-TIME SEARCH BAR */}
        <input
          type="text"
          placeholder="search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // live update
          className="form-control ms-auto"
          style={{ width: '200px' }}
        />
      </nav>

      <Routes>
        {/* Pass searchTerm to GetProducts */}
        <Route
          path='/'
          element={
            <GetProducts
              handleLike={handleLike}
              likedImages={likedImages}
              searchTerm={searchTerm} // <-- real-time search prop
            />
          }
        />
        <Route path='/addproducts' element={<AddProducts />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mpesa' element={<Mpesa />} />
        <Route path='/liked' element={<LikedImages likedImages={likedImages} />} />
      </Routes>
    </div>
  );
}

// ROOT COMPONENT
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;