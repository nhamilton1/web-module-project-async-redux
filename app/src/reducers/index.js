import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions"


const initialState = {
    block: {
        id: "0000000000000000000a5f202d61e3dec80acfb76e089aa4ade4a8c6b7ce7a1a",
        height: 699660,
        version: 536870916,
        timestamp: 1631126370,
        tx_count: 1337,
        size: 1218586,
        weight: 3992614,
        merkle_root: "6b4178d372264666a023cac426c2a9be01ee4ada00d7fe1eba1a0873e6642fe5",
        previousblockhash: "000000000000000000076de88589e7787cfe2bdffc47cc7b73f6ba1d712893f1",
        mediantime: 1631125420,
        nonce: 3602132988,
        bits: 386877668,
        difficulty: 18415156832118
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_START):
            return ({
                ...state, 
                block:{},
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
                block: {},
                isFetching: false,
                error: action.payload
            })
        default:
            return state
    }
}