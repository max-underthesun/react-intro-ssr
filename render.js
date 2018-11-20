import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './App';
import fetchProducts from './src/loaders/products';
const render = async () => {
  const products = await fetchProducts();
  // console.log('******************');

  // console.log(products);

  return ReactDOMServer.renderToString(<App products={ products }/>);
};

export default render;
