import React from 'react';
import { screen } from '@testing-library/react';

import { customRender, makeTestStore } from '../../utility/test-utils';
import { loadTrending } from '../../redux/actions/trending';
import * as types from '../../redux/constants/actionTypes';

import Trending from './Trending';

const state = {
    trending: {
        repos: [{
            id: 987654321,
            html_url: '/test-url',
            name: 'test-repo',
            language: 'Python',
            stargazers_count: 10,
            forks_count: 5,
            owner: {
                login: 'test-user'
            }
        }],
        loading: false
    }
};


it('renders the connected component with correct state', () => {
    const store = makeTestStore(state);
    customRender(<Trending />, { store });

    expect(screen.getByText(/test-repo/i)).toBeInTheDocument();
    expect(screen.getByText(/test-user/i)).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText(/5/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Star/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Trending/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /test-user \/ test-repo/i })).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(1);
});

it('renders the connected component with empty state', () => {
    const store = makeTestStore({});
    customRender(<Trending />, { store });

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
});

it('dispatches the expected actions', () => {
    const store = makeTestStore(state);

    customRender(<Trending />, { store });

    expect(store.dispatch).toHaveBeenCalled();

    const expectedAction = [{ type: types.TRENDING_LOADED, payload: state.trending.repos }];

    const callback = (receivedAction) => {
        expect(receivedAction).toEqual(expectedAction);
    };

    loadTrending()(callback);
});
