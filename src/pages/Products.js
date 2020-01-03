//
//
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ProductContext } from '../context/products';

export default function Products() {
  // eslint-disable-next-line no-unused-vars
  const { loading, products } = React.useContext(ProductContext);

  console.log(products);

  return <h1>hello from products page</h1>;
}
