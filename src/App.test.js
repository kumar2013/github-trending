import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

const links = [
    { text: 'Home', location: "/" },
    { text: 'Trending', location: "/trending" },
    { text: 'Starred', location: "/starred" }
];


it('renders welcome note', () => {
  	const { getByText } = render(<App />);
  	const note = getByText(/github trending app/i);
  	expect(note).toBeInTheDocument();
});

it.each(links)("renders the navbar links", (link) => {
	render(<App />);

	const linkDom = screen.getByText(link.text);

	expect(linkDom).toHaveAttribute("href", link.location);
});