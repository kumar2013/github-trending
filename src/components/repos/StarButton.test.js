import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import sinon from 'sinon';

import { customRender, expectMissingProp, makeTestStore } from '../../utility/test-utils';
import { addToStarred, removeFromStarred } from '../../redux/actions/starred';
import * as types from '../../redux/constants/actionTypes';

import StarButton from './StarButton';

const state = {
    starred: {
        repos: [987654321, 123456789]
    }
};


it('renders Unstar button', () => {
    const store = makeTestStore(state);
    customRender(<StarButton id={987654321} />, { store });

    expect(screen.getByRole('button', { name: /Unstar/i })).toBeInTheDocument();
});

it('renders Star button', () => {
    const store = makeTestStore(state);
    customRender(<StarButton id={987654322} />, { store });

    expect(screen.getByRole('button', { name: /Star/i })).toBeInTheDocument();
});

it('warns missing props', () => {
    const store = makeTestStore(state);

    sinon.stub(console, 'error');

    customRender(<StarButton />, { store });

    sinon.assert.callCount(console.error, 1);
    expectMissingProp('id', 'StarButton');
    console.error.restore();
});

it('click toggles the star button', () => {
    const store = makeTestStore(state);
    customRender(<StarButton id={987654322} />, { store });

    expect(screen.getByRole('button', { name: /Star/i })).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Star/i));

    expect(screen.getByRole('button', { name: /Unstar/i })).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Unstar/i));

    expect(screen.getByRole('button', { name: /Star/i })).toBeInTheDocument();
});

it('dispatches the addToStarred action', () => {
    const id = 987654322;
    const store = makeTestStore(state);
    customRender(<StarButton id={id} />, { store });

    expect(screen.getByRole('button', { name: /Star/i })).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Star/i));

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith((addToStarred(id)));

    const expectedAction = [{ type: types.ADD_TO_STARRED, payload: id }];
    const calledAction = store.getActions();

    expect(calledAction).toEqual(expectedAction);
});

it('dispatches the removeFromStarred action', () => {
    const id = 987654321;
    const store = makeTestStore(state);
    customRender(<StarButton id={id} />, { store });

    expect(screen.getByRole('button', { name: /Unstar/i })).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Unstar/i));

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith((removeFromStarred(id)));

    const expectedAction = [{ type: types.REMOVE_FROM_STARRED, payload: id }];
    const calledAction = store.getActions();

    expect(calledAction).toEqual(expectedAction);
});