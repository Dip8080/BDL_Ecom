import React from 'react';
import ('./Product.css')
const Product = ({img,diamondWeight,goldWeight,modelNo,key}) => {
    return (
        <div class="card w-full bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img className='product_image' src={img} alt="Shoes"  />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Model No : {modelNo}</h2>
          <p>Diamond weight : {diamondWeight}</p>
          <p>Gold Weight : {goldWeight}</p>
          <div class="card-actions">
            <button class="rounded p-2  bg-rose-200">Buy now</button>
          </div>
        </div>
      </div>
    );
};

export default Product;