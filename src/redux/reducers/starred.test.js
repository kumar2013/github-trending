import reducer from './starred';
import * as types from '../constants/actionTypes';

const initialState = {
    repos: []
};

const currentState = {
    repos: [987654321]
};


it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
});

it(`should handle ${types.ADD_TO_STARRED}`, () => {
    expect(
        reducer(initialState, {
            type: types.ADD_TO_STARRED,
            payload: 987654321
        })
    ).toEqual(currentState);
});

it (`should handle ${types.REMOVE_FROM_STARRED}`, () => {
    expect(
        reducer(currentState, {
            type: types.REMOVE_FROM_STARRED,
            payload: 987654321
        })
    ).toEqual(initialState);
});