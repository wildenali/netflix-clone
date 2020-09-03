import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // Asnippet of code which runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // if [], run once whe the row loads, and dont run again

  console.log(movies);
  console.table(movies);

  return (
    <div>
      {/* title */}
      <h2>{title}</h2>

      {/* Container -> posters */}
      <div className="row__posters">
        {/* several row_poster(s) */}
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
