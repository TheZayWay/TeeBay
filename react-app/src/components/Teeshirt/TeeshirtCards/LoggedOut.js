import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllTeesThunk } from '../../../store/teeshirt';
import { Link } from 'react-router-dom';
import './TeeshirtCards.css'

export default function LoggedOut() {
    const dispatch = useDispatch();
    const teeshirts = useSelector((state => state));
    const tees = teeshirts.tees.allTees;
    const teesArr = Object.values(tees);
    const [search, setSearch] = useState("");
    const matchId = teesArr.filter((tee) => tee.name === search)[0]?.id;
    

    useEffect(() => {
        dispatch(loadAllTeesThunk());
    }, [dispatch])

  
    return (
        <>
        {/* <div className='brand-list'>
            {teesArr.map((teeshirt) => {
                return(<h3>{teeshirt?.brand}</h3>)
            })}
        </div> */}
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
                <input onChange={(e) => setSearch(e.target.value)} className='searchbar-mag-text' style={{paddingRight: "55%", border: "none", outline: "none", fontSize: "16px"}} placeholder="Search for any tee" />
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
            <button className='searchbar-button'>
                {matchId ? <Link to={`/teeshirts/${matchId}`}>Search</Link> : <span>Search</span>} 
            </button>
        </div>
        <hr style={{marginTop: "20px", marginBottom: "50px"}} className='hr-home'></hr>
        <div className='searchbar-results-container'>
            {search !== "" ? <div className='searchbar-results'>
                {teesArr.filter((tee) => {
                    if(search == null) return tee;
                    else if (tee.name.toLowerCase().includes(search.toLowerCase())) return tee
                }).map((tee) => {
                    return (
                        <>
                            <h5 onChange={(e) => {setSearch(e.target.value)}}>{tee.name}</h5>
                            <Link to={`/teeshirts/${tee.id}`}><h5 onClick={(e) => {}}>{tee.name}</h5></Link>
                            <hr></hr>
                        </>
                )})}
            </div> : "" }
        </div>

        <div className='card-container'>           
            {teesArr.map((teeshirt) => {
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
    )
}