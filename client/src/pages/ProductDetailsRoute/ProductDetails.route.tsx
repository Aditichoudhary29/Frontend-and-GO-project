import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetails } from '../ProductDetails/ProductDetails'

export const ProductDetailsRoute: React.FC = () => {
  const { productid } = useParams<{ productid?: string }>(); 

  if (!productid) {
   
    return <div>Product ID not found</div>;
  }

  return (
    <ProductDetails
      open={true} 
      onClose={() => {}}
      productId={productid} 
    />
  );
};

export default ProductDetailsRoute;
