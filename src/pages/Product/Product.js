import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/generic/Button/Button';
import './Product.css';

const BUTTON_THEMES = {
    light: 'light',
    dark: 'dark'
}

function Product() {
    const {cardId} = useParams();
    const [ product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${cardId}`);
            const result = await response.json();

            setProduct(result); 
        })(); 
    },)

    return (
        <div className="product">
            <div className="product__box">
                <img className="product__image" alt= {'product'} src= { product.image }></img>
            </div>
            <div className="product__wrap">
                <h1 className="product__title">{ product.title }</h1>
                <div className="product__description">{ product.description }</div> 
                <div className="product__price common__price">{ product.price }</div>
                <div  className="card__button">
                    <Button theme={BUTTON_THEMES.light}>Купить</Button>
                </div>
            </div>
            
            
        </div>
    )
};

export default Product;