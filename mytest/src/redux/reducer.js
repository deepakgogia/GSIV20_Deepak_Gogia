import { INITIALIZE, GET_DETAIL, SEARCH_DETAIL, CASTING_DETAIL, MOVIE_DETAIL } from './../core/operation';
export function reducer(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
        case INITIALIZE:
            return state;
        case GET_DETAIL:
            return { ...payload };
        case SEARCH_DETAIL:
            return { ...payload };
        case MOVIE_DETAIL:
            return { ...state, ...payload };
        case CASTING_DETAIL:
            return { ...state, ...payload };
        default:
            return state;
    }
}


