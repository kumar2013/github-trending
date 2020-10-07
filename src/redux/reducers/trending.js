import { API_FAILURE, TRENDING_LOADED } from '../constants/actionTypes';

const initialState = {
    loading: true
};


export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case TRENDING_LOADED:
            return {
                ...state,
                repos: payload,
                loading: false
            };
        case API_FAILURE:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}