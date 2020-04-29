import { store } from "..";
import { getUpcomingMovies, findMovieData, searchByTypeID, getCreditDetails } from './../Services/apiservice';

export const getData = () => {
    return { type: 'GET' };
}

export const searchByData = val => ({
    type: 'SEARCH',
    payload: val
})

export const getMovieData = val => ({
    type: 'GET-DATA',
    payload: val
})

export const getMoviesDetail = val => ({
    type: 'DETAIL',
    payload: val
})

export const getCreditDetail = val => ({
    type: 'DETAIL',
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
