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
        <div className='flex'>{movieList.map((item, index) => (
            < img src={IMAGE_BASE_URL + item.backdrop_path} className='min-w-full h-[310px] object-cover' />))

        }</div>
    )
}

export default Slider