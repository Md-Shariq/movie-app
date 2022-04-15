import React from 'react'
import movieImg from '../../assets/Jumanji.jpg'


export default function MovieCard(props) {
  return (
    <div className='movies-card mb-3' onClick={() => props.handleClick()}>
    <img src={props.img} alt="" className='movies-card-img' />
    <div className='p-2 d-flex justify-content-between flex-column h-100'>
        <div className='d-flex justify-content-end'>
            <button className='btn btn-secondary card-plus-btn'>+</button>
        </div>
        <div className='text-center'>
            <p className='m-0 text-light fs-15 fw-500 ln-10'>{props.name}</p>
            <p className='m-0 text-secondary fs-14 fw-500'>+12 Movies</p>
            <div>
                <i class="fa-solid fa-star golden fs-14 "></i>
                <i class="fa-solid fa-star golden fs-14 "></i>
                <i class="fa-solid fa-star golden fs-14 "></i>
                <i class="fa-solid fa-star golden fs-14 "></i>
                <i class="fa-solid fa-star golden fs-14 "></i>
            </div>
        </div>
    </div>
</div>
  )
}
