import React from 'react';
import PropTypes from 'prop-types';

import '../style.scss';

const Field = ({ type, name, placeholder, valueInput, onChange }) => {

    const handleOnChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={valueInput}
        onChange={handleOnChange}
        className="inputstyle__textArea"
        />
    )
}

Field.defaultProps = {
    type: 'text',
  };

Field.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  
export default Field;