import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../Search';
import Footer from '../Footer';
import { logout } from "../../store/session";
import './Carts.css'
import { decreaseCart, removeFromCart, addToCart } from '../../store/cart';

export default function CartPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const cart = useSelector((state) => state.cart.cartItems)
    let price = 0
    const totalPrice = cart.map((item) => Number(item.cartQuantity * item.price)) 
    const currentDate = new Date()  
    const date = currentDate.toLocaleDateString()
    let cartItemPrice;

    for (let i = 0; i < totalPrice.length; i++) {
        price += totalPrice[i]
     }

    const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logout());
      history.push("/")
    };

    const handleButtonCheckout = (item) => {
      history.push("/");
      alert('Your order is on the way!');
      dispatch(removeFromCart(item))
    };

    const handleRemoveFromCart = (cartItem) => {
      dispatch(removeFromCart(cartItem))
    }

    const handleDecreaseCart = (cartItem) => {
      dispatch(decreaseCart(cartItem))
      cartItemPrice = (cartItem.cartQuantity * cartItem.price) - cartItem.price
    }
   
    const handleIncreaseCart = (cartItem) => {
      dispatch(addToCart(cartItem))
    }

    return (
      <>
      <div className='logged-out-header'>
      <div className='logged-out-header-presplit'>
        <span style={{paddingLeft: "0px", fontSize: "12px"}} className='logged-out-signin-sentence'>Hi <Link style={{fontWeight: "bold", color: "black", textDecoration: "none"}} to='/listings' className='logged-out-signin'>{user.first_name}</Link>!</span>
        <a style={{paddingLeft: "1.5rem"}}  href='https://github.com/TheZayWay' target='_blank' rel='noreferrer'>
          <svg style={{marginBottom: "-0.2rem"}} stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 496 512" height="15" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
        </a>           
        <a style={{color: "#3665F3", paddingLeft: "1.5rem"}} href='https://linkedin.com/in/isaiah-barrett1' target='_blank' rel='noreferrer'>
          <svg style={{marginBottom: "-0.2rem"}}  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="15" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
        </a>   
      </div>            
      <div className='logged-in-header-split'>
        <span style={{fontSize: "12px"}}><Link style={{color: "black", textDecoration: "none"}} to="/selling">Sell</Link></span>
        <span style={{fontSize: "12px", paddingLeft: "20px"}}><Link style={{color: "black", textDecoration: "none"}} to="/listings">My TeeBay</Link></span>
        <Link to="/cart"><span><i style={{paddingLeft: "20px"}} className="fas fa-shopping-cart"></i></span></Link>
        <button style={{border: "none", backgroundColor: "transparent", paddingLeft: "20px", fontSize: "12px"}} onClick={handleLogout} className='logout-btn123'>Log Out</button>
      </div>
    </div>
    <hr style={{marginBottom: "20px"}} className='hr-home'></hr>
    <SearchBar />
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
                  <img src={info.image_url} className='cart-image' alt="preview" onError={e => e.currentTarget.src="https://images.stockx.com/images/Balenciaga-Womens-Maison-Balenciaga-Medium-Fit-T-Shirt-Black-Orange-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1642709552"}/>
                  <div className='cart-row-2-sub'>
                    <div>{info.name}</div>
                    <div>{info.color}</div>
                    <div>New with tags</div>
                  </div>
                  <div>${info.price.toFixed(2) * info.cartQuantity}</div>
                  <button className="cart-remove-btn" onClick={() => handleRemoveFromCart(info)}>Remove</button>
                  <button className="cart-operation-btn" onClick={() => handleDecreaseCart(info)}>-</button>
                  <div>{info.cartQuantity}</div>
                  <button className="cart-operation-btn" onClick={() => handleIncreaseCart(info)}>+</button>
                </div> 
                <div style={{marginTop: "20px"}}>Free shipping on all orders placed on {date}</div>                
              </div>           
              </>
            )         
          })
        }
      </div>
      

      {/* checkout */}

      <div className='cart-checkout-container'>
        <button onClick={() => {cart.map((item) => handleButtonCheckout(item))}} style={{marginLeft: "20px", marginTop: "15px", width: "90%", height: "45px", borderRadius: "20px", 
          backgroundColor: "#3665f3", color: "white", border: "none", fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', 
          fontWeight: "bold", fontSize: "16px"
          }} className='cart-checkout-btn'>Go to checkout</button>
        <div className='cart-item-price'>
          <div style={{fontFamily: '"Market Sans", Arial, sans-serif', fontWeight: 500}}>Price</div>
          <div style={{fontFamily: '"Market Sans", Arial, sans-serif'}}>${price.toFixed(2)}</div>
        </div> 
        <div style={{fontFamily: '"Market Sans", Arial, sans-serif', fontSize: "15px", paddingLeft: "20px", marginTop: "10px"}}>Shipping 
          <i style={{paddingLeft: "10px"}} className="fas fa-info-circle"></i>
          <span style={{fontFamily: '"Market Sans", Arial, sans-serif', fontSize: "15px", paddingLeft: "14rem"}}>Free</span>
        </div>
        <hr style={{width: "90%", marginTop: "15px"}} className='hr-home'></hr>
        <div style={{display: "flex", justifyContent: "space-between",
          fontWeight: 500, fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: "20px", marginTop: "15px"}}>
          <span style={{marginLeft: "5%", fontSize: "1.25rem"}}>Subtotal</span><span style={{marginRight: "5%"}}>${price.toFixed(2)}</span> 
        </div>
      </div>
    </div> 
    <div style={{marginTop: "4rem"}}></div>   
    <Footer /> 
    </>
  )
}