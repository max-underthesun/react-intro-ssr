// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// import fetchRepos from './src/Github';
import ProductCard from './src/components/ProductCard';
import CatalogPage from './src/containers/CatalogPage';

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {

//     const { products } = this.props;

//     // console.log(products);

//     return (
//       <div>
//         <CatalogPage products={ products }></CatalogPage>
//       </div>
//     );
//   }
// }

const App = ({ products }) => (
  <div>
    <CatalogPage products={ products }></CatalogPage>
  </div>
);

// App.propTypes = PropTypes.shape(Catalog.propTypes);
// App.propTypes = {
//   products: PropTypes.arrayOf({
//     ...PropTypes.shape(Catalog.propTypes)
//   })
// };

App.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      ...ProductCard.propTypes,
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default App;
