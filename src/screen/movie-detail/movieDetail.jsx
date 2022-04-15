import React, { useEffect, useState } from 'react'
import "./movieDetail.css"
import movieImg from './../../assets/Jumanji.jpg'
import BilledCastCard from '../../component/billed-cast-card/billedCastCard'
import { movieDetailApi, movieImageApi, movieRecommendationsApi, tvDetailApi } from '../../service/apiService'
import { useParams } from 'react-router-dom'
import { imgSmallPath } from '../../service/constant'


export default function MovieDetail() {

   const [movieDetailData, setmovieDetailData] = useState(null)
   const [movieRecommendationsData, setmoviegetRecommendationsData] = useState([])

    const data = useParams();

    useEffect(() => {
        getMovieDetail(data.id);
        console.log(data);
        getMovieImage(data.id);
        getRecommendations(data.id);
    }, [])

   
    function getMovieImage(id){
        movieImageApi(id).then((result)=>{
            console.log(result.data);

        })
    }

    function getMovieDetail(id){
        movieDetailApi(id).then((result)=>{
            console.log(result);
            setmovieDetailData(result.data)
            console.log(result.data);
        })
    }

    function getRecommendations(id){
        movieRecommendationsApi(id).then((result)=>{
            console.log(result);
            setmoviegetRecommendationsData(result.data.results)
            console.log(result.data.results);
        })
    }

    if (movieDetailData === null) return <p>Loading.....</p>
    return (
        <>
            <div className='detail-box'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='detail-img-wrapper'>
                            <img src={imgSmallPath+movieDetailData.poster_path} alt="" className='detail-img' />
                        </div>

                    </div>
                    <div className='col-md-8'>
                        <p className='text-light fs-33 fw-500 m-0'>{movieDetailData.title} <span className='fw-400 fs-28'>(2022)</span></p>
                        <p className='fs-14 text-light'><span>{movieDetailData.release_date}</span> .
                        {movieDetailData.genres.map((data)=>{
                            return <span>{data.name},</span>;
                        })}
                          . <span>2h 56m</span></p>
                        <div className='mb-2'>
                            <p className='m-0 text-light fw-500'>User Score</p>
                            <p className='text-light m-0 fs-14'>79%</p>
                        </div>
                        <div className='mb-3'>
                            <p className='m-0 text-light fw-500'>Overview</p>
                            <p className='text-light m-0 fs-13'>{movieDetailData.overview}</p>
                        </div>
                        <div className='d-flex justify-content-between mb-2'>
                            <div>
                                <p className='m-0 text-light fw-500'>Charise Castro Smith</p>
                                <p className='text-light m-0 fs-13'>Director, Screenplay</p>
                            </div>
                            <div>
                                <p className='m-0 text-light fw-500'>Jared Bush</p>
                                <p className='text-light m-0 fs-13'>Director, Screenplay</p>
                            </div>
                            <div>
                                <p className='m-0 text-light fw-500'>Byron Howard</p>
                                <p className='text-light m-0 fs-13'>Director</p>
                            </div>

                        </div>
                        <div>
                            <p className='m-0 text-light fw-500'>Byron Howard</p>
                            <p className='text-light m-0 fs-13'>Director</p>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <p className='text-secondary fw-500'>Recommendations Movie</p>
            </div>
            <div className='row'>
                <div className='col-md-10'>
                    <div className='billed-cast-wrapper'>
                   {
                     movieRecommendationsData.map((data)=>{
                         return(
                            <BilledCastCard img={imgSmallPath+data.poster_path} name={data.title}/>
                         )
                     })

                   }

                    </div>
                </div>
                <div className='col-md-2 '  >
                    <div>
                        <p className='fs-14 fw-500 m-0'>Status</p>
                        <p className='fs-13'>{movieDetailData.status}</p>
                        <p className='fs-14 fw-500 m-0'>Original Language</p>
                        {
                            movieDetailData.spoken_languages.map((data)=>{
                                return(
                                    <p className='fs-13'>{data.english_name},</p>
                                )
                            })
                        }
                        <p className='fs-13'>English</p>
                        <p className='fs-14 fw-500 m-0'>Budget</p>
                        <p className='fs-13'>{movieDetailData.budget}</p>
                        <p className='fs-14 fw-500 m-0'>Revenue</p>
                        <p className='fs-13'>$240,000,000.00</p>
                    </div>
                </div>
            </div>
        </>

    )
}

