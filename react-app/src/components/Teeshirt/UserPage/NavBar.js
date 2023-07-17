import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { logout } from "../../../store/session";
import { useParams } from "react-router-dom";

export default function NavBar () {
    const dispatch = useDispatch();
    const {teeshirtId} = useParams();
    const history = useHistory();
    const teesObj = useSelector((state) => state.tees);
    const user = useSelector((state) => state.session)
    console.log("USER", user)
    const teeshirt = teesObj.allTees[teeshirtId];
    
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
                <div className='logged-out-header-presplit'>
                    <span style={{paddingLeft: "0px", fontSize: "12px"}} className='logged-out-signin-sentence'>Hi <Link style={{fontWeight: "bold", color: "black", textDecoration: "none"}} to='/listings' className='logged-out-signin'>{user.user.first_name}</Link>!</span>
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
                <hr style={{marginTop: "20px", marginBottom: "50px"}} className='hr-home'></hr>
                
        </>
    )
}



