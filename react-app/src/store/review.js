const GET_ALL_REVIEWS = 'reviews/getAllReviews';
const GET_ALL_USER_REVIEWS = '/reviews/getAllUserReviews';
const CREATE_REVIEW = '/reviews/createReview';
const EDIT_REVIEW = '/reviews/editReviews';
const DELETE_REVIEW = '/reviews/deleteReviews';


const loadAllReviews = (reviews) => {
    return {
        type: GET_ALL_REVIEWS,
        reviews
    }
};

const loadAllUserReviews = (reviews) => {
    return {
        type: GET_ALL_USER_REVIEWS,
        reviews
    }
};

const loadCreateReview = (reviews) => {
    return {
        type: CREATE_REVIEW,
        reviews
    }
};

const loadEditReview = (review) => {
    return {
        type: EDIT_REVIEW,
        review
    }
};

const loadDeleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
};

export const loadAllReviewsThunk = () => async (dispatch) => {
    const response = await fetch('/api/reviews');
    if (response.ok) {
        const reviews = await response.json();        
        dispatch(loadAllReviews(reviews));
        return reviews;
    } 
    
};

export const loadAllUserReviewsThunk = () => async (dispatch) => {
    const response = await fetch('/api/reviews/current')
    if (response.ok) {
        const userReviews = await response.json();
        const userReviewsArr = Object.values(userReviews)[0];
        dispatch(loadAllUserReviews(userReviewsArr));
        return userReviewsArr;
    }
};

export const loadCreateReviewThunk = (teeshirtId, review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${teeshirtId}/review/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review)
    });
    
    if (response.ok) {
        const newReview = await response.json();
        dispatch(loadCreateReview(newReview))
        return newReview
    }
}

export const loadEditReviewThunk = (reviewId, review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}/update/`, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    });

    if (response.ok) {
        const updatedReview = await response.json();
        dispatch(loadEditReview(updatedReview));
        return updatedReview;
    }
};

export const loadDeleteReviewThunk = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/delete/${reviewId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        dispatch(loadDeleteReview(reviewId));
    }
};

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_REVIEWS: {
            const newState = {
                ...state,
                allReviews: action.reviews            
            }
            return newState;
        }
        case GET_ALL_USER_REVIEWS: {
            const newState = {...state,
                userReviews: action.reviews
            }
            return newState;
        }
        case CREATE_REVIEW: {
            const newState = {...state
            };
            newState.allReviews.reviews[action.reviews.id] = action.reviews;
            return newState;
        }
        case EDIT_REVIEW: {
            const newState = {...state}
            // newState.allReviews[action.reviews.id] = action.reviews.review;
            return newState;
        }
        case DELETE_REVIEW: {
            const newState = {...state};
            delete newState.allReviews[action.teeId];
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default reviewReducer