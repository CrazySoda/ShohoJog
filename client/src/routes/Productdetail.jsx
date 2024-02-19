import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/product/getSingleProduct/${id}`);
        const jsonData = await response.json();
        setProduct(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <h2>Product Details</h2>
      {product && (
        <div>
          <p>Product Name: {product.product_name}</p>
          <p>Price: {product.price}</p>
          <p>Category: {product.product_category}</p>
          <p>Status: {product.status}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
