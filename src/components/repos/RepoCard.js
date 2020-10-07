import React from 'react';
import PropTypes from 'prop-types';

import Repository from './Repository';


const RepoCard = ({ item }) => {
    return (
        <article className="card">
            <div className="card-body">
                <Repository item={item} />
            </div>
        </article>
    );
}

RepoCard.propTypes = {
    item: PropTypes.object.isRequired
};


export default RepoCard;