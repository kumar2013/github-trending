import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import sinon from 'sinon';

import RepoStars from "./RepoStars";
import { expectMissingProp, expectInvalidProp } from '../../utility/test-utils';

let container = null;


beforeEach(() => {
    container = document.createElement("div");

    document.body.appendChild(container);
    sinon.stub(console, 'error');
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;

    console.error.restore();
});


it("renders url & count", () => {
    act(() => {
        render(<RepoStars url="/test-url" count={5} />, container);
    });

    expect(container.querySelector("a").textContent).toBe("5");
    expect(container.querySelector("a").getAttribute("href")).toEqual("/test-url/stargazers");
});

it('warns missing props', () => {
    act(() => {
        render(<RepoStars />, container);
    });

    sinon.assert.callCount(console.error, 2);

    expectMissingProp('url', 'RepoStars');
    expectMissingProp('count', 'RepoStars');
});

it('warns invalid propTypes', () => {
    act(() => {
        render(<RepoStars url={100} count="test" />, container);
    });

    sinon.assert.callCount(console.error, 2);

    expectInvalidProp('url', 'RepoStars', 'number', 'string');
    expectInvalidProp('count', 'RepoStars', 'string', 'number');
});