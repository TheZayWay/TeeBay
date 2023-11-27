import { loadAllReviewsThunk } from '../../store/review'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import OpenModalButton from '../OpenModalButton';
import DeleteReview from '../DeleteReviews';
import EditReview from '../EditReview';
import './reviews.css'

export default function SeeReviews() {
    const dispatch = useDispatch();
    const allReviewsArr = useSelector((state => state.review?.allReviews?.reviews));
    const param = useParams();
    const teeshirtId = Number(param.teeshirtId);
    const usersName = useSelector(state => state.session.user.first_name);

    useEffect(() => {
        dispatch(loadAllReviewsThunk())
    }, [dispatch])

    return (
      <>
        <div>
          {allReviewsArr ? (
            allReviewsArr.map((review) => {
              if (review.teeshirt_id === teeshirtId) {
                return (
                  <>
                    <div className='reviews-user-profile'>
                      <i className="fas fa-user fa-2x"></i>             
                      <h3 style={{fontSize: "16px", paddingLeft: "1rem", paddingTop: "0.5rem"}}>{review.User.first_name}</h3>
                    </div>  
                    <div className='see-reviews-review-container'>
                      <h4 key={review.id}>{review.review}</h4>
                      { usersName === review.User.first_name ? 
                      <div>
                        <OpenModalButton 
                        buttonText={"Delete"}
                        modalComponent={<DeleteReview props={review.id}/>}
                        /> 
                        <OpenModalButton 
                        buttonText={"Edit"}
                        modalComponent={<EditReview props={review.id} />}
                        />
                      </div>
                      : "" }
                    </div>                 
                  </>
                )}       
              })
            ) : (
            <span>There are no reviews</span>
            )}
        </div>
      </>
    )
}