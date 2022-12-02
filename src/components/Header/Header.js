import './Header.css';
import logo from '../../assets/img/logo.png'; 
import feedback from '../../assets/img/feedback.png'; 
import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="header">
            <Link className="header__logo" to="/"><img src={logo} alt="" width="100%"></img></Link>        
            <Link className="header__title" to="/">Shop CIAY</Link> 
            <div className="header__feedback">
                <Link className="header__link" to="/feedback">Feedback form</Link>
            </div>
            <Link className="feedback__logo" to="/feedback"><img src={feedback} alt="" width="100%"></img></Link> 
        </header>
    )
};

export default Header;
