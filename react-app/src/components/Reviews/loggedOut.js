import { loadAllReviewsThunk } from '../../store/review'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

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
        <h2>Reviews:</h2>    
        <div>
          {allReviewsArr ? (
            allReviewsArr.map((review) => {
              if (review.teeshirt_id === teeshirtId) {
                return <>              
                  <div>{review.User.first_name}</div>
                  <h3 key={review.id}>{review.review}</h3>
                  </>
                }       
              })
            ) : (
            <span>There are no reviews</span>
            )}
        </div>
      </>
    )
}