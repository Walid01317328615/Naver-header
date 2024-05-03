import React from 'react';

const PriceCart = ({price}) => {
    return (
        <div>
            <p className='text-2xl font-extrabold text-green-700'>{price.id}</p>
            <p className='text-2xl font-bold'>{price.name}</p>
           
            
        </div>
    );
};

export default PriceCart;