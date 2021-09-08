import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getDogFact = () => {
    return(dispatch) => {
        dispatch(fetchStart())
        axios.get('https://mempool.space/api/blocks/')
            .then(res => {
                dispatch(fetchSuccess)
            })
    }
}


export const fetchStart = () => {
    return({ type: FETCH_START })
}

export const fetchSuccess = (dog) => {
    return({ type: FETCH_SUCCESS, payload: dog })
}

export const fetchError = (error) => {
    return({ type: FETCH_ERROR, payload: error })
}
