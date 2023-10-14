import { useState, useEffect } from 'react'

import SearchIcon from './assets/images/search.svg'
import './App.css'

import moviesData from './data/moviesData.json'
import MovieCard from './components/MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=b6003d8a'

export type MovieType = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [movies, setMovies] = useState([])

  const myMovies = moviesData.Search as MovieType[]

  useEffect(() => {
    searchMovies('Batman')
  }, [])

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search for movies'
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {myMovies?.length > 0 ? (
        <div className='container'>
          {myMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App
