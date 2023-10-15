import MovieCard from './components/MovieCard'

import './App.css'

import moviesData from './data/moviesData.json'

export type MovieType = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const App = () => {
  const movies = moviesData.Search as MovieType[]
  console.log(movies[0])

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='container'>
        {movies.map((movie) => (
          <MovieCard movie88={movie} />
        ))}
      </div>
    </div>
  )
}

export default App
