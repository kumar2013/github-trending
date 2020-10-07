import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RepoItem from '../repos/RepoItem';
import FilterButton from './FilterButton';


const TrendingBox = ({ trendings }) => {
    const [repos, setRepos] = useState(trendings);
    const trendingRepos = repos.map((item, index) => <RepoItem key={index} item={item} />);

    const changeHandler = (e) => {
        if (e.target.value === 'Any') {
            return setRepos(trendings);
        }

        const filteredRepos = trendings.filter(item => item.language === e.target.value);
        setRepos(filteredRepos);
    }

    return (
        <section className="trending-box">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-10 offset-md-1">
                        <div className="card">
                            <div className="card-header">
                                <FilterButton changeHandler={changeHandler} />
                            </div>
                            {trendingRepos}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

TrendingBox.propTypes = {
    trendings: PropTypes.array.isRequired
};


export default TrendingBox;