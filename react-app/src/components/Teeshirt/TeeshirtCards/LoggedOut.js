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

    return (
        <>
        <div className='logged-out-header'>
            <span className='logged-out-signin-sentence'>Hi(<Link to='/login' className='logged-out-signin'>Sign in</Link>)</span>
            <span>Daily deals</span>
            <span>Help & Contact</span>
            <div className='logged-out-header-split'>
                <span>Sell</span>
                <span>My TeeBay</span>
                <span><i class="fas fa-bell"></i></span>
                <span><i class="fas fa-shopping-cart"></i></span>
            </div>
        </div>
        <hr className='hr-home'></hr>
        <div>logged out</div>
        <div className='searchbar-home-container'>
            Home
            <p>Shop by category</p>
            <div className='searchbar-home'>
                <div><i class="fas fa-search" style={{color: "grey"}}></i></div>
                <span className='searchbar-mag-text'>Search for any tee</span>
                {/* <hr className='search-hr'></hr> */}
                <div style={{paddingLeft: "60%"}}>All Categories</div>
            </div>
            <button className='searchbar-button'>Search</button>
        </div>
        
        <hr className='hr-home'></hr>
        <div className='card-container'>           
            {teesArr.map((teeshirt) => {
                    return (
                        <div className='card' key={teeshirt.id}>
                            <div className='front-page-images-container'>
                                <Link to={`/teeshirts/${teeshirt.id}`}>
                                    <img src={teeshirt.image_url} alt='Teeshirt Preview' className='front-page-images'/>
                                </Link>
                            </div>
                            
                            <p>Price placeholder</p>
                        </div>
                    )
                }                 
            )}
        </div>
        </>
    )
}