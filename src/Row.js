import React, { useState, useEffect } from 'react'
import axios from './axios'

function Row({ title, fetchUrl }) {

  const [movies, setMovies] = useState([]);

  // Asnippet of code which runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // if [], run once whe the row loads, and dont run again

  console.log(movies);

  return (
    <div>
      {/* title */}
      <h2>{title}</h2>

      {/* Container -> posters */}
    </div>
  )
}

export default Row
