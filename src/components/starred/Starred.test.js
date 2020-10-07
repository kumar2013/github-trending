import React from 'react';
import { screen } from '@testing-library/react';

import { customRender, makeTestStore } from '../../utility/test-utils';
import Starred from './Starred';

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
        }]
    },
    starred: {
        repos: [987654321]
    }
};


it('renders the connected component with correct state', () => {
    const store = makeTestStore(state);
    customRender(<Starred />, { store });

    expect(screen.getByText(/test-repo/i)).toBeInTheDocument();
    expect(screen.getByText(/test-user/i)).toBeInTheDocument();
    expect(screen.getByText(/Python/i)).toBeInTheDocument();
    expect(screen.getByText(/10/i)).toBeInTheDocument();
    expect(screen.getByText(/5/i)).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Starred/i })).toBeInTheDocument();
});

it('renders the connected component with empty state', () => {
    const store = makeTestStore({});
    customRender(<Starred />, { store });

    expect(screen.getByText(/You have 0 repositories starred/i)).toBeInTheDocument();
});
