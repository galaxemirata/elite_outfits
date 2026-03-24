import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ContactUs from './ContactUs';

const GetProducts = ({ handleLike, likedImages, searchTerm }) => {
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const image_url = 'http://collins.alwaysdata.net/static/images/';

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading('Loading products...');
      try {
        const response = await axios.get(
          'http://collins.alwaysdata.net/api/getproductdetails'
        );
        setProducts(response.data);
        setLoading('');
      } catch (err) {
        setLoading('');
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  // Filter products in real-time
  const filteredProducts = products.filter((product) =>
    product.product_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='row'>
      {/* Loading & Error */}
      {loading && <p className='text-warning'>{loading}</p>}
      {error && <p className='text-danger'>{error}</p>}

      {/* Display filtered products */}
      {filteredProducts.map((product) => (
        <div className='col-md-3 mb-4' key={product.product_id}>
          <div className='card shadow'>
            <img
              src={image_url + product.product_photo}
              alt={product.product_name}
              className='product_img'
            />
            <div className='card-body'>
              <h4 className='text-success'>{product.product_name}</h4>
              <p className='text-secondary'>{product.product_description}</p>
              <p className='text-primary'>{product.category}</p>
              <p className='text-warning'>{product.product_cost}</p>

              {/* Purchase Button */}
              <button
                className='btn btn-secondary btn-outline-success text-white me-2'
                onClick={() => navigate('/mpesa', { state: { product } })}
              >
                Purchase Now
              </button>

              {/* Like Button */}
              <button
                className={`btn ${
                  likedImages?.find((img) => img.product_id === product.product_id)
                    ? 'btn-danger'
                    : 'btn-outline-primary'
                }`}
                onClick={() => handleLike(product)}
              >
                {likedImages?.find((img) => img.product_id === product.product_id)
                  ? '❤️'
                  : '♡'}
              </button>
            </div>
          </div>
        </div>
      ))}

      <ContactUs />
    </div>
  );
};

export default GetProducts;