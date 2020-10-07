import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import sinon from 'sinon';

import RepoForks from "./RepoForks";
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
        render(<RepoForks url="/test-url" name="test" count={5} />, container);
    });

    expect(container.querySelector("a").textContent).toBe("5");
    expect(container.querySelector("a").getAttribute("href")).toEqual("/test-url/network/members.test");
});

it('warns missing props', () => {
    act(() => {
        render(<RepoForks />, container);
    });

    sinon.assert.callCount(console.error, 3);

    expectMissingProp('url', 'RepoForks');
    expectMissingProp('name', 'RepoForks');
    expectMissingProp('count', 'RepoForks');
});

it('warns invalid propTypes', () => {
    act(() => {
        render(<RepoForks url={100} name={false} count="test" />, container);
    });

    sinon.assert.callCount(console.error, 3);

    expectInvalidProp('url', 'RepoForks', 'number', 'string');
    expectInvalidProp('name', 'RepoForks', 'boolean', 'string');
    expectInvalidProp('count', 'RepoForks', 'string', 'number');
});