import GenresList from "../constants/GenresList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      {GenresList.genre.map(
        (item, index) =>
          index <= 4 && (
            <div key={index} className="p-8 px-8">
              <h2 className="text-[20]x] text-white font-bold">{item.name}</h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
