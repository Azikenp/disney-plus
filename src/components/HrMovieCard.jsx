const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// eslint-disable-next-line react/prop-types
const HrMovieCard = ({ movie }) => (
  <>
    <img
      src={IMAGE_BASE_URL + movie.backdrop_path}
      alt="movie-poster"
      className="cursor-pointer w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in"
    />
  </>
);

export default HrMovieCard;