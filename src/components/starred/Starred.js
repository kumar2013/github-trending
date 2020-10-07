import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageIntro from '../PageIntro';
import StarredBox from './StarredBox';

const page = {
    title: 'Starred',
    description: 'Here you will find your favorite repositories.'
};

const EmptyLists = () => {
    return (
        <section className="empty-lists">
            <div className="container">
                <p className="">You have 0 repositories starred.</p>
            </div>
        </section>
    );
}

const Starred = ({ starred }) => {
    return (
        <main>
            <PageIntro title={page.title} description={page.description} />
            {starred.length ? <StarredBox repos={starred} /> : <EmptyLists />}
        </main>
    );
}

Starred.propTypes = {
    starred : PropTypes.array.isRequired
}

const mapStateToProps = state => {
    const { trending, starred } = state;

    if (starred && starred.repos && starred.repos.length) {
        const result = trending.repos.filter(item => starred.repos.includes(item.id));

        return { starred: result };
    }

    return { starred: [] };
}


export default connect(mapStateToProps)(Starred);