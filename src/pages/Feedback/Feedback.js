import './Feedback.css';
import { useEffect } from 'react';
import logo2 from '../../assets/img/logo2.png'; 
import { Link } from "react-router-dom";

function Feedback() {
    useEffect(() => {     
        const inputEmail =  document.querySelector('.form__input_email');
        const inputText =  document.querySelector('.form__input_text');
        
        /* ошибка */ 
        const errorEmail = document.querySelector('.form__label_errorEmail');
        const errorText = document.querySelector('.form__label_errorText');
        /* пусто */ 
        const emptyEmail = document.querySelector('.form__label_emptyEmail');
        const emptyText = document.querySelector('.form__label_emptyText');

        let btn = document.querySelector('.form__button');
        let message = document.querySelector('.form__textarea'); 
        let gender = document.querySelector('.item__input');   

        btn.addEventListener('click', (e)  => {
            e.preventDefault();
            
            function validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;      
                console.log(re.test(String(email).toLowerCase()));
                return re.test(String(email).toLowerCase());
            } 
            /* пусто */
            if(!inputEmail.value) {
                inputEmail.classList.add('borderred');
                inputEmail.classList.remove('bordergray');
                errorEmail.classList.remove('show');
                emptyEmail.classList.add('show');
            } else

            /* ошибка */       
            if (validateEmail(inputEmail.value) !== true) {
                inputEmail.classList.add('borderred');
                inputEmail.classList.remove('bordergray');
                emptyEmail.classList.remove('show');
                errorEmail.classList.add('show');
            } else {
                inputEmail.classList.add('bordergray');
                inputEmail.classList.remove('borderred');
                errorEmail.classList.remove('show');
                emptyEmail.classList.remove('show');
            }

            let text = inputText.value;
            /* пусто */   
            if(!text) {
                inputText.classList.add('borderred');
                inputText.classList.remove('bordergray');
                errorText.classList.remove('show');
                emptyText.classList.add('show');          
            } else
            /* ошибка */ 
            if (text.length < 3) {
                inputText.classList.add('borderred');
                inputText.classList.remove('bordergray'); 
                emptyText.classList.remove('show'); 
                errorText.classList.add('show');
            } else { 
                inputText.classList.add('bordergray');
                inputText.classList.remove('borderred');
                errorText.classList.remove('show');
                emptyText.classList.remove('show'); 
            /* вывод валидных значений */ 
            if (validateEmail(inputEmail.value) === true && text.length >= 3){
                    makeData();
                }
            }  

            function makeData() {
                const data = Object();
                data.email = inputEmail.value;
                data.name = text;
                data.gender = gender.value;
                data.message = message.value;
                console.log(data);
            }
        });
}, []);
    
    return (
        <section className="my-form">
            <div className="form__head">
                <Link className="head__logo" to="/"><img src={logo2} alt="" width="100%"></img></Link>        
                <Link className="head__title" to="/">Shop CIAY</Link> 
            </div>  
        <form className="form">
            <h2 className="form__title">Feedback form</h2>
            <div className="form__wrap">
                <div className="form__box">
                    <label className="form__label" htmlFor="email">* Email
                        <span className="form__label_error form__label_errorEmail">Email entered incorrectly</span>
                        <span className="form__label_error form__label_emptyEmail">Required field</span>
                    </label>
                    <input className="form__input form__input_email" id="email" name="email" type="email" placeholder="Enter email"/>
                </div>
                <div className="form__box">
                    <label className="form__label" htmlFor="text">* Name
                        <span className="form__label_error form__label_errorText">Name contains more than 3 characters</span>
                        <span className="form__label_error form__label_emptyText">Required field</span>
                    </label> 
                    <input className="form__input form__input_text" id="text" name="text" type="text" placeholder="Enter name" /> 
                </div>
                <div className="form__gender">
                            <h3 className="form__label">Gender</h3>
                            <div className="form__items">
                                <input className="item__input" type="radio" id="radio-1" name="gender" value="man"/>
                                <label className="item__label" htmlFor="radio-1">Man</label>
                                <input className="item__input" type="radio" id="radio-2" name="gender" value="woman"/>
                                <label className="item__label" htmlFor="radio-2">Woman</label>
                            </div>
                <div className="form__story">
                    <h2 className="form__label">Message</h2>
                    <textarea className="form__textarea" id="story" name="story" placeholder="Enter text"></textarea>
                </div>
                <div className="form__submit">
                    <button className="form__button">Submit</button>
                </div>
                </div>
            </div>
        </form>
    </section> 
    );
};

export default Feedback;