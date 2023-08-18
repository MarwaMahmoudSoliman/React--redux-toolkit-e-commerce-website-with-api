// import React, { useEffect, useState, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { ProductsContext } from '../Context/context/ProductsContext';
// const ProductDetailPage = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const { products } = useContext(ProductsContext);

//   useEffect(() => {
//     const foundProduct = products.find((item) => item.id === id);
//     setProduct(foundProduct);
//   }, [products, id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//     </div>
//   );
// };

// export default ProductDetailPage;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from "../API/api";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await fetchProducts();
      const selectedProduct = products.find((product) => product.id === id);
      setProduct(selectedProduct);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetailPage;