import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { loadEditTeeThunk, loadTeeByIdThunk } from "../../store/teeshirt";
import { logout } from "../../store/session";
import './UpdateListing.css'
import { useParams } from "react-router-dom";


export default function UpdateListingForm() {
  const dispatch = useDispatch();
  const {teeshirtId} = useParams();
  const history = useHistory();
  const state = useSelector((state) => state.tees);
  const user = state.user
  const teeshirt = state.allTees[teeshirtId];
  const [name, setName] = useState(teeshirt?.name || JSON.parse(localStorage.getItem('name')))
  const [type, setType] = useState(teeshirt?.type || JSON.parse(localStorage.getItem('type')))
  const [description, setDescription] = useState(teeshirt?.description || JSON.parse(localStorage.getItem('description')));
  const [image_url, setImage_Url] = useState(teeshirt?.image_url || JSON.parse(localStorage.getItem('image_url')));
  const [brand, setBrand] = useState(teeshirt?.brand || JSON.parse(localStorage.getItem('brand')));
  const [price, setPrice] = useState(teeshirt?.price || JSON.parse(localStorage.getItem('price')));
  const [color, setColor] = useState(teeshirt?.color || JSON.parse(localStorage.getItem('color')));
  const [errors, setErrors] = useState([]);
 
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name))
    localStorage.setItem("type", JSON.stringify(type))
    localStorage.setItem("description", JSON.stringify(description))
    localStorage.setItem("image_url", JSON.stringify(image_url))
    localStorage.setItem("brand", JSON.stringify(brand))
    localStorage.setItem("price", JSON.stringify(price))
    localStorage.setItem("color", JSON.stringify(color))
  }, [name, type, description, image_url, brand, price, color])

const handleSubmit = async (e) => {
      e.preventDefault();
      const validationErrors = [];

      const parsedPrice = parseFloat(price);
      if (isNaN(parsedPrice) || parsedPrice <= 0 || !Number.isInteger(parsedPrice)) {
        setErrors(["Please enter a valid whole number greater than 0 for the price."]);
      return;
      }

      if (!color.length) {
        validationErrors.push("Please enter a color.")
      }
     
      if (validationErrors.length > 0) {
        setErrors(validationErrors);
        return;
  }
  setErrors([]);
      
      const teeshirt = {
        name: name,
        type: type,
        description: description,
        image_url: image_url,
        brand: brand,
        price: parsedPrice,
        color: color,
      };
      
      const newTeeshirt = await dispatch(loadEditTeeThunk(teeshirtId,teeshirt));
      console.log(newTeeshirt, "newnew")
      history.push(`/teeshirts/${newTeeshirt.id}`);
  }
      
    return (
    <>
    <Link style={{fontFamily: "Roboto, 'Courier New', monospace", textDecoration: "none", fontWeight: "bold", fontSize: "36px"}} className="selling-form-logo" to="/">
      <span style={{color: "#0064D2"}}>T</span>
      <span style={{color: "#FDB900"}}>e</span>
      <span style={{color: "#00B140"}}>e</span>
      <span style={{color: "#E53238"}}>B</span>
      <span style={{color: "#0064D2"}}>a</span>
      <span style={{color: "#FDB900"}}>y</span>
    </Link>
    <hr style={{border: "none", borderTop: "1px solid lightgray"}}></hr>
    <h2 style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}>Update your listing</h2>

    {errors.length > 0 && (
        <div style={{ color: "red", marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "center"}}>
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}

    <form className="update-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"></label>
        <input
          placeholder="Name"
          type="text"
          className="update-form-inputs"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={20}
          required
        />
      </div>
      <div>
        <label htmlFor="Type"></label>
        <select
          placeholder="Type"
          type=""
          className="update-form-inputs"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option>Short Sleeve</option> 
          <option>Long Sleeve</option>
          <option>Button Short Sleeve</option>
          <option>Button Long Sleeve</option>
          <option>Thermal</option>
          <option>Undershirt</option>
        </select>
      </div>
      <div>
        <label htmlFor="description"></label>
        <textarea
          placeholder="Description"
          className="update-form-inputs"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="image_url"></label>
        <input 
          placeholder="Image Url"
          type="text"
          className="update-form-inputs"
          value={image_url}
          onChange={(e) => setImage_Url(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="brand"></label>
        <input 
          placeholder="Brand"
          type="text"
          className="update-form-inputs"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price"></label>
        <input 
          placeholder="Price"
          type="number"
          className="update-form-inputs"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="color"></label>
        <input 
          placeholder="Color"
          type="text"
          className="update-form-inputs"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          maxLength={15}
        />
      </div>
      <button type="submit">Update Listing</button>
    </form>
    </>  
    )
}