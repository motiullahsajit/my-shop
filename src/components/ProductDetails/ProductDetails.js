import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectedProduct } from '../../redux/actions/productActions';
import ProductComponent from '../ProductComponent/ProductComponent';

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => { console.log('err', err) })
    dispatch(selectedProduct(response.data));
  };
  return (
    <div className='ui grid container'>

    </div>
  );
};

export default ProductDetails;