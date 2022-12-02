import './Footer.css';
import Button from '../generic/Button/Button';
import Input from '../generic/Input/Input';
import { useState } from 'react';

const BUTTON_THEMES = {
    light: 'light',
    dark: 'dark'
}

function Footer() {
    const [isSubscribeButtonDisabled, setisSubscribeButtonDisabled] = useState(false);
    const onSubscribe = () => {
        setisSubscribeButtonDisabled(true);

        setTimeout (() => {
            setisSubscribeButtonDisabled(false); 
            console.log('Подписка включена!')
        }, 2000)
    }
    
    return (
    <div>
        <div className="footer">
            <h2 className="footer__title">The store is located at: st. Tsentralnaya, 15, building 5, pavilion 45</h2>
            <div className="footer__subscrib">
                <Input type="email" placeholder="Enter email" name="email" id="email"/>             
                <Button disabled={isSubscribeButtonDisabled} theme={BUTTON_THEMES.light} onClick={onSubscribe}>Subscribe</Button>
            </div>
        </div>
    </div>
    )
};

export default Footer;