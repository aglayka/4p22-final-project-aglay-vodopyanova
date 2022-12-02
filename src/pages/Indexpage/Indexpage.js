import './Indexpage.css';
import Card from '../../components/Card/Card';
import wing from '../../assets/img/wing.png';
import { useEffect, useState, useMemo } from 'react';

function Indexpage() {
  const [ products, setProducts ] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  useEffect(() => {
    console.log('Server connection!');
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((result) => {
          setProducts(result); 
          console.log(result);
        });
  }, []);

  const filteredList = useMemo(getFilteredList, [selectedCategory, products]);

  function getFilteredList() {
    if (!selectedCategory) {
      return products;
    }
    return products.filter((item) => item.category === selectedCategory);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <>
    <div className="filter__container">
      <div className="select__box">
          <div>
            <div className="select__category" >
              <select className="category__list"  name="category-list"  id="category-list"onChange={handleCategoryChange}>
                <option value="">All categories</option>
                <option value='electronics'>Electronics</option>
                <option value="jewelery">Jsewelry</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
              </select>
            </div>
          </div>
      </div>
      <div className="basket__box">
        <img className="basket__image" alt= {'basket'} src={wing} width="92" height="60" />
      </div>
    </div>
    <div className="card__product">
            <div className="card__container"> 
        {
          filteredList.map((item, index) => {
            return <Card key={index} 
                        id={item.id}
                        image={item.image} 
                        title={item.title} 
                        description={item.category.description} 
                        price={item.price}
                        onClick={() => console.log('card', item.category, item.title)} />
          })
        } 
      </div>
         </div>
  </>  
  );
}

export default Indexpage;

