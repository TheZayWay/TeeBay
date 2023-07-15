import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllTeesThunk } from '../../../store/teeshirt';
import { Link } from 'react-router-dom';
import './TeeshirtCards.css'

export default function LoggedOut() {
    const dispatch = useDispatch();
    const teeshirts = useSelector((state => state));
    const tees = teeshirts.tees.allTees;
    const user = teeshirts.session;
    const teesArr = Object.values(tees)

    useEffect(() => {
        dispatch(loadAllTeesThunk());
    }, [dispatch])

    const handleButtonClick = () => {
        alert('Feature coming soon...');
      };

    return (
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
        <hr className='hr-home'></hr>
        <div className='searchbar-home-container'>
            <Link to="/">Home</Link>
            <p>Find your tee type</p>
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
        <hr className='hr-home'></hr>
        <div>logged out</div>
        <div className='card-container'>           
            {teesArr.map((teeshirt) => {
                    return (
                        <div className='card' key={teeshirt.id}>
                            <div className='front-page-images-container'>
                                <Link to={`/teeshirts/${teeshirt.id}`}>
                                    <img src={teeshirt.image_url} alt='Teeshirt Preview' className='front-page-images'/>
                                </Link>
                            </div>
                            <p>${teeshirt.price.toFixed(2)}</p>
                        </div>
                    )
                }                 
            )}
        </div>
        </>
    )
}