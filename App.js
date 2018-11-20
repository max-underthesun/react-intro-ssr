import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './src/components/ProductCard';
import CatalogPage from './src/containers/CatalogPage';

const App = ({ products }) => (
  <div>
    <CatalogPage products={ products }></CatalogPage>
  </div>
);

App.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      ...ProductCard.propTypes,
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default App;
