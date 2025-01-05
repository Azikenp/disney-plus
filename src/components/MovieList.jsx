import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const MovieList = ({ genreId }) => {
  const [MovieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  });

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      //   console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div>
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute mt-[150px]`}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-8 pt-5 px-3 pb-5"
      >
        {MovieList.map((item, index) => (
          <MovieCard movie={item} key={index} />
        ))}
      </div>

      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white
          p-2 z-10 cursor-pointer 
           hidden md:block absolute mt-[150px]`}
      />
    </div>
  );
};

export default MovieList;
