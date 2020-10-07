import { ADD_TO_STARRED, REMOVE_FROM_STARRED } from '../constants/actionTypes';

const initialState = {
    repos: []
};


export default function (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_TO_STARRED:
            return {
                ...state,
                repos: [...state.repos, payload]
            };
        case REMOVE_FROM_STARRED:
            return {
                ...state,
                repos: state.repos.filter(repo => repo !== payload)
            };
        default:
            return state;
    }
}
