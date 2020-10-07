import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


export const expectMissingProp = (prop, component) => {
    sinon.assert.calledWithMatch(
        console.error,
        new RegExp(`Warning: Failed prop type: The prop \`${prop}\` is marked as required in \`${component}\`, but its value is \`undefined\`.`)
    );
}

export const expectInvalidProp = (prop, component, propType, expectedType) => {
    sinon.assert.calledWithMatch(
        console.error,
        new RegExp(`Warning: Failed prop type: Invalid prop \`${prop}\` of type \`${propType}\` supplied to \`${component}\`, expected \`${expectedType}\`.`)
    );
}

const CustomProvider = ({ store, children }) => <Provider store={store}>{children}</Provider>

export const customRender = (jsx, { store, ...otherOpts }) => render(<CustomProvider store={store}>{jsx}</CustomProvider>, otherOpts)

export const getMockStore = (state = {}) => mockStore({ ...state })

export const makeTestStore = (state = {}) => {
    const store = getMockStore(state);
    const originalDispatch = store.dispatch;

    store.dispatch = jest.fn(originalDispatch);

    return store;
}