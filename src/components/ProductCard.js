import React from 'react';
import PropTypes from 'prop-types';

import Image from 'src/components/Image';
import TextBox from 'src/components/TextBox';
import Price from 'src/components/Price';

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
