import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Товар 1', price: 100, description: 'Опис товару 1' },
  { id: 2, name: 'Товар 2', price: 150, description: 'Опис товару 2' },
  { id: 3, name: 'Товар 3', price: 200, description: 'Опис товару 3' },
];

let productList = [];
products.forEach((product) => {
    productList.push(
    <li key={product.id}>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
        <div className='price'>{product.price}</div>
    </li>
    )
});

function HomePage(){
  return (
    <div>
      <h1>Список товарів</h1>
      <ul>
        {/* {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
            <div className='price'>{product.price}</div>
          </li>

        ))} */}
        {productList}
      </ul>
    </div>
  );
};

export default HomePage;