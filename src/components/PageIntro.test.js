import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import sinon from 'sinon';

import PageIntro from "./PageIntro";
import { expectMissingProp, expectInvalidProp } from '../utility/test-utils';

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


it("renders title & description", () => {
    act(() => {
        render(<PageIntro title="Test" description="Test description" />, container);
    });

    expect(container.querySelector("h1").textContent).toBe("Test");
    expect(container.querySelector("p").textContent).toBe("Test description");
});

it('warns missing props', () => {
    act(() => {
        render(<PageIntro />, container);
    });

    sinon.assert.callCount(console.error, 2);

    expectMissingProp('title', 'PageIntro');
    expectMissingProp('description', 'PageIntro');
});

it('warns invalid propTypes', () => {
    act(() => {
        render(<PageIntro title={100} description={false} />, container);
    });

    sinon.assert.callCount(console.error, 2);

    expectInvalidProp('title', 'PageIntro', 'number', 'string');
    expectInvalidProp('description', 'PageIntro', 'boolean', 'string');
});