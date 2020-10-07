import React from 'react';
import PropTypes from 'prop-types';

import Repository from './Repository';


const RepoItem = ({ item }) => {
    return (
        <article className="card-body">
            <Repository item={item} />
        </article>
    );
}

RepoItem.propTypes = {
    item: PropTypes.object.isRequired
};


export default RepoItem;