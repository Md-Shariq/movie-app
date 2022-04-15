import React from 'react'
import movieImg from '../../assets/Jumanji.jpg'
import { imgOriginalPath } from '../../service/constant'
import Buttton from '../button/buttton'


export default function Poster(props) {
    return (
       
       
        <div className='main-movie-box' onClick={() => props.handleClick()}>
            <img src={imgOriginalPath+props.img} alt="" className='movie-poster' />
            <div className='p-4 d-flex justify-content-between flex-column h-100'>
                <div>
                    <p className='text-light'>Rating {props.rating}</p>
                </div>

                <div>
                    <p className='text-light m-0 fw-500 fs-2'>{props.posterName}</p>
                    <p className='text-secondary fs-14'><span>{props.types}</span> <span className='text-light'> {props.match}</span></p>
                    <div className='d-flex'>
                       
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}
