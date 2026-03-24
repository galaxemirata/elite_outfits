import React from 'react';

const LikedImages = ({ likedImages }) => {
  if (!likedImages || likedImages.length === 0) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>No liked images</h2>;
  }

  return (
    <div className="row" style={{ padding: '20px' }}>
      {likedImages.map(product => (
        <div className="col-md-3 mb-4" key={product.product_id}>
          <div className="card shadow">
            <img
              src={`http://collins.alwaysdata.net/static/images/${product.product_photo}`}
              alt={product.product_name}
              className="card-img-top"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5>{product.product_name}</h5>
              <p className="text-warning">{product.product_cost}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LikedImages;