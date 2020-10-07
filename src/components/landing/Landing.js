import React from 'react';

import PageIntro from '../PageIntro';

const page = {
    title: 'GitHub Trending App',
    description: 'In this App you can explore the current trending Github Repositories and can star your favorite respositories for later refenrence.'
};


const Landing = () => {
    return (
        <main className="landing">
            <PageIntro title={page.title} description={page.description} />
        </main>
    );
}


export default Landing;