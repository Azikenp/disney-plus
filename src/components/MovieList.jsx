import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";

const MovieList = ({ genreId }) => {
  const [MovieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieByGenreId();
  });

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      //   console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };

  return (
    <div>
      {MovieList.map((item, index) => (
        <MovieCard />
      ))}
    </div>
  );
};

export default MovieList;
