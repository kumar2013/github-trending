import React from 'react';
import PropTypes from 'prop-types';


const PageIntro = ({ title, description }) => {
    return (
        <section className="page-intro">
            <div className="container">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </section>
    );
}

PageIntro.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};


export default PageIntro;