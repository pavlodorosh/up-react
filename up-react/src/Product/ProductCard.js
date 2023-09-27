import React from 'react';
import { useParams, Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Товар 1', price: 100, description: 'Опис товару 1' },
  { id: 2, name: 'Товар 2', price: 150, description: 'Опис товару 2' },
  { id: 3, name: 'Товар 3', price: 200, description: 'Опис товару 3' },
];

function ProductCard() {
  const { id } = useParams();
  console.log(id);
  const returnproduct = products.find((element) => element.id === Number(id));

  if (!returnproduct) {
    return <div>Товар не знайдено</div>;
  }

  return (
    <div>
      <h1>{returnproduct.name}</h1>
      <p>Ціна: {returnproduct.price}</p>
      <p>{returnproduct.description}</p>
      <Link to="/">Повернутись до списку товарів</Link>
    </div>
  );
};

export default ProductCard;