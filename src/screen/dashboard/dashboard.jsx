import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Buttton from '../../component/button/buttton'
import PopularMovieCard from '../../component/popular-movie-card/popularMovieCard'
import Search from '../../component/search/search'
import SideNav from '../../component/side-nav/sideNav'
import { latestMovieAoi, latestMovieApi, popularMovieApi, searchApi } from '../../service/apiService'
import Home from '../home'
import movieImg from '../../assets/Jumanji.jpg'
import { imgSmallPath } from '../../service/constant'

export default function Dashboard() {

    const [popularMovieData, setpopularMovieData] = useState([])


    useEffect(() => {

        getPopularMovie();


    }, [])

    function getPopularMovie() {
        popularMovieApi().then((result) => {
            console.log(result);
            setpopularMovieData(result.data.results)
            console.log(result.data.results);
        })
    }


    function search(searchValue) {
        console.log(searchValue);
        searchApi(searchValue).then((result) => {
            console.log(result);
            setpopularMovieData(result.data.results)
        })
    }

    

    return (
        <>
            <div className='row'>
                <div className='col-md-2'>
                    <SideNav />
                </div>
                <div className='col-md-7'>
                    <Outlet />
                </div>
                <div className='col-md-3'>
                    <div className='right-box'>
                        <div className='container '>
                            <Search handleClick={(value) => search(value)} />
                            <p className='pt-4 select-movies'>Movies</p>
                            {
                                popularMovieData.map((data) => {
                                    return (
                                        <PopularMovieCard name={data.title} type="Action" rating={data.vote_average} img={imgSmallPath + data.poster_path} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
