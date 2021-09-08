import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions"


const initialState = {
    block: [
        {        
        id: "",
        height: '',
        version: '',
        timestamp: '',
        tx_count: '',
        size: '',
        weight: '',
        merkle_root: "",
        previousblockhash: "",
        mediantime: '',
        nonce: '',
        bits: '',
        difficulty: ''
    }
    ],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_START):
            return ({
                ...state, 
                block:[],
                isFetching: true,
                error: ''
            })
        case(FETCH_SUCCESS):
            return ({
                ...state,
                block: action.payload,
                isFetching: false,
                error: ''
            })
        case(FETCH_ERROR):
            return ({
                ...state,
                block: [],
                isFetching: false,
                error: action.payload
            })
        default:
            return state
    }
}