import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { loadTeeByIdThunk } from '../../../store/teeshirt';
import { useDispatch, useSelector } from 'react-redux';
import UpdateListingForm from '../../Forms/UpdateListing';
import { logout } from "../../../store/session";

export default function TeeshirtDetails() {
    const dispatch = useDispatch();
    const params = useParams();
    const teeshirtId = Number(params.teeshirtId);
    const teeshirtObj = useSelector((state) => state.tees.allTees);
    const user = useSelector((state) => state.session.user)
    const teeshirt = teeshirtObj[teeshirtId]
    
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
            <button style={{border: "none", backgroundColor: "transparent", paddingLeft: "20px", fontSize: "12px"}} onClick={handleLogout}>Log Out</button>
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
        <hr style={{marginTop: "20px", marginBottom: "50px"}} className='hr-home'></hr>
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
        <hr style={{marginTop: "20px", marginBottom: "50px"}} className='hr-home'></hr>
        </>
        }
        {/* BODY */}

        <h1>Individual Teeshirt</h1>
        <div className='single-tee-image-container'><img src={teeshirt?.image_url} /></div>
        <div className='single-tee-information-container'>
          <p>{teeshirt?.name}</p>
          <p>FREE SHIPPING and FREE RETURNS, 100% AUTHENTIC</p>
          <p>{Math.floor(Math.random() * 15) + 1} sold in the last hour</p>
        </div>
        <div className='single-tee-buying-container'>
          <p>Price: ${teeshirt?.price.toFixed(2)}</p>
          
          {user ? (
                <div>
                  <button>Buy It Now</button>
                  <button>Add to cart</button>
                  <button>Add to watchlist</button>
                </div>
              ) : (
                null
          )}


        </div>
        <div className='single-tee-shop-w-con-container'>
          <p>Shop with confidence</p>
          <p>TeeBay Money Back Guarantee</p>
          <p>Get the item you ordered or your money back.</p>
          <p>Learn more</p>
        </div>
        <div className='single-tee-seller-info-container'>
          <p>Seller information</p>
          <p>Seller name placeholder</p>
          <p>99.9% positive feedback</p>
          <hr></hr>
          <p className='single-tee-seller-info2'>Save seller</p>
          <p className='single-tee-seller-info2'>Contact seller</p>
          <p className='single-tee-seller-info2'>Visit store</p>
          <p className='single-tee-seller-info2'>See other items</p>
        </div>
    </>
  )
}

