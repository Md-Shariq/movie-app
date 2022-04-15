import React, { useEffect, useState } from 'react'
import MovieCard from '../../component/movie-card/movieCard'
import movieImg from '../../assets/Jumanji.jpg'
import { tvPopularApi } from '../../service/apiService'
import { imgSmallPath } from '../../service/constant'
import { useNavigate } from 'react-router-dom'

export default function Tv() {

    const [tvPopularData, settvPopularData] = useState([])
    const navigate = useNavigate();


useEffect(() => {
  
    getTvPopular();
    
}, [])


    function getTvPopular(){
        tvPopularApi().then((result)=>{
            console.log(result);
            settvPopularData(result.data.results)
            console.log(result.data.results);
        })
    }



    function goToDetail(id){
        navigate(`/tv-detail/${id}`)
    }


    return (
        <div>
        <p className='fw-500 text-secondary pt-4'>Tv Popular</p>
        <div className='row'>
    
           {
               tvPopularData.map((data)=>{
                   return(
                    <div className='col-md-3'>
                        <MovieCard img={imgSmallPath+data.poster_path} name={data.name} handleClick={()=> goToDetail(data.id)}/>
                     </div>

                   )
               })
           }
                 
          
           
        </div>
    </div>
      )
}
