import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

const ProductCard = (props) => (
  <div>
    <Image src={ props.imageUrl }></Image>
    <TextBox text={ props.title }></TextBox>
    <Price price={ props.price }></Price>
  </div>
);

ProductCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number
};

export default ProductCard;
