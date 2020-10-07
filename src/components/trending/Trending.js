import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadTrending } from '../../redux/actions/trending';

import PageIntro from '../PageIntro';
import Spinner from '../Spinner';
import TrendingBox from './TrendingBox';

const page = {
    title: 'Trending',
    description: 'See what the GitHub community is most excited about last week.'
};


const Trending = ({ dispatch, trendings, loading }) => {
    useEffect(() => {
        dispatch(loadTrending());
    }, [dispatch]);

    return (
        <main>
            <PageIntro title={page.title} description={page.description} />
            {loading ? <Spinner /> : <TrendingBox trendings={trendings} />}
        </main>
    );
}

Trending.propTypes = {
    trendings: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const { trending } = state;

    if (trending && trending.repos && trending.repos.length) {
        return {
            trendings: trending.repos,
            loading: false
        };
    }

    return { trendings: [], loading: true };
}


export default connect(mapStateToProps)(Trending);