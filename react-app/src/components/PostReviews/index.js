import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadCreateReviewThunk } from "../../store/review";
import { useModal } from "../../context/Modal";
import { loadTeeByIdThunk } from "../../store/teeshirt";
import { loadAllReviewsThunk } from "../../store/review";
import './PostReviews.css'

export default function PostReview () {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const teeshirtIdObj = useSelector(state => state.tees.userTees);
    const teeshirtId = Object.values(teeshirtIdObj)[0].id;
    const userId = useSelector(state => state.session.user.id);
    const [review, setReview] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            review: review,
            userId: userId
        };
        await dispatch(loadCreateReviewThunk(teeshirtId, data));
        setIsLoaded(true);
        closeModal();
    }

    useEffect(() => {
        dispatch(loadTeeByIdThunk(teeshirtId));
        dispatch(loadAllReviewsThunk());
        setIsLoaded(false);
    }, [dispatch, teeshirtId, isLoaded]);

    return (
        <div className="post-review-container">   
            <h3 className="textarea-title">Leave Feedback Below</h3>
            <form className="post-review-form" onSubmit={handleSubmit}>
                <label htmlFor="review"></label>
                <textarea
                    placeholder="Write Review Here"
                    type="textarea"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="post-review-input-inside-modal"
                />
                <button className="post-review-btn-inside-modal" type="submit">Post</button>
            </form>
        </div>
    )
}