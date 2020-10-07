import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import sinon from 'sinon';

import RepoTitle from "./RepoTitle";
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


it("renders title", () => {
    act(() => {
        render(<RepoTitle url="/test-url" username="test-username" name="test-repo" />, container);
    });

    expect(container.querySelector("span").textContent).toBe("test-username / test-repo");
    expect(container.querySelector("a").getAttribute("href")).toEqual("/test-url");
});

it('warns missing props', () => {
    act(() => {
        render(<RepoTitle />, container);
    });

    sinon.assert.callCount(console.error, 3);

    expectMissingProp('url', 'RepoTitle');
    expectMissingProp('name', 'RepoTitle');
    expectMissingProp('username', 'RepoTitle');
});

it('warns invalid propTypes', () => {
    act(() => {
        render(<RepoTitle url={100} username={3} name={1} />, container);
    });

    sinon.assert.callCount(console.error, 3);

    expectInvalidProp('url', 'RepoTitle', 'number', 'string');
    expectInvalidProp('username', 'RepoTitle', 'number', 'string');
    expectInvalidProp('name', 'RepoTitle', 'number', 'string');
});