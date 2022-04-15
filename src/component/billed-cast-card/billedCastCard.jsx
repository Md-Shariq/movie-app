import React from 'react'
import "./billedCastCard.css"
import movieImg from '../../assets/Jumanji.jpg'

export default function BilledCastCard(props) {
  return (
    <div className='billed-cast-card'>
             <img src={props.img} alt=""  className='billed-cast-card-img'/>
             <div className='px-1'>
             <p className='fw-500 m-0'>{props.name}</p>
             <p>Mirabel Madrigal (voice)</p>
             </div>
    </div>
       
  )
}
