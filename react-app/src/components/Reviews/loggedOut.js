import { loadAllReviewsThunk } from '../../store/review'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './reviews.css'


export default function SeeReviewsLoggedOut() {
    const dispatch = useDispatch();
    const allReviewsArr = useSelector((state => state.review?.allReviews?.reviews));
    const param = useParams();
    const teeshirtId = Number(param.teeshirtId);

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
                      <div style={{fontSize: "16px", paddingLeft: "1rem", paddingTop: "0.5rem"}}>{review.User.first_name}</div>
                    </div>                    
                    <h4 style={{fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"}} key={review.id}>{review.review}</h4>
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