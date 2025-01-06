import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaImdb } from "react-icons/fa";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  console.log(movieList);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      // console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className="hidden md:block cursor-pointer text-white text-[30px] absolute mx-8 mt-[150px]"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block cursor-pointer text-white text-[30px] absolute mx-8 mt-[150px] right-0 z-10"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="relative flex overflow-x-auto w-full px-4 md:px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <section
            className="relative min-w-full md:h-[390px] mr-5 rounded-md hover:border-[2px] md:hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
            key={index}
          >
            <img
              src={IMAGE_BASE_URL + item.backdrop_path}
              className="min-w-full h-full object-cover object-left-top rounded-md "
            />
            <div className="absolute left-4 top-12 md:top-16 w-[50%] font-bold">
              <h3 className="text-white text-[14px] md:text-[30px]">
                {item.name ? item.name : item.title}
              </h3>

              <div className="flex items-center gap-2 mt-2">
                <FaImdb className="text-[22px] md:text-[30px] bg-yellow-400 text-black" />
                <p className="text-white text-[8px] md:text-[16px]">{item.vote_average}</p>
              </div>

              <p className="text-[10px] md:text-[16px] mt-2 text-white font-light md:font-normal">
                {item.release_date ? item.release_date : item.first_air_date}
              </p>

              <button className="mt-3 md:mt-5 text-[10px] md:text-[16px] bg-red-900 text-white hover:bg-transparent hover:border-gray-400">
                Watch Now
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Slider;
