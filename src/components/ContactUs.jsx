import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div className='row col-md-12'>
        { /*start of card 1 */}
        <div className='card shadow col-md-3'>
            <div className='card-header facebook'>
            <Link to="https://www.facebook.com/"><img src="images/logo-facebook.svg" alt="" width="20px" /></Link>
            </div>

            <div className='card-body facebook'>
                <h5>Elite outfits Kenya</h5>

            </div>

        </div>
        {/* end of card 1 */}

        { /*start of card 2 */}
        <div className='card shadow col-md-3'>
            <div className='card-header'>
            <Link to="https://www.whatsapp.com/"><img src="images/logo-whatsapp.svg" alt="" width="20px"/></Link>
            </div>


            <div className='card-body whatsapp'>
                <h5>Elite outfits kenya</h5>

            </div>

        </div>
        {/* end of card 2 */}

        { /*start of card 3*/}
        <div className='card shadow col-md-3'>
            <div className='card-header'>
            <Link to="https://www.tiktok.com/"><img src="images/logo-tiktok.svg" alt="" width="20px"/></Link>
            </div>



            <div className='card-body tiktok text-info'>
                <h5>Elite outfits Kenya</h5>

            </div>

        </div>
        {/* end of card 3*/}

        { /*start of card 4 */}
        <div className='card shadow col-md-3'>
            <div className='card-header'>
            <Link to="https://www.x.com/"><img src="images/logo-twitter.svg" alt="" width="20px"/></Link>
            </div>



            <div className='card-body x'>
                <h5>Elite outfits Kenya</h5>

            </div>

        </div>
        {/* end of card 4 */}

       




    </div>
  )
}

export default ContactUs
