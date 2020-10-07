import axios from 'axios';

import { TRENDING_LOADED, API_FAILURE } from '../constants/actionTypes';


export const loadTrending = () => async dispatch => {
    try {
        const url = `https://api.github.com/search/repositories?q=created:>2020-09-25&sort=stars&order=desc`
        const response = await axios.get(url);

        dispatch({ type: TRENDING_LOADED, payload: response.data.items });
    } catch (err) {
        console.log('Something went wrong while retriving the api data!');

        dispatch({ type: API_FAILURE });
    }
}