import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from 'src/components/ProductCard';

const style = {
  listStyle: 'none'
};

const Catalog = ({ products }) => (
  <ul style={ style }>
    {
      products.map(function(product) {
        return (
          <li  key={ product.id }>
            <ProductCard {...product}></ProductCard>
          </li>
        );
      })
    }
  </ul>
);

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      ...ProductCard.propTypes,
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Catalog;
