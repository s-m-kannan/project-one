import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slide from '../images/slide.jpg';
import './Product.css';
import white from '../images/white.jpeg';
import black from  '../images/black.jpeg';

function Product() {
  const [quantity, setQuantity] = useState(1);
 

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  function handleClick() {
    alert("your coffee is orderd :)")
  }
  return (
    <div className='main' >
      <h2>Enjoy With Coffee</h2>
      <img src={white} alt="Esperro Coffee" />
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <select
          className="form-select form-select-sm"
          aria-label="Small select example"
          
        >
          <option selected>choose the coffee</option>
          <option value="1">Espersso coffee</option>
          <option value="2">Capssino coffee</option>
          <option value="3">Flatwhite coffee</option>
        </select>
      </div>
      <div className="symbol">
        <button onClick={incrementQuantity}>+</button>
        <button>{quantity}</button>
        <button onClick={decrementQuantity}>-</button>
      </div>
      <button className="book" onClick={() => { handleClick() }}>
        Book Order
      </button>  
    </div>
  );
}

export default Product;
