import React from 'react';
import PropTypes from 'prop-types';
import { BiGitRepoForked } from "react-icons/bi";


const RepoForks = ({ url, name, count }) => {
    return (
        <span className="repo-forks">
            <a href={`${url}/network/members.${name}`}>
                <BiGitRepoForked />
                {count}
            </a>
        </span>
    );
}

RepoForks.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
};


export default RepoForks;