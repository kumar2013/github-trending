import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import StarButton from './StarButton';
import RepoTitle from './RepoTitle';
import RepoLanguage from './RepoLanguage';
import RepoStars from './RepoStars';
import RepoForks from './RepoForks';


const Repository = ({ item }) => {
    const { id, html_url, name, description, language, stargazers_count, forks_count, owner : { login } } = item;

    return (
        <Fragment>
            <StarButton id={id} />
            <RepoTitle url={html_url} username={login} name={name} />
            <p className="repo-description">{description}</p>
            <footer className="repo-footer">
                {language ? <RepoLanguage language={language} /> : ''}
                <RepoStars url={html_url} count={stargazers_count} />
                <RepoForks url={html_url} name={name} count={forks_count} />
            </footer>
        </Fragment>
    );
}

Repository.propTypes = {
    item: PropTypes.object.isRequired
};


export default Repository;