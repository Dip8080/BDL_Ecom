import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import ('./Product.css')

const Products = () => {
    const [jewls , setJewls] = useState([]);
    useEffect(()=>{
        fetch('DBLfakedata.json')
        .then(res=>res.json())
        .then(data=>setJewls(data))

    },[])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 w-full'>
            {
                jewls.slice(0,8).map(x=><Product key={x._id}
                      img={x.img}
                      diamondWeight={x.Diamond_weight}
                      goldWeight={x.gold_weight}
                      modelNo={x.model_No}
                      ></Product>)
            }


        </div>
    );
};

export default Products;