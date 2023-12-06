import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import teeshirtReducer, { loadTeeByIdThunk, loadAllTeesThunk } from '../../../store/teeshirt';
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
    const allTeeshirts = useSelector(state => state?.tees);
    
    
   
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
        </>
        ) :
        <> 
          <div className='logged-out-header'>
            <div className='logged-out-header-presplit'>
              <span style={{paddingLeft: "0px", fontSize: "12px"}} className='logged-out-signin-sentence'>Hi (<Link to='/login' className='logged-out-signin'>Sign in</Link>)</span>
              <a style={{paddingLeft: "1.5rem"}}  href='https://github.com/TheZayWay' target='_blank' rel='noreferrer'>
                <svg style={{marginBottom: "-0.2rem"}} stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 496 512" height="15" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              </a>           
              <a style={{color: "#3665F3", paddingLeft: "1.5rem"}} href='https://linkedin.com/in/isaiah-barrett1' target='_blank' rel='noreferrer'>
                <svg style={{marginBottom: "-0.2rem"}}  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="15" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
              </a>  
            </div>            
            <div className='logged-out-header-split'>
              <span style={{fontSize: "12px"}}><Link style={{color: "black", textDecoration: "none"}} to="/login">Sell</Link></span>
              <span style={{fontSize: "12px", paddingLeft: "20px"}}><Link style={{color: "black", textDecoration: "none"}} to="/login">My TeeBay</Link></span>
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
                     
                      {/* <button style=
                        {{display:"flex", justifyContent: "center", alignItems: "center", color: "#3665F3", backgroundColor: "white", border: "1px solid #3665F3"}} 
                        className='purchase-btns2'>
                        Add to watchlist
                      </button>    */}
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
                      {/* <Link style={{textDecoration: "none"}} to='/login'>
                        <button style=
                          {{display:"flex", justifyContent: "center", alignItems: "center", color: "#3665F3", backgroundColor: "white", border: "1px solid #3665F3"}} 
                          className='purchase-btns1'>
                          Add to watchlist
                        </button>
                      </Link> */}
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
              <p style={{paddingLeft: "5px", marginTop: "-15px",fontFamily: "'Helvetica neue',Helvetica,Verdana,Sans-serif", fontSize: "15px", color: "#0654ba"}}>{seller}</p>
              <p style={{paddingLeft: "5px", marginTop: "-10px", fontSize: "13px"}}>100% positive feedback</p>
              <hr style={{border: "1px dotted lightgrey", width: "95%"}}></hr>
              <p className='single-tee-seller-info2'>
                <p style={{marginTop: "-5px", paddingLeft: "5px", color: "black"}}>Returns: <span style={{paddingLeft: "1.9rem"}}>30 days returns. Buyer</span></p>
                <p style={{marginTop: "-15px", paddingLeft: "5.9rem", color: "black"}}>doesn't pay. </p>
                <p style={{marginTop: "-10px", paddingLeft: "5px", color: "black"}}>Delivery: <span style={{paddingLeft: "1.4rem"}}>Between 3 - 5 business </span></p>
                <p style={{marginTop: "-15px", paddingLeft: "5.8rem", color: "black"}}>days.</p>
                <p style={{marginTop: "-10px", paddingLeft: "5px", color: "black"}}>Shipping: <span style={{paddingLeft: "1.3rem"}}>Standard shipping is </span></p>
                <p style={{marginTop: "-15px", paddingLeft: "5.8rem", color: "black"}}>free.</p>
              </p>
            </div>
          </div>
        </div>
        <hr style={{backgroundColor: "lightgray", border: "none", borderTop: "1px solid lightgray", marginTop: "3rem", marginBottom: "30px"}}></hr>
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

