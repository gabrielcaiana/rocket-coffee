import React from 'react';
import ProductListItem from './index';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

export default { title: 'ProductListItem', decorators: [withKnobs] };

export const standard = () => (
  <ProductListItem
    name={text('Nome', 'Standard Coffee')}
    preço={text('preço', '2,50')}
    onAddToCart={action('Add to cart clicked')}
    imageUrl={text(
      'imageUrl',
      'https://source.unsplash.com/tNALoIZhqVM/200x100/'
    )}
  ></ProductListItem>
);

export const soldOut = () => (
  <ProductListItem
    name={text('Name', 'Standard Coffee')}
    price={text('price', '2.50')}
    onAddToCart={action('Add to cart clicked')}
    imageUrl={text(
      'imageUrl',
      'https://source.unsplash.com/tNALoIZhqVM/200x100/'
    )}
    isSoldOut
  ></ProductListItem>
);

export const onSale = () => (
  <ProductListItem
    name={text('Name', 'Standard Coffee (On Sale)')}
    price={text('price', '2.50')}
    onAddToCart={action('Add to cart clicked')}
    imageUrl={text(
      'imageUrl',
      'https://source.unsplash.com/tNALoIZhqVM/200x100/'
    )}
    onSale
  ></ProductListItem>
);
