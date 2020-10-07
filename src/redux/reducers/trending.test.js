import reducer from './trending';
import * as types from '../constants/actionTypes';

const initialState = {
    loading: true
};

const currentState = {
    repos: [1, 2, 3, 4, 5],
    loading: false
};


it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
});

it(`should handle ${types.TRENDING_LOADED}`, () => {
    expect(
        reducer(initialState, {
            type: types.TRENDING_LOADED,
            payload: [1, 2, 3, 4, 5]
        })
    ).toEqual(currentState);
});

it (`should handle ${types.API_FAILURE}`, () => {
    expect(
        reducer(initialState, {
            type: types.API_FAILURE
        })
    ).toEqual({
        loading: false
    });
});