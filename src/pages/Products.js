//
//
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ProductContext } from '../context/products';

import Loading from '../components/Loading';
import ProductList from '../components/Products/ProductList';

export default function Products() {
  // eslint-disable-next-line no-unused-vars
  const { loading, products } = React.useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }

  return <ProductList title="our products" products={products} />;
}
