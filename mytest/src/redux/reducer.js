
export function reducer(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GET':
            return state;
        case 'GET-DATA':
            return { ...payload };
        case 'SEARCH':
            return { ...payload };
        default:
            return state;
    }
}


