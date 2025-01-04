const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={IMAGE_BASE_URL + movie.poster_path} alt="movie" />
    </div>
  );
};

export default MovieCard;
