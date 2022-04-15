import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screen/home';
import TopRated from './screen/top-rated/topRated';
import Dashboard from './screen/dashboard/dashboard';
import Tv from './screen/TV/tv';
import MovieDetail from './screen/movie-detail/movieDetail';
import TvDetail from './screen/tv-detail/tvDetail';

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="top-rated" element={<TopRated />} />
          <Route path="tv" element={<Tv/>} />
          <Route path="detail/:id" element={<MovieDetail/>} />
          <Route path="tv-detail/:id" element={<TvDetail/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
