import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaRegStar, FaStar } from 'react-icons/fa';

import { addToStarred, removeFromStarred } from '../../redux/actions/starred';


const StarButton = ({ id, dispatch, starred }) => {
    const [text, setText] = useState('Star');
    const [icon, setIcon] = useState(<FaRegStar/>)

    useEffect(() => {
        if (starred.includes(id)) {
            toggleStarBtn('Unstar');
        } else {
            toggleStarBtn('Star');
        }
    }, [starred, id]);

    const clickHandler = (id) => {
        if (starred.includes(id)) {
            toggleStarBtn('Star');
            dispatch(removeFromStarred(id));
        } else {
            toggleStarBtn('Unstar');
            dispatch(addToStarred(id));
        }
    }

    const toggleStarBtn = (text) => {
        setText(text);
        setIcon(text === 'Star' ? <FaRegStar/> : <FaStar/>);
    }

    return (
        <div className="star-btn-wrapper">
            <button onClick={() => clickHandler(id)} type="button" className="btn btn-sm">{icon}{text}</button>
        </div>
    );
}

StarButton.propTypes = {
    starred: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    starred: state.starred && state.starred.repos ? state.starred.repos : []
});


export default connect(mapStateToProps)(StarButton);
