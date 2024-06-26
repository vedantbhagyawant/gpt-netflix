import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_Option } from "../utils/constant";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular',API_Option)
      const json = await data.json();
      
      dispatch(addPopularMovies(json.results))
    } 
    useEffect(() =>{
      getPopularMovies();
    },[])

}
export default usePopularMovies;