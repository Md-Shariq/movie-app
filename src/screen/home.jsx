import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import movieImg from '../assets/Jumanji.jpg'
import Buttton from '../component/button/buttton'
import MovieCard from '../component/movie-card/movieCard'
import NavItem from '../component/nav-item/navItem'
import PopularMovieCard from '../component/popular-movie-card/popularMovieCard'
import Poster from '../component/poster/poster'
import Search from '../component/search/search'
import SideNav from '../component/side-nav/sideNav'
import { popularMovieApi, nowPlayingApi, latestMovieApi, upComingMovieApi } from '../service/apiService'
import { imgSmallPath } from '../service/constant'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {

    const [nowPlayingData, setnowPlayingData] = useState([])
    const [upComingData, setupComingData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getNowPlaying();
        getUpComingMovie();
    }, [])


    function getNowPlaying() {
        nowPlayingApi().then((result) => {
            console.log(result.data);

            setnowPlayingData(result.data.results)
            console.log(result.data.results);
        })
    }


    function getUpComingMovie() {
        upComingMovieApi().then((result) => {
            console.log(result);
            setupComingData(result.data.results)
            console.log(result.data.results);
        })
    }

    function goToDetail(id){
        console.log(id);
         navigate(`/detail/${id}`)
    }





    return (
        <>
            <div className='middle-box pt-5'>
                <div className='mb-3'>
                    <a className='fw-500 text-secondary ps-4 text-decoration-none'>Now Playing</a>
                </div>
                {/* <div className='now-playing-list'>
                    {
                        nowPlayingData.map((data) => {
                            return (
                                <Poster img={data.backdrop_path} rating={data.vote_average} posterName={data.original_title} types="ACTION,ADVENTURE,COMEDY" match="%94 Match" handleClick={() => goToDetail(data.id)}  />
                            )
                        })          
                    }

                </div> */}
                <Carousel centerSlidePercentage={80} >
                {
                        nowPlayingData.map((data) => {
                            return (
                                <div>
                                     <Poster img={data.backdrop_path} rating={data.vote_average} posterName={data.original_title} types="ACTION,ADVENTURE,COMEDY" match="%94 Match" handleClick={() => goToDetail(data.id)}  />
                                </div>
                               
                            )
                        })          
                    }
            </Carousel>

                <div>
                    <p className='fw-500 text-secondary pt-4'>Up Coming</p>
                    <div className='row'>

                        {
                            upComingData.map((data) => {
                                return (
                                    <div className='col-md-3'>
                                        <MovieCard img={imgSmallPath + data.poster_path} name={data.title} handleClick={()=>goToDetail(data.id)}/>
                                    </div>
                                );
                            })

                        }

                        {/* <div className='col-md-3'>
                            <MovieCard />
                        </div>
                        <div className='col-md-3'>
                            <MovieCard />
                        </div>
                        <div className='col-md-3'>
                            <MovieCard />
                        </div>
                        <div className='col-md-3'>
                            <MovieCard />
                        </div>
                        <div className='col-md-3'>
                            <MovieCard />
                        </div>
                        <div className='col-md-3'>
                            <MovieCard />
                        </div>
                        <div className='col-md-3'>
                            <MovieCard />
                        </div> */}
                    </div>
                </div>
            </div>
        </>

    )
}
