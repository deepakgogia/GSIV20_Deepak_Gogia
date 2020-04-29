import { apiKey } from './../core/apikey';
import { English_United_States } from './../core/language';
import { type_movie } from './../core/mediaType';


export function getUpcomingMovies(query, pageNo = 1, language = English_United_States, mediaType = type_movie) {
    return fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=' + language + '&page=' + pageNo
        , { method: 'GET' })
        .then(res => res.json())
        .catch(err => {
            console.error("Error in getUpcomingMovies - ", err)
            if (err.name === "AbortError") return;
        });
}
export function findMovieData(query, pageNo = 1, language = English_United_States, mediaType = type_movie) {
    return fetch('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&language=' + language + '&query=' + query + '&page=' + pageNo + '&include_adult=false'
        , { method: 'GET' })
        .then(res => res.json())
        .catch(err => {
            console.error("Error in SearchData - ", err)
            if (err.name === "AbortError") return;
        });
}