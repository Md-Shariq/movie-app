import React, { useState } from 'react'


export default function Search(props) {

    const [Searched, setSearched] = useState('')
    return (
        <div className='position-relative'>
            <input type="text" placeholder='Search' className='search-movie' value={Searched} onChange={(event)=> setSearched(event.target.value)} />
            <i class="fa-solid fa-magnifying-glass search-icon" onClick={() => props.handleClick(Searched)}></i>
        </div>
    )
}
