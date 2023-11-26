import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadAllSearchThunk } from "../../store/search";
import './search.css'

const SearchBar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [searchInput, setSearchInput] = useState('')
  const allTeeshirts = useSelector(state => state.tees.allTees);
  const allTeeshirtsArr = Object.values(allTeeshirts);

  const searchedTeeshirt = allTeeshirtsArr.filter(teeshirt => {
    if (searchInput === '') {
      return
    } else {
      if (teeshirt.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return teeshirt.name
      }
    }
  })

  const slicedSearchedTeeshirt = searchedTeeshirt.slice(0,10)

  const handleSearch = async (e) => {
    e.preventDefault()

      return await dispatch(loadAllSearchThunk(searchInput))
      .then(() => localStorage.setItem('searchData', JSON.stringify(searchedTeeshirt)))
      .then(() => history.push(`/search/${searchInput}`))
      .then(() => setSearchInput(''))
  }

  return (
  <>
  {/* search row */}
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
      <div id="form-container">
        <form onSubmit={handleSearch}>
          <div className='search-bar-container'>
            <input style={{border: "2px solid black", width: "43rem", height: "36px"}} className='search-bar' type='text' placeholder="Search for any tee" value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
          </div>
        </form>
      </div>
      <button className='searchbar-button'>Search</button>
    </div>
{/* search results */}
    <div id="search-results">
      <div className="search-bar-list-items">
        {slicedSearchedTeeshirt.map(teeshirt =>
          <div className='search-list-item'
          key={teeshirt.id}
          onClick={() => {
          history.push(`/teeshirts/${teeshirt.id}`);
          setSearchInput('');
        }}>
          {teeshirt.name}
          </div>
        )}
      </div>
    </div>
    <hr style={{marginBottom: "20px"}} className='hr-home'></hr>
  </>
)}


export default SearchBar;




 


