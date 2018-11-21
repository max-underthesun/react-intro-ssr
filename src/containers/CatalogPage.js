import React from 'react';
import PropTypes from 'prop-types';

import Catalog from 'src/components/Catalog';
import ProductCard from 'src/components/ProductCard';

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.products = props.products;
  }

  render() {
    return <Catalog products={ this.products }></Catalog>;
  }
}

CatalogPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      ...ProductCard.propTypes,
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CatalogPage;

