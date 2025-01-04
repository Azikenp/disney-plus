import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
    const [movieList, setMovieList] = useState([])

    useEffect(() => { getTrendingMovies() }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(res => {
            console.log(res.data.results);
            setMovieList(res.data.results);
        })
    }


    return (
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide'>
            {
                movieList.map((item, index) => (
                    < img key={index} src={IMAGE_BASE_URL + item.backdrop_path} className='min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md' />
                )
                )
            }
        </div>
    )
}

export default Slider