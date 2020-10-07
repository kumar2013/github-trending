import React from 'react';
import PropTypes from 'prop-types';
import { FaRegStar } from 'react-icons/fa';


const RepoStars = ({ url, count }) => {
    return (
        <span className="repo-stars">
            <a href={`${url}/stargazers`}>
                <FaRegStar />
                {count}
            </a>
        </span>
    );
}

RepoStars.propTypes = {
    url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
};


export default RepoStars;