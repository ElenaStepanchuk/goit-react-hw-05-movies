import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { DetailsFilm } from '../helpers/FetchFilms';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FcLeft, FcClapperboard, FcVoicePresentation } from 'react-icons/fc';
import noPoster from '../images/no-poster.jpg';
import Loader from './Loader';

const WrapperDet = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
  justify-content: center;
  width: 460px;
  padding: 20px;
  color: white;
`;
const TittleDet = styled.h2`
  text-align: center;
  font-weight: 800;
  font-size: 30px;
  text-transform: uppercase;
`;
const SecondTittleDet = styled.h3`
  font-weight: 800;
  font-size: 20px;
  text-transform: uppercase;
  width: 460px;
  text-align: center;
`;
const SpanDet = styled.span`
  font-weight: 400;
  font-size: 20px;
  text-transform: none;
`;
const TextDet = styled.p`
  font-weight: 400;
  font-size: 20px;
  text-transform: none;
  text-align: justify;
`;
const LinkADet = styled.a`
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: white;
  margin-bottom: 20px;
  text-transform: none;
`;
const DetailsLink = styled(Link)`
  display: block;
  margin-left: 20px;
  background: rgb(0, 255, 255);
  box-shadow: -1px -1px 9px 6px rgb(0, 255, 255, 0.5);
  border: solid 1px rgb(0, 255, 255);
  border-radius: 5px;
  color: rgb(2, 16, 141);
  text-align: center;
  font-style: italic;
  padding: 15px;
  font-weight: 900;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
`;
const BacklsLink = styled(Link)`
  display: block;
  background: rgb(0, 255, 255);
  box-shadow: -1px -1px 9px 6px rgb(0, 255, 255, 0.5);
  border: solid 1px rgb(0, 255, 255);
  border-radius: 5px;
  color: rgb(2, 16, 141);
  text-align: center;
  font-style: italic;
  padding: 15px;
  font-weight: 900;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
`;
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const GetDetails = async () => {
      setLoading(true);
      try {
        const response = await DetailsFilm(movieId);
        setDetail(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    GetDetails();
  }, [movieId]);
  return (
    <WrapperDet>
      {loading && <Loader />}
      {detail && <TittleDet>{detail.original_title || detail.name}</TittleDet>}
      <SecondTittleDet>
        Release date:&nbsp;{detail && <SpanDet>{detail.release_date}</SpanDet>}
      </SecondTittleDet>
      {detail && detail.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${detail.poster_path}`}
          alt={detail.original_title || detail.name}
        />
      ) : (
        <img src={noPoster} alt={'Poster not available'} width="300px" />
      )}
      <SecondTittleDet>
        Genres:&nbsp;
        {detail &&
          detail.genres.map(genre => {
            const id = nanoid();
            return <SpanDet key={id}>&nbsp;{genre.name}</SpanDet>;
          })}
      </SecondTittleDet>
      <SecondTittleDet>Descriptions: </SecondTittleDet>
      {detail && <TextDet>{detail.overview}</TextDet>}
      <SecondTittleDet>
        Homepage:
        {detail && (
          <LinkADet href={`${detail.homepage}`}> Link to homepage</LinkADet>
        )}
      </SecondTittleDet>
      <BacklsLink to={location?.state?.from || '/'}>
        <FcLeft /> Go back
      </BacklsLink>
      <DetailsLink to={`/movies/${movieId}/cast`} state={{ from: location }}>
        <FcClapperboard />
        Cast
      </DetailsLink>
      <DetailsLink to={`/movies/${movieId}/reviews`} state={{ from: location }}>
        <FcVoicePresentation />
        Reviews
      </DetailsLink>
      <Outlet />
    </WrapperDet>
  );
};
export default MovieDetailsPage;
