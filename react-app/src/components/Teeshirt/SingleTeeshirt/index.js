import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { loadTeeByIdThunk } from '../../../store/teeshirt';
import { useDispatch, useSelector } from 'react-redux';
import UpdateListingForm from '../../Forms/UpdateListing';
import { logout } from "../../../store/session";
import './SingleTeeshirt.css'

// Goal is to implement this after fixing the bug on re render that makes teeshirt properties undefined
{/* <span><Link style={{textDecoration: "none", color: "#002398"}}>Back to home page </Link></span>
        <span> | </span> */}
        {/* {console.log("BRAND", teeshirt.brand)} */}
        {/* <span style={{color: "0654BA"}}>Listed in brand: {teeshirt.brand}</span> */}


export default function TeeshirtDetails() {
    const dispatch = useDispatch();
    const params = useParams();
    const teeshirtId = Number(params.teeshirtId);
    const teeshirtObj = useSelector((state) => state.tees.userTees);
    const user = useSelector((state) => state.session.user)
    const teeshirt = teeshirtObj[teeshirtId]
    console.log("teeshirt", teeshirt)
    
    useEffect(() => {
        dispatch(loadTeeByIdThunk(teeshirtId));
    }, [dispatch]);

    const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logout());
    };

    const handleButtonClick = () => {
      alert('Feature coming soon...');
    };
    
    if (!teeshirt) {
      // Add your loading state or return null to render nothing
      return null;
    }

    // implement after the bug is fixed 
    let handleBuying;

    if (user?.id == teeshirt?.user_id) {
       handleBuying = (e) => {
        alert("You may not purchase your own shirt")
      }
    } 
    console.log(teeshirt.user_id)
    // console.log("ids", user.id , teeshirt.user_id)

  return (
    <>  
        {user ? (
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
            <span><i style={{paddingLeft: "20px"}} class="fas fa-shopping-cart"></i></span>
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
        </>
        ) :
        <> 
          <div className='logged-out-header'>
            <div className='logged-out-header-presplit'>
              <span style={{paddingLeft: "0px", fontSize: "12px"}} className='logged-out-signin-sentence'>Hi (<Link to='/login' className='logged-out-signin'>Sign in</Link>)</span>
              <span style={{paddingLeft: "20px", fontSize: "12px"}}>Daily deals</span>
              <span style={{paddingLeft: "20px", fontSize: "12px"}}>Brand Outlet</span>
              <span style={{paddingLeft: "20px", fontSize: "12px"}}>Help & Contact</span>
            </div>            
            <div className='logged-out-header-split'>
              <span style={{fontSize: "12px"}}><Link style={{color: "black", textDecoration: "none"}} to="/login">Sell</Link></span>
              <span style={{fontSize: "12px", paddingLeft: "20px"}}><Link style={{color: "black", textDecoration: "none"}} to="/login">My TeeBay</Link></span>
              <span><i style={{paddingLeft: "20px"}} class="fas fa-bell"></i></span>
              <span><i style={{paddingLeft: "20px"}} class="fas fa-shopping-cart"></i></span>
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
        <hr style={{marginTop: "20px", marginBottom: "30px", border: "1px solid white"}} className='hr-home'></hr>
        </>
        }

        {/* BODY */}

        <div className='single-tee'>
          <div className='single-tee-image-container'>
            <img className='single-tee-image' src={teeshirt?.image_url} />
            <hr style={{marginTop: "30px", border: "1px dotted lightgrey", width: "100%"}}></hr>
          </div>
          <div className='single-tee-middle-container'>
            <div className='single-tee-information-container'>
              <p style={{fontSize: "20px", fontWeight: "bold"}}>{teeshirt?.name}</p>
              <p style={{color: "grey", fontSize: "13px"}}>FREE SHIPPING and FREE RETURNS, 100% AUTHENTIC</p>
              <p style={{color: "#dd1e31", fontFamily: "Open Sans", fontWeight: "bold"}}>🔥 {Math.floor(Math.random() * 8) + 1} sold in the last hour</p>
              <hr style={{border: "1px dotted lightgrey", width: "100%"}}></hr>              
            </div>
            <div className='single-tee-selection-container'>
              <p>Condition: <span style={{fontSize: "13px", fontWeight: "bold"}}>New with tags</span></p>
              <p>Color: <select><option>{teeshirt?.color}</option></select></p>
              <p>Quantity: <span>{Math.floor(Math.random() * 8) + 1} available /</span><span style={{color: "#dd1e31", fontWeight: "bold", fontFamily: "Open Sans",}}> {Math.floor(Math.random() * 6) + 10} sold</span></p>
              <hr style={{border: "1px dotted lightgrey", width: "100%"}}></hr>
            </div>
            <div className='single-tee-buying-container'>
              <p>Price: <span style={{fontSize: "22px", fontWeight: "bold"}}>US ${teeshirt?.price.toFixed(2)}/ea</span></p>
              
              {user ? (
                    <div>
                      <Link style={{textDecoration: "none"}} to="/cart">
                        <button style=  //  
                          {{display:"flex", justifyContent: "center", alignItems: "center", color: "white", backgroundColor: "#0053A0", border: "none"}} 
                          className='purchase-btns'>
                          Buy It Now             
                        </button>
                      </Link>
                      <button style=
                        {{display:"flex", justifyContent: "center", alignItems: "center", color: "white", backgroundColor: "#3498CA", border: "none"}} 
                        className='purchase-btns'>
                        Add to cart
                      </button>
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
                <i style={{color: "blue"}}class="fas fa-shield-alt"></i>
                <span style={{paddingLeft: "10px", fontSize: "15px"}}>TeeBay Money Back Guarantee</span>
              </p>
              <p style={{marginTop: "-10px", paddingLeft: "38px", fontWeight: "400",fontFamily: "'Helvetica neue',Helvetica,Verdana,Sans-serif", color: "#707070", fontSize: "14px"}}>
                <p>Get the item you ordered</p>
                <p style={{marginTop: "-15px"}}>or your money back.</p>
              </p>
              {/* <p style={{marginTop: "-10px", paddingLeft: "38px", fontWeight: "400",fontFamily: "'Helvetica neue',Helvetica,Verdana,Sans-serif", color: "#0654ba"}}>Learn more</p> */}
            </div>
            <div className='single-tee-seller-info-container'>
              <p>Seller information</p>
              <p>Seller name placeholder</p>
              <p>100% positive feedback</p>
              <hr style={{border: "1px dotted lightgrey", width: "95%"}}></hr> 
              <p className='single-tee-seller-info2'>Save seller</p>
              <p className='single-tee-seller-info2'>Contact seller</p>
              <p className='single-tee-seller-info2'>Visit store</p>
              <p className='single-tee-seller-info2'>See other items</p>
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

