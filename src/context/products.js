/* eslint-disable no-unused-vars */
//
//
// products context

import React from 'react';
import axios from 'axios';
import url from '../utils/URL';

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${url}/products`).then(response => {
      setProducts(response.data);
    });
    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
