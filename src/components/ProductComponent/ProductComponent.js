import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className='col-md-3' key={id}>
        <Link to={`/product/${id}`}>
          {/* <div className="ui link cards"> */}
          <div className="card h-100">
            <img className='card-img-top img-fluid w-50 mx-auto my-2' src={image} alt={title} />
            <div className="card-body">
              <div className="card-title">{title}</div>
              <div className="card-title">$ {price}</div>
              <div className="card-title">{category}</div>
            </div>
          </div>
        </Link>
        {/* </div> */}
      </div>
    );
  });

  return (
    <>{renderList}</>
  );
};

export default ProductComponent;