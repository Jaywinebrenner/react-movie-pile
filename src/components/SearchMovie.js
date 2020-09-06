import React, {useState} from "react";


const SearchMovie = () => {

  const [query, setQuery] = useState('');
 const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
  

    const url =
      `https://api.themoviedb.org/3/search/movie?api_key=09e336ea24d02053648abcada8dbda2a&language=en-US&query=${query}`;

      try {
        const res = await fetch(url);
        const data = await res.json()
        setMovies(data.results);
        console.log("movies", movies);

      } catch(error) {
        console.log(error);
      }

  }



  return (
    <React.Fragment>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. The Thing"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="cardList">
        {movies.filter(movie => movie.poster_path).map((movie) => (
          <div className="card" key={movie.id}>
            {/* <h5>{movie.title}</h5> */}

            <img
              className="cardImage"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default SearchMovie;
