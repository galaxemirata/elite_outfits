import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Getproducts = () => {
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setproducts]=useState([])



  const navigate=useNavigate()

  // variable to store an image
  const image_url="http://collins.alwaysdata.net/static/images/"

  // create a function to get our products from the api

  const fetchproducts=async()=>{

    setLoading("Please wait as we retrieve your products")


    try {
      
      const response= await axios.get("http://collins.alwaysdata.net/api/getproductdetails")
      console.log("the response is",response)
      setproducts(response.data)
      setLoading("")



    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }






  }

  // end of function to call the useEffect

  useEffect(()=>{
    fetchproducts()
  },[])

const location = useLocation();

const queryParams = new URLSearchParams(location.search);
const search = queryParams.get('search'); 

const filteredProducts = products.filter(product =>
  product.product_name?.toLowerCase().includes((search || '').toLowerCase())
);


  return (
    <div className='row'>

      
      
      
      

      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

      {/* loop through our products and bring one by one */}
      {filteredProducts.map((product) => (

  <div className='col-md-3 justify-content-center' key={product.product_id}>

    <div className='card shadow'>
      
      <img 
        src={image_url + product.product_photo} 
        alt="no product found" 
        className='product_img'
      />
      
      <div className='card-body'> 
        <h4 className='text-success'>{product.product_name}</h4>
        <p className='text-secondary'>{product.product_description}</p>
        <p className='text-primary'>{product.category}</p>
        <p className='text-warning'>{product.product_cost}</p>


        <input 
          type="button"
          className='btn btn-secondary btn-outline-success text-white'
          value="Purchase Now"
          onClick={() => navigate("/mpesa", { state: { product } })}
        />
      </div>

    </div>

  </div>

))}

      
    
    <div className='row footersection'>
      <div className='col-md-6 text-white'>
        <br />
        <h3 className='about'>About Elite</h3>
        <p><b>Elite</b> is an online platform, where customeres can Buy products and also sell their own products.</p>
        <br />
        <p>To get started, you can create an account with us, but if you already own an Elite Account, you can easily sign in.</p>
        <br />
        <p>Owning an Elite Account comes with a lot of benefits. Some of them include: </p>
        <ul>
          <li>Every transaction you make earns you 5% bonus, which accumulates overtime as you make transactions. This can also help you pick goods without necessarily paying for them.</li>
          <br />
          <li>Elite fraternity can only allow customers with an Elite Account to access goods through debts.</li>

        </ul>

      </div>
      

    <div className='col-md-6 text-white'>
      <br />
        <h3 className='about'>Reach Us</h3>
        <p>In case of any mishandlement, feel free to contact us Through the following:</p>
        <ul>
          <li><b>0719330833</b></li>
          
          OR 
          <li><b>0794960433</b></li>
        </ul>
        <p>You can also email us on:</p>
        <b className='text-secondary'>eliteoutfits@gmail.com</b>
        <br />
        <br />
        <br />
        <h3 className='about'>Leave us a Comment</h3>
        <textarea name="" id="" className='form-control'></textarea>
        <br />
        <input type="submit" value="send" className='btn btn-info'/>

      
        
    </div>

     
    </div>
    </div>

  
  )
}

export default Getproducts