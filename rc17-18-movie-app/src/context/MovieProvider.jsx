import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
export const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const MovieProvider = ({ children }) => {

const [movies,setMovies]=useState([])
const [loading, setLoading] = useState(false);
useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (URL) => {
    setLoading(true);
    axios
      .get(URL)
      .then((res) => console.log(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };


  return (<MovieContext.Provider value={{movies,loading,getMovies}}>{children}</MovieContext.Provider>);
};

export default MovieProvider;
