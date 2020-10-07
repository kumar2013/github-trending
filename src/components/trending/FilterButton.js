import React from 'react';
import PropTypes from 'prop-types';

import languages from '../../utility/languages';


const FilterButton = ({ changeHandler }) => {
    const options = [];

    for (let key in languages) {
        options.push(<option key={key} value={key}>{key}</option>);
    }

    return (
        <div className="form-inline filter-btn">
            <label className="my-1 mr-2">Language</label>
            <select className="custom-select my-1 mr-sm-2" defaultValue="Any" name="filter" onChange={e => changeHandler(e)}>
                <option value="Any">Any</option>
                {options}
            </select>
        </div>
    );
}

FilterButton.propTypes = {
    changeHandler: PropTypes.func.isRequired
};


export default FilterButton;