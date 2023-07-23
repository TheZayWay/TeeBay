import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { loadCreateTeeThunk } from "../../store/teeshirt";
import './SellingForm.css'

export default function CreateTeeshirtForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  const userId = state.session.user.id;
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImage_Url] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
      e.preventDefault();

      const validationErrors = [];

      const parsedPrice = parseFloat(price);
      if (isNaN(parsedPrice) || parsedPrice <= 0 || !Number.isInteger(parsedPrice)) {
        setErrors(["Please enter a valid whole number greater than 0 for the price."]);
        return;
      }

      if (name.length > 25) {
        validationErrors.push("Name must be less than 25 characters.");
      }     

      if (!name.length) {
        validationErrors.push("Please enter a name.")
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
      
      const newTeeshirt = await dispatch(loadCreateTeeThunk(userId,teeshirt));
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
      <h2 style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}>Start your listing</h2>

      {errors.length > 0 && (
        <div style={{ color: "red", marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "center"}}>
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}

      <form className="selling-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"></label>
        <input
          placeholder="Name"
          type="text"
          className="selling-form-inputs"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={25}
          required
        />
      </div>
      <div>
        <label htmlFor="Type"></label>
        <select
          placeholder="Type"
          type=""
          className="selling-form-inputs"
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
          className="selling-form-inputs"
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
          className="selling-form-inputs"
          value={image_url}
          onChange={(e) => setImage_Url(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="brand"></label>
        <input 
          placeholder="Brand"
          type="text"
          className="selling-form-inputs"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price"></label>
        <input 
          placeholder="Price"
          type="number"
          className="selling-form-inputs"
          min="1"
          step="1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="color"></label>
        <input 
          placeholder="Color"
          type="text"
          className="selling-form-inputs"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          maxLength={15}
        />
      </div>
      <button type="submit">Post Listing</button>
    </form>
    </>
    )
}


