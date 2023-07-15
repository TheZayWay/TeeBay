import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllTeesThunk } from '../../../store/teeshirt';
import { Link } from 'react-router-dom';
import CreateTeeshirtForm from '../../Forms/SellingForm';
import { logout } from "../../../store/session";
import './TeeshirtCards.css'


export default function LoggedIn() {
    const dispatch = useDispatch();
    const teeshirts = useSelector((state => state));
    const tees = teeshirts.tees.allTees;
    const user = teeshirts.session;
    const teesArr = Object.values(tees);

    useEffect(() => {
        dispatch(loadAllTeesThunk());
    }, [dispatch])

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
      };

      const handleButtonClick = () => {
        alert('Feature coming soon...');
      };

    return (
        <>
        <div className='logged-out-header'>
            <span className='logged-out-signin-sentence'>Hi(<Link to='/login' className='logged-out-signin'>Sign in</Link>)</span>
            <span>Daily deals</span>
            <span>Help & Contact</span>
            <div className='logged-out-header-split'>
                <span><Link to="/selling">Sell</Link></span>
                <span><Link to="/listings">My TeeBay</Link></span>
                <span><i class="fas fa-bell"></i></span>
                <span><i class="fas fa-shopping-cart"></i></span>
                <button onClick={handleLogout}>Log Out</button>
            </div>
        </div>
        <hr className='hr-home'></hr>
        <div className='searchbar-home-container'>
            <Link to="/">Home</Link>
            <p>Shop by category</p>
            <div className='searchbar-home'>
                <div><i class="fas fa-search" style={{color: "grey"}}></i></div>
                <span className='searchbar-mag-text'>Search for any tee</span>
                {/* <hr className='search-hr'></hr> */}
                <div style={{paddingLeft: "60%"}}>All Categories</div>
            </div>
            <button className='searchbar-button' onClick={handleButtonClick}>Search</button>
        </div>
        
        <hr className='hr-home'></hr>
        <p>logged in</p>
        <div className='card-container'>         
            {teesArr.map((teeshirt) => {
                return (
                    <div className='card' key={teeshirt.id}>
                        <Link to={`/teeshirts/${teeshirt.id}`}>
                            <img src={teeshirt.image_url} alt='Teeshirt Preview' className='front-page-images'/>
                        </Link>
                        <p>Price placeholder</p>                           
                    </div>
                    )
                }                 
            )}
        </div>
        </>
    )
}