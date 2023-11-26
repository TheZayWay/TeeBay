import { loadAllReviewsThunk, loadDeleteReviewThunk } from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useModal } from "../../context/Modal";
import { loadTeeByIdThunk } from "../../store/teeshirt";
import './DeleteReview.css'

export default function DeleteReview ({props}) {
    const dispatch = useDispatch();
    const reviewId = props;
    const { closeModal } = useModal();
    const teeshirtIdObj = useSelector(state => state.tees.userTees);
    const teeshirtId = Object.values(teeshirtIdObj)[0].id;
    const [isLoaded, setIsLoaded] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loadDeleteReviewThunk(reviewId));
        setIsLoaded(true);
        closeModal();
    }
    
    const handleCancel = () => {
        closeModal();
    }

    useEffect(() => {
        dispatch(loadTeeByIdThunk(teeshirtId));
        dispatch(loadAllReviewsThunk());
        setIsLoaded(false);
    }, [dispatch, teeshirtId, isLoaded]);
    
    return (
        <div className="post-review-container">
            <form className="delete-review-form" onSubmit={handleSubmit}>
                <h2>Are you sure?</h2>
                <div className="delete-review-btns">
                    <button className="post-review-btn-inside-modal" type="submit">Yes</button>
                    <div className="delete-review-cancel-btn-container">
                        <button onClick={handleCancel} className="post-review-btn-inside-modal" type="submit">Cancel</button>
                    </div>                              
                </div>            
            </form>
        </div>
    )
}