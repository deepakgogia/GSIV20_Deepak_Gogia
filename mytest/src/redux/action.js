import { store } from "..";
import { getUpcomingMovies, findMovieData, searchByTypeID, getCreditDetails } from './../Services/apiservice';
import { INITIALIZE, GET_DETAIL, SEARCH_DETAIL, CASTING_DETAIL, MOVIE_DETAIL } from './../core/operation';

export const getData = () => {
    return { type: INITIALIZE };
}

export const searchByData = val => ({
    type: SEARCH_DETAIL,
    payload: val
})

export const getMovieData = val => ({
    type: GET_DETAIL,
    payload: val
})

export const getMoviesDetail = val => ({
    type: MOVIE_DETAIL,
    payload: val
})

export const getCreditDetail = val => ({
    type: CASTING_DETAIL,
    payload: val
})

export const getUpcomingMoviesData = () => {
    return function (dispatch) {
        return getUpcomingMovies()
            .then(data => {
                dispatch(getMovieData(data));
            })
    }
}

export const searchMoviesData = (qry) => {
    return function (dispatch) {
        return findMovieData(qry)
            .then(data => {
                dispatch(searchByData(data));
            })
    }
}

export const getMovieDetails = (typeId, qry) => {
    return function (dispatch) {
        return searchByTypeID(typeId, qry)
            .then(data => {
                dispatch(getMoviesDetail(data));
            })
    }
}

export const getCreditsDetails = (movieId) => {
    return function (dispatch) {
        return getCreditDetails(movieId)
            .then(data => {
                dispatch(getCreditDetail(data));
            })
    }
}