import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../utility/languages';


const RepoLanguage = ({ language }) => {
    return (
        <span className="repo-language">
            <span className="repo-language-color" style={{ backgroundColor: colors[language] ? colors[language] : colors.default }}></span>
            <span className="repo-language-name">{language}</span>
        </span>
    );
}

RepoLanguage.propTypes = {
    language: PropTypes.string.isRequired
};


export default RepoLanguage;