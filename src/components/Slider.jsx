import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

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
        className="hidden md:block cursor-pointer text-white text-[30px] absolute mx-8 mt-[150px] z-10"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block cursor-pointer text-white text-[30px] absolute mx-8 mt-[150px] right-0 z-10"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="relative flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <section
            className="relative min-w-full md:h-[310px] mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
            key={index}
          >
            <img
              src={IMAGE_BASE_URL + item.backdrop_path}
              className="min-w-full h-full object-cover object-left-top rounded-md "
            />
            <div className="absolute text-white text-[40px] left-4 top-20 w-[50%] font-extrabold">
              <h3 className="">{item.name ? item.name : item.title}</h3>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Slider;
