import React from 'react';
import ProductList from './index';
import { text, withKnobs } from '@storybook/addon-knobs';

export default { title: 'ProductList', decorators: [withKnobs] };

export const loading = () => (
  <ProductList status={text('is Loading', 'loading')}></ProductList>
);

export const errored = () => (
  <ProductList status={text('is Error', 'errored')}></ProductList>
);

export const loaded = () => (
  <ProductList status={text('is loaded', 'loaded')}></ProductList>
);
