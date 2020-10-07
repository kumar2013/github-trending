import React from 'react';
import PropTypes from 'prop-types';
import { VscRepo } from 'react-icons/vsc';


const RepoTitle = ({ url, username, name }) => {
    return (
        <h3 className="repo-title">
            <VscRepo />
            <a href={url}>
                <span>{username}{' '}/{' '}<strong>{name}</strong></span>
            </a>
        </h3>
    );
}

RepoTitle.propTypes = {
    url: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};


export default RepoTitle;