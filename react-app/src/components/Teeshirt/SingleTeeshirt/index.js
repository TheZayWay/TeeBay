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


  return (
    <>  
        {user ? (
        <><button onClick={handleLogout}>Log Out</button>
        <p>logged in</p>
        <Link to="/">Home</Link>
        <Link to="/selling">Sell</Link>
        <Link to="/listings">Your Account</Link>
        </>
        ) : <><p className='logged-out-signin-sentence'>Hi(<Link to='/login' className='logged-out-signin'>Sign in</Link>)</p><Link to='/login'>Sell</Link><Link to='/login'>Your account</Link><p>logged out</p></>}
        <hr></hr>
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

