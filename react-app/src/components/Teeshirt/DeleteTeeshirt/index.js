import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal"
import { loadDeleteTeeThunk } from "../../../store/teeshirt";
import "./DeleteTeeshirt.css"

export default function DeleteTeeshirt ({props}) {
    const teeshirtId = props;
    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal();

    const handleClick =  async (e) => {
        e.preventDefault();
        await dispatch(loadDeleteTeeThunk(teeshirtId))
            .then(() => history.push("/"))
            .then(() => closeModal())
    }

    return (
        <div className="delete-spot-modal-container">
            <div className="delete-pop-up">
                <div className="delete-header-close-button"></div>
                <form className="delete-form-container" onSubmit={handleClick}>
                    <button className="spot-delete-button" type="submit">Delete</button>
                </form>
            </div>
        </div>
    )
}