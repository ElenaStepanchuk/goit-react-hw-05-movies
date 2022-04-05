import styled from 'styled-components';
// import GalleryItemTrending from './GalleryImgTrending';
const Gallery = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 340px 340px 340px 340px;
  margin-top: -20px;
  margin-left: -40px;
`;
const GalleryItem = styled.li`
  list-style: none;
  padding: 20px;
`;
const GalleryListTrendFilms = ({ films }) => {
  return (
    <Gallery>
      {films &&
        films.map(film => (
          <GalleryItem key={film.id}>
            {/* <GalleryItemTrending films={films} location={location} /> */}
            {/* <GalleryItemLink
              to={{
                pathname: `/movies/${film.id}`,
                state: { from: location },
              }}
            >
              {film.poster_path ? (
                <GalleryImgTrending film={film} />
              ) : (
                <img src={noPoster} alt={film.original_title} width="300px" />
              )}
              <GalleryItemTittle>
                {film.original_title || film.name}
              </GalleryItemTittle>
            </GalleryItemLink> */}
          </GalleryItem>
        ))}
    </Gallery>
  );
};
export default GalleryListTrendFilms;
