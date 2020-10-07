import { ADD_TO_STARRED, REMOVE_FROM_STARRED } from '../constants/actionTypes';


export const addToStarred = (id) => {
    return { type: ADD_TO_STARRED, payload: id };
}

export const removeFromStarred = (id) => {
    return { type: REMOVE_FROM_STARRED, payload: id };
}
