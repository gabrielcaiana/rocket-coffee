import React from 'react';
import './ProductListItem.css';

export default function ProductListItem({
  name,
  price,
  imageUrl,
  onAddToCart,
  isSoldOut,
  onSale,
}) {
  return (
    <div className={`card ${onSale ? 'onSale' : ''}`}>
      <h2>{name}</h2>
      <img src={imageUrl} alt="" />
      <small> {price} </small>
      <button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? 'Sold out' : 'Add to Cart'}
      </button>
    </div>
  );
}
