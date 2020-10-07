import moxios from 'moxios';
import { getMockStore } from '../../utility/test-utils';
import { loadTrending } from './trending';
import * as types from '../constants/actionTypes';

const initialState = {};
const store = getMockStore(initialState);

const mockSuccess = data => ({ status: 200, response: { data } });

beforeEach(() => {
    store.clearActions();
    moxios.install();
});

afterEach(() => moxios.uninstall());


it('successfully loads trending', () => {
    const trendings = {
        items: [
            { id: 987654320, name: "test-repo1", full_name: "test-user1/test-repo1", private: false },
            { id: 987654321, name: "test-repo2", full_name: "test-user2/test-repo2", private: false }
        ]
    };

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith(mockSuccess(trendings));
    });

    const expectedActions = [{ type: types.TRENDING_LOADED, payload: trendings.items }];

    store.dispatch(loadTrending()).then(() => {
        const calledActions = store.getActions();

        expect(calledActions).toEqual(expectedActions);
    });
});