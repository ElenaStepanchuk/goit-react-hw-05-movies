import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { DetailsFilm } from '../helpers/FetchFilms';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FcLeft, FcClapperboard, FcVoicePresentation } from 'react-icons/fc';
import noPoster from '../images/no-poster.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
  justify-content: center;
  width: 460px;
  padding: 20px;
  color: white;
`;
const Tittle = styled.h2`
  text-align: center;
  font-weight: 800;
  font-size: 30px;
  text-transform: uppercase;
`;
const SecondTittle = styled.h3`
  font-weight: 800;
  font-size: 20px;
  text-transform: uppercase;
  width: 460px;
  text-align: center;
  /* margin: 0 auto; */
`;
const Span = styled.span`
  font-weight: 400;
  font-size: 20px;
  text-transform: none;
`;
const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  text-transform: none;
`;
const LinkA = styled.a`
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: white;
  margin-bottom: 20px;
  text-transform: none;
`;
const BackBtn = styled.button`
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
const LinkBtn = styled(Link)`
  text-decoration: none;
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

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const Details = async () => {
      setLoading(true);
      try {
        const response = await DetailsFilm(movieId);
        // console.log(response.data);
        setDetail(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    Details();
  }, [movieId]);
  const handleBackBtn = () => {
    setDetail(null);
  };
  return (
    <Wrapper>
      {loading && <h1>Loading...</h1>}
      {detail && <Tittle>{detail.original_title || detail.name}</Tittle>}
      <SecondTittle>
        Release date:&nbsp;{detail && <Span>{detail.release_date}</Span>}
      </SecondTittle>
      {detail && detail.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${detail.poster_path}`}
          alt={detail.original_title || detail.name}
        />
      ) : (
        <img src={noPoster} alt={'Poster not available'} width="300px" />
      )}
      <SecondTittle>
        Genres:&nbsp;
        {detail &&
          detail.genres.map(genre => {
            const id = nanoid();
            return <Span key={id}>&nbsp;{genre.name}</Span>;
          })}
      </SecondTittle>
      <SecondTittle>Descriptions: </SecondTittle>
      {detail && <Text>{detail.overview}</Text>}
      <SecondTittle>
        Homepage:
        {detail && <LinkA href={`${detail.homepage}`}> Link to homepage</LinkA>}
      </SecondTittle>
      <LinkBtn to={`/${location}`}>
        <BackBtn type="button" onChange={handleBackBtn}>
          <FcLeft /> Go back
        </BackBtn>
      </LinkBtn>
      <DetailsLink to={`/movies/${movieId}/cast`}>
        <FcClapperboard />
        Cast
      </DetailsLink>
      <DetailsLink to={`/movies/${movieId}/reviews`}>
        <FcVoicePresentation />
        Reviews
      </DetailsLink>
      <Outlet />
    </Wrapper>
  );
};
export default MovieDetailsPage;
