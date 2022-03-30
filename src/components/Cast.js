import { useParams } from 'react-router-dom';
import { CastFilm } from '../helpers/FetchFilms';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import styled from 'styled-components';
import noPoster from '../images/no-poster.jpg';
const Tittle = styled.h2`
  text-align: center;
  font-weight: 800;
  font-size: 20px;
  text-transform: uppercase;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;
const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const CastInfo = async () => {
      setLoading(true);
      try {
        const response = await CastFilm(movieId);
        setCasts(response.data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    CastInfo();
  }, [movieId]);

  return (
    <Wrapper>
      {loading && <Loader />}
      <ul>
        {casts &&
          casts.map(cast => (
            <li key={cast.cast_id}>
              <Tittle>{cast.name}</Tittle>
              {cast.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                  alt={cast.original_name}
                />
              ) : (
                <img src={noPoster} alt={cast.original_name} width="300px" />
              )}
            </li>
          ))}
      </ul>
    </Wrapper>
  );
};
export default Cast;
