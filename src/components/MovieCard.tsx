import { MovieType } from '../App'

type Props = {
  movie88: MovieType
}

const MovieCard = ({ movie88 }: Props) => {
  const { imdbID, Year, Poster: imageUrl, Title, Type } = movie88
  // const imageUrl = movie.Poster
  // const imdbID = movie.imdbID

  return (
    <div className='movie'>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={
            imageUrl === 'N/A' ? 'https://via.placeholder.com/400' : imageUrl
          }
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
        <a
          href={`http://imdb.com/title/${imdbID}`}
          target='_blank'
        >
          View IMDB
        </a>
      </div>
    </div>
  )
}

export default MovieCard
