import React from 'react'
import movieImg from '../../assets/Jumanji.jpg'


export default function PopularMovieCard(props) {
    return (
        <div className='popular-movie-box'>
            <div className='popular-movie-img'>
                <img src={props.img} alt="" className='popular-movie-img-wrapper' />
            </div>
            <div className='popular-movie-detail ps-3'>
                <p className='m-0 fw-500 ln-16'>{props.name}</p>
                <p className='fs-14 text-secondary '>{props.type}</p>
                <p className='m-0 fs-14'>Rating <span className='text-secondary'>{props.rating}</span></p>
            </div>
        </div>
    )
}
