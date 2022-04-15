import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from '../nav-item/navItem'

export default function SideNav() {
    return (
        <div className='left-box'>
            <h3 className='pb-3'>Exxmon</h3>
            <div className='pb-3'>
                <p className='text-secondary fw-500'>Menu</p>
                <Link to="/home"><NavItem icon="fa-solid fa-house" name="Home"  /></Link>
                <Link to="/top-rated"><NavItem icon="fa-solid fa-house" name="Top Rated" /></Link>
                <Link to="/tv"><NavItem icon="fa-solid fa-house" name="Tv Show" /></Link>
            </div>

           
        </div>
    )
}
