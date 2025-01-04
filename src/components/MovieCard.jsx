const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// eslint-disable-next-line react/prop-types
const MovieCard = ({ movie }) => (
  <>
    <img
      src={IMAGE_BASE_URL + movie.poster_path}
      alt="movie-poster"
      className="w-[110px] md:w-[200px] rounded-lg mt-2 hover:border-[3px] border-gray- hover:scale-105 transition-all duration-100 ease-in-out"
    />
  </>
);

export default MovieCard;
