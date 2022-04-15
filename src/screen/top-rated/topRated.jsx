import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MovieCard from '../../component/movie-card/movieCard'
import { topRatedApi } from '../../service/apiService'
import { imgSmallPath } from '../../service/constant'
import movieImg from './../../assets/Jumanji.jpg'
export default function TopRated() {

  const [topRatedMovieData, settopRatedMovieData] = useState([])
  const navigate = useNavigate();

useEffect(() => {
    getTopRatedMovie();
}, [])

    function getTopRatedMovie(){
        topRatedApi().then((result)=>{
            console.log(result);
            settopRatedMovieData(result.data.results)
            console.log(result.data.results);
        })
    }

    function goToDetail(id){
        console.log(id);
         navigate(`/detail/${id}`)
    }

  return (
    <div>
    <p className='fw-500 text-secondary pt-4'>Top Rated Movies</p>
    <div className='row'>

        {
          topRatedMovieData.map((data)=>{
              return(
                <div className='col-md-3'>
                <MovieCard img={imgSmallPath+data.poster_path} name={data.name} handleClick={()=>goToDetail(data.id)}/>
            </div>
              )
          })

        }
      
        {/* <div className='col-md-3'>
            <MovieCard />
        </div>
        <div className='col-md-3'>
            <MovieCard />
        </div>
        <div className='col-md-3'>
            <MovieCard />
        </div>
        <div className='col-md-3'>
            <MovieCard />
        </div>
        <div className='col-md-3'>
            <MovieCard />
        </div>
        <div className='col-md-3'>
            <MovieCard />
        </div>
        <div className='col-md-3'>
            <MovieCard />
        </div> */}
    </div>
</div>
  )
}
