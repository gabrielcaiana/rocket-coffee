import React from 'react';
import './ProductListItem.css';
import Button from '../../atoms/Button'
import Heading from '../../atoms/Heading'
import Card from '../../atoms/Card'
import Text from '../../atoms/Text'

export default function ProductListItem({
  name,
  price,
  imageUrl,
  onAddToCart,
  isSoldOut,
  isOnSale,
}) {
  return (
    <Card highlight={isOnSale}>
      <Heading> {name} </Heading>
      <img src={imageUrl} alt="" />
      <Text> {price} </Text>
      <Button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? 'Sold out' : 'Add to Cart'}
      </Button>
    </Card>
  );
}
