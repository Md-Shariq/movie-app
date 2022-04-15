import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BilledCastCard from '../../component/billed-cast-card/billedCastCard';
import { tvDetailApi } from '../../service/apiService';
import { imgSmallPath } from '../../service/constant';
import "./tvDetail.css"

export default function TvDetail() {

    const [tvDetailData, settvDetailData] = useState(null)
     const data = useParams();


useEffect(() => {
   getTvDetail(data.id);
   console.log(data);
}, [])


    function getTvDetail(id){
        tvDetailApi(id).then((result)=>{
            console.log(result);
            settvDetailData(result.data)
            console.log(result.data);
        })
    }

    if (tvDetailData === null) return <p>Loading.....</p>
  return (
    <>
    <div className='detail-box'>
        <div className='row'>
            <div className='col-md-4'>
                <div className='detail-img-wrapper'>
                    <img src={imgSmallPath+tvDetailData.poster_path} alt="" className='detail-img' />
                </div>

            </div>
            <div className='col-md-8'>
                <p className='text-light fs-33 fw-500 m-0'>{tvDetailData.title} <span className='fw-400 fs-28'>(2022)</span></p>
                <p className='fs-14 text-light'><span>{tvDetailData.release_date}</span> .
                {tvDetailData.genres.map((data)=>{
                    return <span>{data.name},</span>;
                })}
                  . <span>2h 56m</span></p>
                <div className='mb-2'>
                    <p className='m-0 text-light fw-500'>User Score</p>
                    <p className='text-light m-0 fs-14'>79%</p>
                </div>
                <div className='mb-3'>
                    <p className='m-0 text-light fw-500'>Overview</p>
                    <p className='text-light m-0 fs-13'>{tvDetailData.overview}</p>
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
        <p className='text-secondary fw-500'>Top Billed Cast</p>
    </div>
    <div className='row'>
        <div className='col-md-10'>
            <div className='billed-cast-wrapper'>

                <BilledCastCard />
                <BilledCastCard />
                <BilledCastCard />
                <BilledCastCard />
                <BilledCastCard />
                <BilledCastCard />

            </div>
        </div>
        <div className='col-md-2 '  >
            <div>
                <p className='fs-14 fw-500 m-0'>Status</p>
                <p className='fs-13'>{tvDetailData.status}</p>
                <p className='fs-14 fw-500 m-0'>Original Language</p>
                {
                    tvDetailData.spoken_languages.map((data)=>{
                        return(
                            <p className='fs-13'>{data.english_name},</p>
                        )
                    })
                }
                <p className='fs-13'>English</p>
                <p className='fs-14 fw-500 m-0'>Budget</p>
                <p className='fs-13'>{tvDetailData.budget}</p>
                <p className='fs-14 fw-500 m-0'>Revenue</p>
                <p className='fs-13'>$240,000,000.00</p>
            </div>
        </div>
    </div>
</>

  )
}
