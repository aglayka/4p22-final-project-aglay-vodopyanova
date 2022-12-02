import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './Button.scss';

const BUTTON_THEMES = {
    light: 'light',
    dark: 'dark'
}

function Button({ disabled = false, theme = BUTTON_THEMES.dark, onClick= () => {}, children}) {
    const onInnerClick = (event) => {
        console.log('actively!', event);
        onClick(event);
    }

    return (
        <button onClick={onInnerClick} className={
            ClassNames('common__button', 
                `common__button_${theme}`,
                {'common__button_disabled': disabled}  
            )}>
            { children }   
        </button>
    )
} 

Button.propTupes = {
    text: PropTypes.string
}

export default Button;