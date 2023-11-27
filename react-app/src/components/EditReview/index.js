import { useDispatch, useSelector } from "react-redux";
import { loadEditReviewThunk, loadAllReviewsThunk } from "../../store/review";
import { useState, useEffect } from "react";
import { useModal } from "../../context/Modal";
import { loadTeeByIdThunk } from "../../store/teeshirt";


export default function EditReview ({props}) {
    const reviewId = props;
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const teeshirtIdObj = useSelector(state => state.tees.userTees);
    const teeshirtId = Object.values(teeshirtIdObj)[0].id;
    const [review, setReview] = useState("")
    const [isLoaded, setIsLoaded] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReview = {
            review: review
        };
        await dispatch(loadEditReviewThunk(reviewId, newReview));
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
            <h3 className="textarea-title">Edit Feedback Below</h3>
            <form className="post-review-form" onSubmit={handleSubmit}>
                <textarea
                    placeholder="Edit Your Existing Review"
                    type="textarea"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="post-review-input-inside-modal"
                />
                <button className="post-review-btn-inside-modal" type="submit">Edit</button>
            </form>
        </div>
    )
}