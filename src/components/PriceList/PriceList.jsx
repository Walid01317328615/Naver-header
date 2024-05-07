import React, { useEffect, useState } from 'react';
import PriceCart from '../priceCart/PriceCart';

const PriceList = () => {
    const [prices , setPrices] = useState([]);

    useEffect(()=>{

        fetch('prices.json')
        .then(res=>res.json())
        .then(data=>setPrices(data))

    },[])
    return (
        <div>

            <h3 className='text-5xl text-center '>products </h3>
            <div className=' md:grid grid-cols-3 gap-10'>
            {
                prices.map(price=><PriceCart
                  key = {price.id}
                price = {price}
                ></PriceCart>)
            }
           

            </div>
        
            
        </div>
    );
};

export default PriceList;