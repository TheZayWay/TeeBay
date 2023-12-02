import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { loadTeeByIdThunk } from '../../../store/teeshirt';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../../store/session";
import { addToCart } from '../../../store/cart';
import SearchBar from '../../Search';
import SeeReviews from '../../Reviews';
import Footer from '../../Footer';
import PostReview from '../../PostReviews';
import OpenModalButton from '../../OpenModalButton'
import SeeReviewsLoggedOut from '../../Reviews/loggedOut';
import './SingleTeeshirt.css'

export default function TeeshirtDetails() {
    const dispatch = useDispatch();
    const params = useParams();
    const teeshirtId = Number(params.teeshirtId);
    const teeshirtObj = useSelector((state) => state?.tees?.userTees);
    const user = useSelector((state) => state.session.user);
    const teeshirt = teeshirtObj[teeshirtId];
    const seller = teeshirt?.User?.first_name;
   
    const handleAddToCart = (teeshirt) => {
      dispatch(addToCart(teeshirt))
    }

    useEffect(() => {
        dispatch(loadTeeByIdThunk(teeshirtId));
    }, [dispatch, teeshirtId]);

    const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logout());
    };

    if (!teeshirt) {
      return <p>Loading...</p>;
    }

  return (
    <>  
        {user ? (
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
        </>
        ) :
        <> 
          <div className='logged-out-header'>
            <div className='logged-out-header-presplit'>
              <span style={{paddingLeft: "0px", fontSize: "12px"}} className='logged-out-signin-sentence'>Hi (<Link to='/login' className='logged-out-signin'>Sign in</Link>)</span>
              <span className='deadlinks' style={{paddingLeft: "20px", fontSize: "12px"}}>Daily deals</span>
              <span className='deadlinks' style={{paddingLeft: "20px", fontSize: "12px"}}>Brand Outlet</span>
              <span className='deadlinks' style={{paddingLeft: "20px", fontSize: "12px"}}>Help & Contact</span>
            </div>            
            <div className='logged-out-header-split'>
              <span style={{fontSize: "12px"}}><Link style={{color: "black", textDecoration: "none"}} to="/login">Sell</Link></span>
              <span style={{fontSize: "12px", paddingLeft: "20px"}}><Link style={{color: "black", textDecoration: "none"}} to="/login">My TeeBay</Link></span>
              <span className='deadlinks'><i style={{paddingLeft: "20px"}} className="fas fa-bell"></i></span>
              <Link to='/login'><span><i style={{paddingLeft: "20px"}} className="fas fa-shopping-cart"></i></span></Link>
            </div>
          </div>
        <hr style={{marginBottom: "20px"}} className='hr-home'></hr>
          <SearchBar />
        <hr style={{marginTop: "20px", marginBottom: "30px", border: "1px solid white"}} className='hr-home'></hr>
        </>
        }
        
        {/* BODY */}

        <div className='single-tee'>
          <div className='single-tee-image-container'>
            <img className='single-tee-image' src={teeshirt?.image_url} alt="preview" onError={e => e.currentTarget.src="https://images.stockx.com/images/Balenciaga-Womens-Maison-Balenciaga-Medium-Fit-T-Shirt-Black-Orange-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1642709552"} />
            <hr style={{marginTop: "30px", border: "1px dotted lightgrey", width: "100%"}}></hr>
          </div>
          <div className='single-tee-middle-container'>
            <div className='single-tee-information-container'>
              <p style={{fontSize: "20px", fontWeight: "bold"}}>{teeshirt?.name}</p>
              <p style={{color: "grey", fontSize: "13px"}}>FREE SHIPPING and FREE RETURNS, 100% AUTHENTIC</p>
              <p style={{color: "#dd1e31", fontFamily: "Open Sans", fontWeight: "bold"}}><i style={{color: "#dd1e31"}} className="fas fa-fire"></i> {Math.floor(Math.random() * 8) + 1} sold in the last hour</p>
              <hr style={{border: "1px dotted lightgrey", width: "100%"}}></hr>              
            </div>
            <div className='single-tee-selection-container'>
              <p>Condition: <span style={{fontSize: "13px", fontWeight: "bold"}}>New with tags</span></p>
              <p>Color: <select style={{border: "1px solid #d3d3d3", borderRadius: "3px", color: "#333", width: "140px", fontWeight: "400", lineHeight: "1.15"}}><option>- Select -</option><option>{teeshirt?.color}</option></select></p>
              <p>Quantity: <span>{Math.floor(Math.random() * 8) + 1} available /</span><span style={{color: "#dd1e31", fontWeight: "bold", fontFamily: "Open Sans",}}> {Math.floor(Math.random() * 6) + 10} sold</span></p>
              <hr style={{border: "1px dotted lightgrey", width: "100%"}}></hr>
            </div>
            <div className='single-tee-buying-container'>
              <p style={{fontFamily: "'Helvetica neue',Helvetica,Verdana,Sans-serif"}}><span style={{fontSize: "16px", marginTop: "-10px"}}>Price:</span> <span style={{marginTop: "30px", fontSize: "20px", fontWeight: "bold"}}>US ${teeshirt?.price}/ea</span></p>
                          
              {user ? (
                    <div>
                      <Link style={{textDecoration: "none"}} to="/cart">
                        <button onClick={() => {handleAddToCart(teeshirt)}} style=  //  ; handleBuying();
                          {{display:"flex", justifyContent: "center", alignItems: "center", color: "white", backgroundColor: "#0053A0", border: "none"}} 
                          className='purchase-btns'>
                          Buy It Now             
                        </button>
                      </Link>
                     <Link style={{textDecoration:"none"}} to="/cart">
                      <button onClick={() => handleAddToCart(teeshirt)} style= //
                          {{display:"flex", justifyContent: "center", alignItems: "center", color: "white", backgroundColor: "#3498CA", border: "none"}} 
                          className='purchase-btns'>
                          Add to cart
                        </button>
                     </Link>
                     
                      <button style=
                        {{display:"flex", justifyContent: "center", alignItems: "center", color: "#3665F3", backgroundColor: "white", border: "1px solid #3665F3"}} 
                        className='purchase-btns2'>
                        Add to watchlist
                      </button>   
                    </div>
                  ) : (
                    <>
                      <Link style={{textDecoration: "none"}} to='/login'>
                      <button style=
                        {{display:"flex", justifyContent: "center", alignItems: "center", color: "white", backgroundColor: "#0053A0", border: "none"}} 
                        className='purchase-btns1'>
                        Buy It Now
                      </button>
                      </Link>
                      <Link style={{textDecoration: "none"}} to='/login'>
                        <button style=
                          {{display:"flex", justifyContent: "center", alignItems: "center", color: "white", backgroundColor: "#3498CA", border: "none"}} 
                          className='purchase-btns1'>
                          Add to cart
                        </button>
                      </Link>
                      <Link style={{textDecoration: "none"}} to='/login'>
                        <button style=
                          {{display:"flex", justifyContent: "center", alignItems: "center", color: "#3665F3", backgroundColor: "white", border: "1px solid #3665F3"}} 
                          className='purchase-btns1'>
                          Add to watchlist
                        </button>
                      </Link>
                    </>                    
              )}
            </div>
          </div>
          <div className='single-tee-end-container'>
            <div className='single-tee-shop-w-con-container'>
              <p style={{paddingLeft: "10px", fontWeight: "400",fontFamily: "'Helvetica neue',Helvetica,Verdana,Sans-serif", color: "#333"}}>Shop with confidence</p>
              <p style={{paddingLeft: "10px", marginTop: "-5px",fontWeight: "400",fontFamily: "'Helvetica neue',Helvetica,Verdana,Sans-serif", color: "#333"}}>
                <i style={{color: "blue"}}className="fas fa-shield-alt"></i>
                <span style={{paddingLeft: "10px", fontSize: "15px"}}>TeeBay Money Back Guarantee</span>
              </p>
              <p style={{marginTop: "-10px", paddingLeft: "38px", fontWeight: "400",fontFamily: "'Helvetica neue',Helvetica,Verdana,Sans-serif", color: "#707070", fontSize: "14px"}}>
                <p>Get the item you ordered</p>
                <p style={{marginTop: "-15px"}}>or your money back.</p>
              </p>
            </div>
            <div className='single-tee-seller-info-container'>
              <p style={{paddingLeft: "5px", fontWeight: "bold",fontFamily: "'Helvetica neue',Helvetica,Verdana,Sans-serif"}}>Seller information</p>
              <p style={{paddingLeft: "5px", marginTop: "-15px",fontFamily: "'Helvetica neue',Helvetica,Verdana,Sans-serif", fontSize: "15px", color: "#0654ba", textDecoration: "underline"}}>{seller}</p>
              <p style={{paddingLeft: "5px", marginTop: "-10px", fontSize: "13px"}}>100% positive feedback</p>
              <hr style={{border: "1px dotted lightgrey", width: "95%"}}></hr>
              <p className='single-tee-seller-info2'>
                <span className="fa-stack" style={{color: "#3665f3"}}>
                  <i className="far fa-heart fa-stack-1x"></i>
                  <i className="fas fa-heart fa-stack-1x" style={{color: "transparent"}}></i>
                </span> 
                <span className='deadlinks' style={{color: "#3665f3", textDecoration: "underline"}}>Save seller</span>
              </p>
              <p style={{marginTop: "-15px", paddingLeft: "5px", color: "#3665f3", textDecoration: "underline"}} className='single-tee-seller-info3'>Contact seller</p>
              <p style={{marginTop: "-15px", paddingLeft: "5px", color: "#3665f3", textDecoration: "underline"}} className='single-tee-seller-info3'>Visit store</p>
              <p style={{marginBottom: "20px", marginTop: "-15px", paddingLeft: "5px", color: "#3665f3", textDecoration: "underline"}} className='single-tee-seller-info3'>See other items</p>
            </div>
          </div>
        </div>
        <hr style={{backgroundColor: "lightgray", border: "none", borderTop: "1px solid lightgray", marginTop: "30px", marginBottom: "30px"}}></hr>
        <div>
      </div>
        {
          user ? <OpenModalButton
          buttonText="Leave Feedback?"
          modalComponent={<PostReview />}
        /> : ""
        }      
        {user ? <SeeReviews /> : <SeeReviewsLoggedOut />}
        <Footer />        
    </>
  )
}

