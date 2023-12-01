import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import SearchBar from "../Search";

const SearchPage = () => {
  const [searchedTeeshirtArr, setSearchedTeeshirtArr] = useState([]);
  const reduxSearch = useSelector((state) => state.search)
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    const searchData = localStorage.getItem('searchData')
    if (searchData) {
      setSearchedTeeshirtArr(JSON.parse(searchData));
    }
  }, [reduxSearch])


  return (
    <>
    {user ? 
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
             <Link to="/cart"><i style={{paddingLeft: "20px"}} className="fas fa-shopping-cart"></i></Link>
             <button style={{border: "none", backgroundColor: "transparent", paddingLeft: "20px", fontSize: "12px"}} onClick={handleLogout} className='logout-btn123'>Log Out</button>
         </div>
     </div>
     <hr style={{marginBottom: "20px"}} className='hr-home'></hr>
     <Link style={{fontFamily: "Roboto, 'Courier New', monospace", textDecoration: "none", fontWeight: "bold", fontSize: "36px"}} className="selling-form-logo" to="/">
        <span style={{color: "#0064D2"}}>T</span>
        <span style={{color: "#FDB900"}}>e</span>
        <span style={{color: "#00B140"}}>e</span>
        <span style={{color: "#E53238"}}>B</span>
        <span style={{color: "#0064D2"}}>a</span>
        <span style={{color: "#FDB900"}}>y</span>
      </Link>
      <hr style={{border: "none", borderTop: "1px solid lightgray"}}></hr>
     
 
     <div className='card-container'>           
         {searchedTeeshirtArr.map((teeshirt) => {
                 return (
                     <div className='card' key={teeshirt.id}>
                         <div className='front-page-images-container'>
                             <Link to={`/teeshirts/${teeshirt.id}`}>
                                 <img src={teeshirt.image_url} alt='Teeshirt Preview' className='front-page-images' onError={e => e.currentTarget.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-EVNan6uv0pIUNhN3H1m4O-OmHyaQ93pgw&usqp=CAU"}/>
                             </Link>
                         </div>
                         <Link className='homepage-price' to={`/teeshirts/${teeshirt.id}`}>
                             <p>${teeshirt.price}</p>
                         </Link>
                     </div>
                 )
             }                 
         )}
     </div>
     </>   
    : 
    <>
    <div className='logged-out-header'>
        <div className='logged-out-header-presplit'>
            <span style={{paddingLeft: "0px", fontSize: "12px"}} className='logged-out-signin-sentence'>Hi (<Link to='/login' className='logged-out-signin'>Sign in</Link>)</span>
            <span className='deadlinks' style={{paddingLeft: "20px", fontSize: "12px"}}>Daily deals</span>
            <span className='deadlinks' style={{paddingLeft: "20px", fontSize: "12px"}}>Brand Outlet</span>
            <span className='deadlinks' style={{paddingLeft: "20px", fontSize: "12px"}}>Help & Contact</span>
        </div>            
        <div className='logged-in-header-split'>
            <span style={{fontSize: "12px"}}><Link style={{color: "black", textDecoration: "none"}} to="/login">Sell</Link></span>
            <span style={{fontSize: "12px", paddingLeft: "20px"}}><Link style={{color: "black", textDecoration: "none"}} to="/login">My TeeBay</Link></span>
            <span className='deadlinks'><i style={{paddingLeft: "20px"}} className="fas fa-bell"></i></span>
            <Link to="/login"><i style={{paddingLeft: "20px"}} className="fas fa-shopping-cart"></i></Link>
        </div>
    </div>
    <hr style={{marginBottom: "20px"}} className='hr-home'></hr>
    <Link style={{fontFamily: "Roboto, 'Courier New', monospace", textDecoration: "none", fontWeight: "bold", fontSize: "36px"}} className="selling-form-logo" to="/">
        <span style={{color: "#0064D2"}}>T</span>
        <span style={{color: "#FDB900"}}>e</span>
        <span style={{color: "#00B140"}}>e</span>
        <span style={{color: "#E53238"}}>B</span>
        <span style={{color: "#0064D2"}}>a</span>
        <span style={{color: "#FDB900"}}>y</span>
      </Link>
      <hr style={{border: "none", borderTop: "1px solid lightgray"}}></hr>
    

    <div className='card-container'>           
        {searchedTeeshirtArr.map((teeshirt) => {
                return (
                    <div className='card' key={teeshirt.id}>
                        <div className='front-page-images-container'>
                            <Link to={`/teeshirts/${teeshirt.id}`}>
                                <img src={teeshirt.image_url} alt='Teeshirt Preview' className='front-page-images' onError={e => e.currentTarget.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-EVNan6uv0pIUNhN3H1m4O-OmHyaQ93pgw&usqp=CAU"}/>
                            </Link>
                        </div>
                        <Link className='homepage-price' to={`/teeshirts/${teeshirt.id}`}>
                            <p>${teeshirt.price}</p>
                        </Link>
                    </div>
                )
            }                 
        )}
    </div>
    </>
    
    }
    
    </>
)
};


export default SearchPage;