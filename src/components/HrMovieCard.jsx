const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// eslint-disable-next-line react/prop-types
const HrMovieCard = ({ movie }) => (
  <section className="cursor-pointer hover:scale-110 transition-all duration-150 ease-in">
    <img
      src={IMAGE_BASE_URL + movie.backdrop_path}
      alt="movie-poster"
      className=" w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400"
    />
    <h2 className="w-[110px] md:w-[200px] text-white mt-2">{movie.title}</h2>
  </section>
);

export default HrMovieCard;
