import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { loadTeeByIdThunk } from '../../store/teeshirt';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../store/session";
import './Carts.css'

export default function CartPage() {
    const dispatch = useDispatch();
    const params = useParams();
    const user = useSelector((state) => state.session.user);
    const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity)
    const cart = useSelector((state) => state.cart.cartItems)
    let price = 0
    const totalPrice = cart.map((item) => Number(item.price))  
    const currentDate = new Date()  
    const date = currentDate.toLocaleDateString()

    for (let i = 0; i < totalPrice.length; i++) {
        price += totalPrice[i]
     }

    const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logout());
    };

    const handleButtonClick = () => {
      alert('Feature coming soon...');
    };

    const handleButtonCheckout = () => {
      alert('Your items are on the way!');
    };
   
    return (
      <>
      <div className='logged-out-header'>
      <div className='logged-out-header-presplit'>
        <span style={{paddingLeft: "0px", fontSize: "12px"}} className='logged-out-signin-sentence'>Hi <Link style={{fontWeight: "bold", color: "black", textDecoration: "none"}} to='/listings' className='logged-out-signin'>{user.first_name}</Link>!</span>
        <span style={{paddingLeft: "20px", fontSize: "12px"}}>Daily deals</span>
        <span style={{paddingLeft: "20px", fontSize: "12px"}}>Brand Outlet</span>
        <span style={{paddingLeft: "20px", fontSize: "12px"}}>Help & Contact</span>
      </div>            
      <div className='logged-in-header-split'>
        <span style={{fontSize: "12px"}}><Link style={{color: "black", textDecoration: "none"}} to="/selling">Sell</Link></span>
        <span style={{fontSize: "12px", paddingLeft: "20px"}}><Link style={{color: "black", textDecoration: "none"}} to="/listings">My TeeBay</Link></span>
        <span><i style={{paddingLeft: "20px"}} class="fas fa-bell"></i></span>
        <Link to="/cart"><span><i style={{paddingLeft: "20px"}} class="fas fa-shopping-cart"></i></span>{cartTotalQuantity}</Link>
        <button style={{border: "none", backgroundColor: "transparent", paddingLeft: "20px", fontSize: "12px"}} onClick={handleLogout} className='logout-btn123'>Log Out</button>
      </div>
    </div>
    <hr style={{marginBottom: "20px"}} className='hr-home'></hr>
    <div className='searchbar-home-container'>
      <Link style={{fontFamily: "Roboto, 'Courier New', monospace", textDecoration: "none", fontWeight: "bold", fontSize: "36px"}} to="/">
        <span style={{color: "#0064D2"}}>T</span>
        <span style={{color: "#FDB900"}}>e</span>
        <span style={{color: "#00B140"}}>e</span>
        <span style={{color: "#E53238"}}>B</span>
        <span style={{color: "#0064D2"}}>a</span>
        <span style={{color: "#FDB900"}}>y</span>
      </Link>
      <p style={{fontSize: "15px"}}>Find your tee</p>
      <div className='searchbar-home'>
        <div><i class="fas fa-search" style={{color: "grey", paddingLeft: "20px", paddingRight: "10px", fontSize: "15px"}}></i></div>
        <input className='searchbar-mag-text' style={{paddingRight: "55%", border: "none", outline: "none", fontSize: "16px"}} placeholder="Search for any tee" />
        <hr className='search-hr'></hr>
        <div style={{fontSize: "12px"}}>
          All Types
          <select style={{width: "25px", border: "none", outline: "none"}}>
            <option></option>
            <option>Short Sleeve</option>
            <option>Long Sleeve</option>
            <option>Button Short Sleeve</option>
            <option>Button Long Sleeve</option>
            <option>Thermal</option>
            <option>Undershirt</option>
          </select>
        </div>
      </div>
      <button className='searchbar-button' onClick={handleButtonClick}>Search</button>
    </div>
    <hr style={{marginTop: "20px", marginBottom: "50px", border: "1px solid white"}} className='hr-home'></hr>
    <h1 style={{marginTop: "-60px", marginBottom: "100px", fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 550}}>Shopping cart</h1>
   
   {/* Cart items */}
    <div className='cart-page'>
      <div className='cart-card-container'>
        {
          cart.map((info) => {
            return (
              <>
              <div className='cart-card-subcontainer'> 
                <div>Seller <span style={{textDecoration: "underline"}}>{info.User.first_name}</span></div>
                <div className='cart-row-2'>
                  <img src={info.image_url} className='cart-image'/>
                  <div className='cart-row-2-sub'>
                    <div>{info.name}</div>
                    <div>{info.color}</div>
                    <div>New with tags</div>
                  </div>
                  <div>${info.price.toFixed(2)}</div>
                </div> 
                <div>Free shipping on all orders placed on {date}</div>
              </div>           
              </>
            )         
          })
        }
      </div>
      

      {/* checkout */}

      <div className='cart-checkout-container'>
        <button onClick={handleButtonCheckout} style={{marginLeft: "20px", marginTop: "15px", width: "90%", height: "45px", borderRadius: "20px", 
          backgroundColor: "#3665f3", color: "white", border: "none", fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', 
          fontWeight: "bold", fontSize: "16px"
          }}>Go to checkout</button>
        <div className='cart-item-price'>
          <div style={{fontFamily: '"Market Sans", Arial, sans-serif', fontWeight: 500}}>Items ({cartTotalQuantity})</div>
          <div style={{fontFamily: '"Market Sans", Arial, sans-serif'}}>${price.toFixed(2)}</div>
        </div>
        <div style={{fontFamily: '"Market Sans", Arial, sans-serif', fontSize: "15px", paddingLeft: "20px", marginTop: "10px"}}>Shipping 
          <i style={{paddingLeft: "10px"}} class="fas fa-info-circle"></i>
          <span style={{fontFamily: '"Market Sans", Arial, sans-serif', fontSize: "15px", paddingLeft: "220px"}}>Free</span>
        </div>
        <hr style={{width: "90%", marginTop: "15px"}} className='hr-home'></hr>
        <div style={{display: "flex", justifyContent: "space-between",
          fontWeight: 500, fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: "20px", marginTop: "15px"}}>
          <span style={{marginLeft: "5%", fontSize: "1.25rem"}}>Subtotal</span><span style={{marginRight: "5%"}}>${price.toFixed(2)}</span> 
        </div>
      </div>
    </div>    
    <hr style={{backgroundColor: "lightgray", border: "none", borderTop: "1px solid lightgray", marginTop: "30px", marginBottom: "30px"}}></hr>
        <footer className="single-tee-footer-container">Copyright © 2023 TeeBay All Rights Reserved. 
          <span className="single-tee-footer-span">Accessibility,</span>
          <span className="single-tee-footer-span">User Agreement,</span>
          <span className="single-tee-footer-span">Privacy,</span>
          <span className="single-tee-footer-span">Payments</span>
          <span className="single-tee-footer-span">Terms of Use,</span>
          <span className="single-tee-footer-span">Cookies,</span>
          <span className="single-tee-footer-span">Your Privacy Choices</span>
        </footer>    
    </>
  )
}