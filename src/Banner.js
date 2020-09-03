import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request.data.results); // [... , ... , ... ,]
      // console.log(
      //   request.data.results[
      //     Math.floor(Math.random() * request.data.results.length)
      //   ]
      // );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/* <<<<< Background image */}
      <div className="banner__contents"></div>
      {/* title */}
      <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

      {/* div > 2 buttons */}
      <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>

      {/* description */}
      <h1 className="banner__description">{movie?.overview}</h1>
    </header>
  );
}

export default Banner;
