import { useParams } from 'react-router-dom';
import { ReviewsFilm } from '../helpers/FetchFilms';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const Tittle = styled.h2`
    text-align: left;
    font-weight: 800;
    font-size: 30px;
    text-transform: uppercase;
  `;
  const Date = styled.p`
    font-weight: 400;
    font-size: 18px;
    text-transform: none;
    /* text-align: right; */
  `;
  const Text = styled.p`
    font-weight: 400;
    font-size: 20px;
    text-transform: none;
    text-align: justify;
  `;

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
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <Tittle>
                {review.author}&nbsp;
                <span>{review.author_details.rating || 0}&nbsp;/&nbsp;10</span>
              </Tittle>
              <Date>{review.created_at.slice(0, 10)}</Date>
              <Text>{review.content}</Text>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Reviews;
