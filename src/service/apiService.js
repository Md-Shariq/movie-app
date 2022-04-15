import axios from 'axios'
import React from 'react'

const apiKey = '2c753eda908ac1d0d5d17ce5f5116f16'

export function nowPlayingApi() {
   return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
}

export  function popularMovieApi(){
   return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
}

export function topRatedApi(){
   return axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`)
}
export function upComingMovieApi(){
   return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
}

export function tvPopularApi(){
   return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`)
}
export function movieDetailApi(id){
   console.log(id);
   return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
}
export function searchApi(searched){
   return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${searched}`)
}
export function tvDetailApi(id){
   return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`)
}
export function movieImageApi(id){
   return axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}&language=en-US`)
}
export function movieRecommendationsApi(id){
   return axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`)
}
