import React from 'react';
import PropTypes from 'prop-types';

import RepoCard from '../repos/RepoCard';


const StarredBox = ({ repos }) => {
    const starredRepos = repos.map((item, index) => <RepoCard key={index} item={item} />);

    return (
        <section className="starred-box">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-8 offset-md-2">
                        <h4>Repositories</h4>
                        {starredRepos}
                    </div>
                </div>
            </div>
        </section>
    );
}

StarredBox.propTypes = {
    repos: PropTypes.array.isRequired
};


export default StarredBox;