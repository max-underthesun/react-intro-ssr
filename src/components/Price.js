import React from 'react';
import PropTypes from 'prop-types';
import { priceFormattedDollars } from 'src/helpers/formatters';

const Price = ({ price }) => (
  <div>
    { priceFormattedDollars(price) }
  </div>
);

Price.propTypes = {
  price: PropTypes.number
};

export default Price;
