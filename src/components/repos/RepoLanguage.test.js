import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import sinon from 'sinon';

import RepoLanguage from "./RepoLanguage";
import { expectMissingProp, expectInvalidProp } from '../../utility/test-utils';
import colors from '../../utility/languages';

let container = null;
const language = "Python";


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


it("renders language", () => {
    act(() => {
        render(<RepoLanguage language={language} />, container);
    });

    expect(container.querySelector("span").textContent).toBe(language);
    expect(container.querySelector(".repo-language-color")).toHaveStyle(`background-color: ${colors[language]}`);
});


it('warns missing props', () => {
    act(() => {
        render(<RepoLanguage />, container);
    });

    sinon.assert.callCount(console.error, 1);

    expectMissingProp('language', 'RepoLanguage');
});

it('warns invalid propTypes', () => {
    act(() => {
        render(<RepoLanguage language={5} />, container);
    });

    sinon.assert.callCount(console.error, 1);

    expectInvalidProp('language', 'RepoLanguage', 'number', 'string');
});
