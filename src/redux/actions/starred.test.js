import * as actions from './starred';
import * as types from '../constants/actionTypes';


it('creates an action to add to starred', () => {
    const id = 987654321;
    const expectedAction = { type: types.ADD_TO_STARRED, payload: id };

    expect(actions.addToStarred(id)).toEqual(expectedAction);
});

it('creates an action to remove from starred', () => {
    const id = 987654321;
    const expectedAction = { type: types.REMOVE_FROM_STARRED, payload: id };

    expect(actions.removeFromStarred(id)).toEqual(expectedAction);
});