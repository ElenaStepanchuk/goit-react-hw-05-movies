import { useParams } from 'react-router-dom';
import { ReviewsFilm } from '../helpers/FetchFilms';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
const TittleRev = styled.h2`
  text-align: left;
  font-weight: 800;
  font-size: 30px;
  text-transform: uppercase;
`;
const DateRev = styled.p`
  font-weight: 400;
  font-size: 18px;
  text-transform: none;
`;
const TextRev = styled.p`
  font-weight: 400;
  font-size: 20px;
  text-transform: none;
  text-align: justify;
`;
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const ReviewsInfo = async () => {
      setLoading(true);
      try {
        const response = await ReviewsFilm(movieId);
        setReviews(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    ReviewsInfo();
  }, [movieId]);
  return (
    <div>
      {loading && <Loader />}
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => {
            return (
              <li key={review.id}>
                <TittleRev>
                  {review.author}&nbsp;
                  <span>
                    {review.author_details.rating || 0}&nbsp;/&nbsp;10
                  </span>
                </TittleRev>
                <DateRev>{review.created_at.slice(0, 10)}</DateRev>
                <TextRev>{review.content}</TextRev>
              </li>
            );
          })
        ) : (
          <li>
            <TextRev>We don`t have any reviews for this movie.</TextRev>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
