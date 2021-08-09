import React from 'react';
import './Button.scss';

function Button({ title, instruction }) {
    return (
        <button className="button" onClick={instruction}>
            {title}
        </button>
    )
}

export default Button
