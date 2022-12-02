import PropTypes from 'prop-types';
import './Input.css';

function Input(props) {
    return (
        <input className="common__input" 
        name={ props.name } 
        id={ props.id } 
        type={ props.type }
        placeholder={ props.placeholder } />
    )
}

Input.propTupes = {
    text: PropTypes.string
}

export default Input;