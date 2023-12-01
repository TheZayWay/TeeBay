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
        <span className='deadlinks' style={{paddingLeft: "20px", fontSize: "12px"}}>Daily deals</span>
        <span className='deadlinks' style={{paddingLeft: "20px", fontSize: "12px"}}>Brand Outlet</span>
        <span className='deadlinks' style={{paddingLeft: "20px", fontSize: "12px"}}>Help & Contact</span>
      </div>            
      <div className='logged-in-header-split'>
        <span style={{fontSize: "12px"}}><Link style={{color: "black", textDecoration: "none"}} to="/selling">Sell</Link></span>
        <span style={{fontSize: "12px", paddingLeft: "20px"}}><Link style={{color: "black", textDecoration: "none"}} to="/listings">My TeeBay</Link></span>
        <span className='deadlinks'><i style={{paddingLeft: "20px"}} className="fas fa-bell"></i></span>
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
                  <img src={info.image_url} className='cart-image' alt="preview" onError={e => e.currentTarget.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-EVNan6uv0pIUNhN3H1m4O-OmHyaQ93pgw&usqp=CAU"}/>
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