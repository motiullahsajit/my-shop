import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/actions/productActions';
import ProductComponent from '../ProductComponent/ProductComponent';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  console.log("products", products);
  return (
    <div className="container mt-5">
      <div className="row g-5 mt-5">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;